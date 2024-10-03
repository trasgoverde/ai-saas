from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from crewai import Agent, Task, Process, Crew
import logging

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Set up logging
logging.basicConfig(level=logging.DEBUG)

# Ollama API endpoint
OLLAMA_API_URL = "http://localhost:11434/api/generate"

# Helper function to interact with Ollama's API
def generate_ollama_response(prompt):
    try:
        response = requests.post(
            OLLAMA_API_URL,
            json={"model": "llama3.1", "prompt": prompt},  # Change the model name if needed
        )
        response.raise_for_status()
        return response.json().get('text', '')  # Assuming the response contains 'text'
    except Exception as e:
        logging.error(f"Error generating response from Ollama: {e}")
        return None

# Define agents
class Agent:
    def __init__(self, role, goal, backstory, verbose):
        self.role = role
        self.goal = goal
        self.backstory = backstory
        self.verbose = verbose

    def respond(self, task_description):
        prompt = f"Role: {self.role}\nGoal: {self.goal}\nBackstory: {self.backstory}\nTask: {task_description}"
        return generate_ollama_response(prompt)

# Agents
router = Agent(
    role="Router Agent",
    goal="Receive input from the user and delegate it to the appropriate department agent based on the request.",
    backstory="You are the router agent responsible for understanding the user's request and directing it to the appropriate department within the office.",
    verbose=True
)

marketing = Agent(
    role="Marketing Department",
    goal="Handle marketing-related inquiries and provide relevant information and strategies.",
    backstory="You are a marketing expert responsible for addressing queries related to marketing strategies, market analysis, and promotional activities.",
    verbose=True
)

grader = Agent(
    role="Grader Agent",
    goal="Evaluate the responses from the department agents to ensure they are correct and do not contain hallucinations.",
    backstory="You are a grader responsible for evaluating the accuracy and relevance of responses provided by other agents to ensure they meet quality standards.",
    verbose=True
)

answering_agent = Agent(
    role="Answering Agent",
    goal="Print the final answer after it has been graded for correctness and relevance.",
    backstory="You are the answering agent responsible for delivering the final, validated response to the user.",
    verbose=True
)

# Task management class
class Task:
    def __init__(self, description, agent):
        self.description = description
        self.agent = agent

    def run(self):
        return self.agent.respond(self.description)

# Crew class to run tasks in sequence
class Crew:
    def __init__(self, agents, tasks, verbose=True, process='SEQUENTIAL'):
        self.agents = agents
        self.tasks = tasks
        self.verbose = verbose
        self.process = process

    def run(self):
        result = None
        for task in self.tasks:
            result = task.run()
            if self.verbose:
                logging.info(f"Task completed with result: {result}")
        return result

@app.route('/process_request', methods=['POST'])
def process_request():
    user_input = request.json.get('user_input')
    if not user_input:
        return jsonify({"error": "No user input provided"}), 400

    # Tasks
    router_task = Task(
        description=f"""Receive user input: "{user_input}" and delegate it to the appropriate department agent based on the request.""",
        agent=router
    )
    marketing_task = Task(
        description=f"""Handle marketing-related inquiries and provide relevant information and strategies for the user input: "{user_input}".""",
        agent=marketing
    )
    grader_task = Task(
        description=f"""Evaluate the responses from the marketing agent for the user input: "{user_input}" to ensure they are correct and do not contain hallucinations. If correct, send the response to the answering agent.""",
        agent=grader
    )
    answering_task = Task(
        description=f"""Print the final answer for the user input: "{user_input}".""",
        agent=answering_agent
    )

    # Create a crew and process
    crew = Crew(
        agents=[router, marketing, grader, answering_agent],
        tasks=[router_task, marketing_task, grader_task, answering_task],
        verbose=True,
        process='SEQUENTIAL'
    )

    try:
        result = crew.run()
    except Exception as e:
        logging.error(f"Error running crew: {e}")
        return jsonify({"error": "An error occurred while processing the request"}), 500

    return jsonify({"result": result})

@app.route('/submit_feedback', methods=['POST'])
def submit_feedback():
    feedback_data = request.json
    user_input = feedback_data.get('user_input')
    response = feedback_data.get('response')
    feedback = feedback_data.get('feedback')
    if not all([user_input, response, feedback]):
        return jsonify({"error": "Missing required feedback data"}), 400

    # Store feedback in a file
    with open('feedback.txt', 'a') as f:
        f.write(f"User input: {user_input}\nResponse: {response}\nFeedback: {feedback}\n\n")
    
    return jsonify({"message": "Feedback received and stored successfully"})

if __name__ == '__main__':
    app.run(debug=True)