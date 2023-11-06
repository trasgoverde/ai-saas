import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";

// Make sure you have the configuration object or retrieve it from the environment variables.
const configuration = {
  apiKey: process.env.OPENAI_API_KEY,
};

const openai = new OpenAI({
  apiKey: configuration.apiKey,
});

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!configuration.apiKey) {
      return new NextResponse("OpenAI API Key not configured.", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    // Construct the contentPrompt
    //const contentPrompt = messages.join("\n");

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
    });

    // Use the response from OpenAI to generate the landing page content
    //const landingPageContent = response.choices[0].message.content;

    // Handle the landing page content as needed

    return NextResponse.json(response.choices[0].message );
  } catch (error) {
    console.log('[COLD-EMAIL_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
