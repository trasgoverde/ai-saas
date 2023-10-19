"use client"

import React, { useState } from 'react';
import Head from 'next/head';

import * as z from "zod";
import axios from "axios";
import { Webhook } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/navigation";
import { ChatCompletionRequestMessage } from "openai";

import { BotAvatar } from "@/components/bot-avatar";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Loader } from "@/components/loader";
import { UserAvatar } from "@/components/user-avatar";
import { Empty } from "@/components/ui/empty";
import { useProModal } from "@/hooks/use-pro-modal";

import { formSchema } from "./constants";

const ColdEmailPage: React.FC = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [apiOutput, setApiOutput] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);

    console.log("Calling OpenAI...");
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text);

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  };

  const onUserChangedText = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };

  return (
    <div className="root">
      <Heading
        title="SEO & Content Generation"
        description="Generate SEO Keywords & Content using descriptive text of your product or service and niche."
        icon={Webhook}
        iconColor="text-green-700"
        bgColor="bg-green-700/10"
      />
      <div className="container">
        <div className="header">
          <div className="header-subtitle">
            <a href="https://www.dipass.io" className="text-white">
              <h1>DIPASS.IO</h1>
            </a>
          </div>
          <div className="header-title">
            <h1>Cold Email Brain</h1>
          </div>
          <div className="header-subtitle">
            <h2>powered by DIPASSIO-AI</h2>
          </div>
        </div>
      </div>
      <div className="col-span-12 lg:col-span-10">
        <div className="text-gray-500 text-center">Paste your Preferences below and our AI tool will give you</div>
        <div className="text-gray-500">Correct Text for your customer!</div>
        <textarea 
          placeholder="Start typing here..."
          className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
          value={userInput}
          onChange={onUserChangedText}
        />
        <Button>
          <a
            className={isGenerating ? 'generate-button loading' : 'generate-button'}
            onClick={callGenerateEndpoint}
          >
            <div className="generate">
              {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
            </div>
          </a>
          </Button >
        {apiOutput && (
          <div className="output">
            <div className="output-header-container">
              <div className="output-header text-gray-600">
                <h1>Results</h1>
              </div>
            </div>
            <div className="output-content" style={{ backgroundColor: "#ff4f12", padding: "10px", marginBottom: "40px" }}>
              {apiOutput}
            </div>
          </div>
        )}
        <div className="text-gray-500"> <h1>Note:</h1></div>
        <div className="text-gray-500">🪲 Generate a few times to make sure you find all the bugs 🪲 </div>
        <div className="text-gray-500"><h1>Disclaimer:</h1></div>
        <div className="text-gray-500">💀 This tool is in beta and should not be a source of actual auditing. Use at your own risk 💀</div>
        <div className="header-title text-gray-500">
          <div><h2>For Full Solidity Smart Contracts Audits</h2></div>
        </div>
        <div className="header-title text-gray-500">
          <div><h2>Web3 Developments</h2></div>
        </div>
        <div className="header-title text-gray-500">
          <div><h2>Dipassio is Open for Enquiries:</h2></div>
        </div>
        <div className="header-title text-gray-500" style={{ padding: "10px", marginBottom: "60px" }}>
          <a href="mailto:hello@dipass.io" className="text-gray-700">
            <div><h2>hello@dipass.io</h2></div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ColdEmailPage;
