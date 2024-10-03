from flask import Flask, request, jsonify
import os
from crewai import Agent, Task, Process, Crew
from langchain_google_genai import ChatGoogleGenerativeAI

app = Flask(__name__)

# Set Google API Key
os.environ["GOOGLE_API_KEY"] = "AIzaSyDkDv8OOgmAetj3eDMADSYo-t9FFxSC9MQ"
llm = ChatGoogleGenerativeAI(
    model="gemini-1.5-flash",
    verbose=True,
    temperature=0.5,
    google_api_key="AIzaSyDkDv8OOgmAetj3eDMADSYo-t9FFxSC9MQ"
)

# Define agents
router = Agent(
    role="Router Agent",
    goal="Receive input from the user and delegate it to the appropriate department agent based on the request.",
    backstory="You are the router agent responsible for understanding the user's request and directing it to the appropriate department within the office.",
    verbose=True,
    allow_delegation=True,
    llm=llm
)

marketing = Agent(
    role="Marketing Department",
    goal="Handle marketing-related inquiries and provide relevant information and strategies.",
    backstory="You are a marketing expert responsible for addressing queries related to marketing strategies, market analysis, and promotional activities.",
    verbose=True,
    llm=llm
)

grader = Agent(
    role="Grader Agent",
    goal="Evaluate the responses from the department agents to ensure they are correct and do not contain hallucinations.",
    backstory="You are a grader responsible for evaluating the accuracy and relevance of responses provided by other agents to ensure they meet quality standards.",
    verbose=True,
    llm=llm
)

answering_agent = Agent(
    role="Answering Agent",
    goal="Print the final answer after it has been graded for correctness and relevance.",
    backstory="You are the answering agent responsible for delivering the final, validated response to the user.",
    verbose=True,
    llm=llm
)

@app.route('/process_request', methods=['POST'])
def process_request():
    user_input = request.json.get('user_input')
    if not user_input:
        return jsonify({"error": "No user input provided"}), 400

    # Tasks
    router_task = Task(
        description=f"""Receive user input: "{user_input}" and delegate it to the appropriate department agent based on the request. """,
        agent=router
    )
    marketing_task = Task(
        description=f"""Handle marketing-related inquiries and provide relevant information and strategies for the user input: "{user_input}" """,
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
        process=Process.SEQUENTIAL
    )

    result = crew.run()
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
