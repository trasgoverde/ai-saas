import os
from crewai import Agent, Task, Process, Crew
from langchain_google_genai import ChatGoogleGenerativeAI

# Set Google API Key
os.environ["GOOGLE_API_KEY"] = "AIzaSyDkDv8OOgmAetj3eDMADSYo-t9FFxSC9MQ"

llm = ChatGoogleGenerativeAI(
    model="gemini-1.5-flash",
    verbose=True,
    temperature=0.5,
    google_api_key=os.getenv("GOOGLE_API_KEY")
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

development = Agent(
    role="Development Department",
    goal="Handle development-related inquiries and provide technical solutions and advice.",
    backstory="You are a development expert responsible for addressing queries related to software development, coding practices, and technical solutions.",
    verbose=True,
    llm=llm
)

testing = Agent(
    role="Testing Department",
    goal="Handle testing-related inquiries and provide quality assurance strategies and practices.",
    backstory="You are a testing expert responsible for addressing queries related to software testing, quality assurance, and testing methodologies.",
    verbose=True,
    llm=llm
)

sales = Agent(
    role="Sales Department",
    goal="Handle sales-related inquiries and provide sales strategies and client management advice.",
    backstory="You are a sales expert responsible for addressing queries related to sales strategies, client management, and revenue generation.",
    verbose=True,
    llm=llm
)

hr = Agent(
    role="HR Department",
    goal="Handle human resources-related inquiries and provide HR policies and management advice.",
    backstory="You are an HR expert responsible for addressing queries related to human resources management, employee relations, and HR policies.",
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

feedback_agent = Agent(
    role="Feedback Agent",
    goal="Collect user feedback on the provided responses.",
    backstory="You are responsible for collecting and processing user feedback to help improve the system.",
    verbose=True,
    llm=llm
)

# Function to simulate user input
def get_user_input():
    return input("Enter your request: ")

# Function to collect feedback
def get_user_feedback():
    feedback = input("Please rate the response (1-5): ")
    return int(feedback)

# Tasks
user_input = get_user_input()

router_task = Task(
    description=f"""Receive user input: "{user_input}" and delegate it to the appropriate department agent based on the request.""",
    agent=router,
    expected_output="""The router agent should correctly identify the user's request and delegate it to the appropriate department agent."""
)

marketing_task = Task(
    description=f"""Handle marketing-related inquiries and provide relevant information and strategies for the user input: "{user_input}".""",
    agent=marketing,
    expected_output="""The marketing department should provide accurate and relevant marketing strategies, market analysis, and promotional activities."""
)

grader_task = Task(
    description=f"""Evaluate the responses from the marketing agent for the user input: "{user_input}" to ensure they are correct and do not contain hallucinations. If correct, send the response to the answering agent.""",
    agent=grader,
    expected_output="""The grader agent should evaluate responses for accuracy and relevance, ensuring no hallucinations, and then send the final answer to the answering agent if correct."""
)

answering_task = Task(
    description=f"""Print the final answer for the user input: "{user_input}".""",
    agent=answering_agent,
    expected_output="""The answering agent should print the final, validated response to the user."""
)

feedback_task = Task(
    description="Collect user feedback on the provided response.",
    agent=feedback_agent,
    expected_output="The feedback agent should collect and process user feedback."
)

# Create a crew and process
crew = Crew(
    agents=[router, marketing, grader, answering_agent, feedback_agent],
    tasks=[router_task, marketing_task, grader_task, answering_task, feedback_task],
    verbose=2,
    process=Process.sequential  # Sequential process to ensure tasks are executed one after another
)

print("Starting crew kickoff...")
result = crew.kickoff()
print("Crew kickoff finished.")
print("######################")
print(result)

# Collect user feedback
feedback = get_user_feedback()
print(f"Feedback received: {feedback}")

# You can store this feedback in a file or database for further analysis and improvement
with open('feedback.txt', 'a') as f:
    f.write(f"User input: {user_input}\nResponse: {result}\nFeedback: {feedback}\n\n")