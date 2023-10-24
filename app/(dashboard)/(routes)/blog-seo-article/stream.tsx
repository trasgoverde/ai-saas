import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai"; // Import the OpenAI library

// Define the OpenAI API key
const openai = new OpenAI({
  key: process.env.OPENAI_API_KEY, // Replace with your actual API key
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { messages, prompt } = req.body;

    // Function to stream responses from the OpenAI API
    const streamOpenAIResponse = async () => {
      try {
        // Initialize a conversation with the provided messages
        const conversation = await openai.chat.create({
          messages,
        });

        // Start the chat conversation
        const responseStream = openai.chat.stream(conversation.id);

        // Set the Content-Type to text/event-stream for Server-Sent Events (SSE)
        res.setHeader("Content-Type", "text/event-stream");
        res.setHeader("Cache-Control", "no-cache");
        res.setHeader("Connection", "keep-alive");

        // Stream responses to the client
        responseStream.on("data", (data) => {
          // Send each response to the client as an SSE message
          res.write(`data: ${JSON.stringify(data)}\n\n`);
        });

        // Handle errors, if any
        responseStream.on("error", (error) => {
          console.error("Error with API request:", error);
          responseStream.cancel();
          res.end();
        });

        // Close the stream when done
        responseStream.on("end", () => {
          res.end();
        });
      } catch (error) {
        console.error("Error with API request:", error);
        res.status(500).json({ error: "Something went wrong." });
      }
    };

    // Start streaming OpenAI responses
    streamOpenAIResponse();
  } else {
    res.status(405).end();
  }
}
