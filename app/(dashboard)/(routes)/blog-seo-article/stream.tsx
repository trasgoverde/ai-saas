import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai"; // Import the OpenAI library

// Define the OpenAI API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Use the correct property name
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { messages } = req.body;

    // Function to stream responses from the OpenAI API
    const streamOpenAIResponse = async () => {
      try {
        // Initialize a conversation with the provided messages
        const responseStream = await openai.chat.completions.create({
          model: "gpt-3.5-turbo", // Specify the model
          messages,
          stream: true,
        });

        // Set the Content-Type to text/event-stream for Server-Sent Events (SSE)
        res.setHeader("Content-Type", "text/event-stream");
        res.setHeader("Cache-Control", "no-cache");
        res.setHeader("Connection", "keep-alive");

        // Stream responses to the client
        for await (const chunk of responseStream) {
          // Send each response to the client as an SSE message
          res.write(`data: ${JSON.stringify(chunk)}\n\n`);
        }

        // End the response
        res.end();
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