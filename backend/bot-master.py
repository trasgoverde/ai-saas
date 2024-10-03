from fastapi import FastAPI, BackgroundTasks, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import uuid
from datasets import Dataset
from functools import partial
from loguru import logger
from time import sleep, time
from utils import generate_together_stream, generate_with_references, DEBUG
from rich.console import Console
from datasets.utils.logging import disable_progress_bar

disable_progress_bar()

app = FastAPI()
console = Console()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Default values
default_reference_models = [
    "llama3-8b-8192",
    "llama3-70b-8192",
    "mixtral-8x7b-32768",
    "gemma-7b-it",
]

welcome_message = """
# Welcome to the Taxonomy's Builder by Dipassio AI MoA (Mixture-of-Agents) 
# interactive AI App!

Mixture of Agents (MoA) is a novel approach that leverages the 
collective strengths of multiple LLMs to enhance performance, 
achieving state-of-the-art results. By employing a layered architecture 
where each layer comprises several LLM agents, MoA significantly outperforms 
GPT-4 Omni's 57.5% on AlpacaEval 2.0 with a score of 65.1%, using only open-source models!
"""

# In-memory storage for task progress and results
task_storage = {}

# Input model for the API
class GenerateRequest(BaseModel):
    model: str = "llama3-70b-8192"
    reference_models: List[str] = default_reference_models
    temperature: float = 0.7
    max_tokens: int = 2048
    rounds: int = 1
    multi_turn: bool = True
    taxonomy_node: str
    taxonomy_related: str

def generate_prompt(taxonomy_node, taxonomy_related):
    return f"""As an expert in disruptive technologies, provide a comprehensive analysis of the relationship between '{taxonomy_node}' and 
'{taxonomy_related}'. 
Context: These two technologies have been gaining traction in industries such as [list specific industries], with each bringing unique 
capabilities to the table. Our goal is to understand how their combination impacts industrial capabilities and industries.
Specifically, please analyze:
1. Relationship strength (1-5): How strong is the relationship between these two technologies?
2. Key interactions: What are the key synergies or interactions between '{taxonomy_node}' and '{taxonomy_related}' that drive 
their combined impact on industries and industrial capabilities?
3. Use cases and applications: Provide specific examples of how the combination of '{taxonomy_node}' and '{taxonomy_related}' 
has led to innovative solutions or improved outcomes in industries such as [list specific industries].
4. Startups and research groups: Identify notable startups and research groups that have successfully applied the combined capabilities of 
'{taxonomy_node}' and '{taxonomy_related}'. Provide examples of their work, applications, or products.
5. Value chain analysis: Analyze the value chain for both the industry and technology related to '{taxonomy_node}' and 
'{taxonomy_related}', highlighting key stakeholders, processes, and flows that are impacted by their combination.
Please provide detailed explanations and justifications for each point, ensuring that they are confirmed and supported by relevant sources."""

# Function that processes a single item
def process_fn(
    item,
    temperature=0.7,
    max_tokens=2048,
):
    references = item.get("references", [])
    model = item["model"]
    messages = item["instruction"]

    try:
        output = generate_with_references(
            model=model,
            messages=messages,
            references=references,
            temperature=temperature,
            max_tokens=max_tokens,
        )
        
        # Check if output is a string or has an 'output' key
        if isinstance(output, str):
            result = output
        elif isinstance(output, dict) and 'output' in output:
            result = output['output']
        elif isinstance(output, dict) and 'content' in output:
            result = output['content']
        else:
            raise ValueError(f"Unexpected output format: {output}")
        
        if DEBUG:
            logger.info(
                f"model: {model}, instruction: {item['instruction']}, output: {result[:20]}"
            )

        console.print(f"\nFinished querying [bold]{model}.[/bold]")
        return {"output": result}
    except Exception as e:
        logger.error(f"Error in process_fn: {str(e)}")
        return {"output": f"Error: {str(e)}"}

# Add a timeout for tasks (e.g., 5 minutes)
TASK_TIMEOUT = 300  # seconds

async def process_rounds(request_id: str, request: GenerateRequest):
    start_time = time()
    try:
        task_storage[request_id]["status"] = "processing"
        task_storage[request_id]["progress"] = 0

        instruction = generate_prompt(request.taxonomy_node, request.taxonomy_related)

        data = {
            "instruction": [[] for _ in range(len(request.reference_models))],
            "references": [""] * len(request.reference_models),
            "model": [m for m in request.reference_models],
        }

        # Multi-turn or single-turn interaction
        if request.multi_turn:
            for i in range(len(request.reference_models)):
                data["instruction"][i].append({"role": "user", "content": instruction})
                data["references"] = [""] * len(request.reference_models)
        else:
            data = {
                "instruction": [[{"role": "user", "content": instruction}]]
                * len(request.reference_models),
                "references": [""] * len(request.reference_models),
                "model": [m for m in request.reference_models],
            }

        eval_set = Dataset.from_dict(data)

        references = []
        for i_round in range(request.rounds):
            if time() - start_time > TASK_TIMEOUT:
                raise TimeoutError("Task processing timeout")

            try:
                eval_set = eval_set.map(
                    partial(
                        process_fn,
                        temperature=request.temperature,
                        max_tokens=request.max_tokens,
                    ),
                    batched=False,
                    num_proc=len(request.reference_models),
                )
                references = [item["output"] for item in eval_set]
                data["references"] = references
                eval_set = Dataset.from_dict(data)
            except Exception as e:
                logger.error(f"Error in round {i_round}: {str(e)}")
                references.append(f"Error in round {i_round}: {str(e)}")

            # Update progress after each round
            task_storage[request_id]["progress"] = int(((i_round + 1) / request.rounds) * 100)
            task_storage[request_id]["status"] = f"Processing round {i_round + 1}/{request.rounds}"

        # Final step: Aggregating results
        task_storage[request_id]["status"] = "Aggregating results"
        console.print("[cyan bold]Aggregating results & querying the aggregate model...[/cyan bold]")
        try:
            output = generate_with_references(
                model=request.model,
                temperature=request.temperature,
                max_tokens=request.max_tokens,
                messages=data["instruction"][0],
                references=references,
                generate_fn=generate_together_stream,
            )

            all_output = ""
            for chunk in output:
                out = chunk.choices[0].delta.content
                if out is not None:
                    all_output += out

            if DEBUG:
                logger.info(
                    f"model: {request.model}, instruction: {data['instruction'][0]}, output: {all_output[:20]}"
                )

            # Store the final result
            task_storage[request_id]["status"] = "completed"
            task_storage[request_id]["result"] = all_output
        except Exception as e:
            logger.error(f"Error in final aggregation: {str(e)}")
            task_storage[request_id]["status"] = "failed"
            task_storage[request_id]["error"] = f"Error in final aggregation: {str(e)}"

    except TimeoutError as e:
        logger.error(f"Task {request_id} timed out: {str(e)}")
        task_storage[request_id]["status"] = "failed"
        task_storage[request_id]["error"] = "Task processing timeout"
    except Exception as e:
        logger.error(f"Error processing task {request_id}: {str(e)}")
        task_storage[request_id]["status"] = "failed"
        task_storage[request_id]["error"] = str(e)

@app.post("/generate/")
async def generate_response(request: GenerateRequest, background_tasks: BackgroundTasks):
    """
    Endpoint to generate responses using specified model parameters.
    The task is processed in the background, and a unique request ID is returned.
    """
    # Generate a unique request ID
    request_id = str(uuid.uuid4())

    # Initialize the storage for this request
    task_storage[request_id] = {
        "status": "queued",
        "progress": 0,
        "result": None,
        "error": None,
    }

    # Run the background task for processing
    background_tasks.add_task(process_rounds, request_id, request)

    return {"request_id": request_id, "message": "Your request has been queued for processing."}

@app.get("/status/{request_id}")
def get_status(request_id: str):
    """
    Endpoint to check the status of a request.
    Returns the current status and progress (if applicable).
    """
    task = task_storage.get(request_id)
    if not task:
        raise HTTPException(status_code=404, detail="Request ID not found")

    return {
        "request_id": request_id,
        "status": task["status"],
        "progress": task["progress"],
        "error": task.get("error")
    }

@app.get("/result/{request_id}")
def get_result(request_id: str):
    """
    Endpoint to retrieve the final result of a processed request.
    Returns the generated output if the task is completed.
    """
    task = task_storage.get(request_id)
    if not task:
        raise HTTPException(status_code=404, detail="Request ID not found")

    if task["status"] == "failed":
        raise HTTPException(status_code=500, detail=f"Task failed: {task['error']}")

    if task["status"] != "completed":
        raise HTTPException(status_code=202, detail="The request is still being processed")

    return {
        "request_id": request_id,
        "result": task["result"]
    }

# Test endpoint
@app.get("/")
def read_root():
    return {"message": "Welcome to the Dipassio AI MoA API!"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)