from fastapi import FastAPI, BackgroundTasks
from pydantic import BaseModel
from typing import List, Optional
from datasets import Dataset
from functools import partial
from loguru import logger
from time import sleep
from utils import generate_together_stream, generate_with_references, DEBUG
from rich.console import Console
from datasets.utils.logging import disable_progress_bar

disable_progress_bar()

app = FastAPI()
console = Console()

# Default values
default_reference_models = [
    "llama3-8b-8192",
    "llama3-70b-8192",
    "mixtral-8x7b-32768",
    "gemma-7b-it",
]

welcome_message = """
# Welcome to the Taxonomy's Builder by Ainfinity AI MoA (Mixture-of-Agents) interactive AI App!

Mixture of Agents (MoA) is a novel approach that leverages the collective strengths of multiple LLMs to enhance performance, achieving state-of-the-art results. By employing a layered architecture where each layer comprises several LLM agents, MoA significantly outperforms GPT-4 Omni’s 57.5% on AlpacaEval 2.0 with a score of 65.1%, using only open-source models!
"""

# Input model for the API
class GenerateRequest(BaseModel):
    model: str = "llama3-70b-8192"
    reference_models: List[str] = default_reference_models
    temperature: float = 0.7
    max_tokens: int = 2048
    rounds: int = 1
    multi_turn: bool = True
    instruction: str

# Function that processes a single item
def process_fn(
    item,
    temperature=0.7,
    max_tokens=2048,
):
    references = item.get("references", [])
    model = item["model"]
    messages = item["instruction"]

    output = generate_with_references(
        model=model,
        messages=messages,
        references=references,
        temperature=temperature,
        max_tokens=max_tokens,
    )
    if DEBUG:
        logger.info(
            f"model: {model}, instruction: {item['instruction']}, output: {output[:20]}"
        )

    console.print(f"\nFinished querying [bold]{model}.[/bold]")
    return {"output": output}


@app.post("/generate/")
async def generate_response(request: GenerateRequest, background_tasks: BackgroundTasks):
    """
    Endpoint to generate responses using specified model parameters.
    """
    data = {
        "instruction": [[] for _ in range(len(request.reference_models))],
        "references": [""] * len(request.reference_models),
        "model": [m for m in request.reference_models],
    }

    # Simulating console and interaction
    console.print(welcome_message)

    # Multi-turn or single-turn interaction
    if request.multi_turn:
        for i in range(len(request.reference_models)):
            data["instruction"][i].append({"role": "user", "content": request.instruction})
            data["references"] = [""] * len(request.reference_models)
    else:
        data = {
            "instruction": [[{"role": "user", "content": request.instruction}]]
            * len(request.reference_models),
            "references": [""] * len(request.reference_models),
            "model": [m for m in request.reference_models],
        }

    eval_set = Dataset.from_dict(data)

    # Running the processing in background
    async def process_rounds():
        references = []
        for i_round in range(request.rounds):
            eval_set.map(
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

        console.print("[cyan bold]Aggregating results & querying the aggregate model...[/cyan bold]")
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

        # Append the response from the assistant
        if request.multi_turn:
            for i in range(len(request.reference_models)):
                data["instruction"][i].append(
                    {"role": "assistant", "content": all_output}
                )

    background_tasks.add_task(process_rounds)

    return {"status": "processing", "message": "Your request is being processed. Please check back soon."}

# Test endpoint
@app.get("/")
def read_root():
    return {"message": "Welcome to the Ainfinity AI MoA API!"}
