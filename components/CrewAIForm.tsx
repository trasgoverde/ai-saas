"use client"

import React, { useState } from 'react';
import { FileText, Star, Zap, Lightbulb, Users, GitBranch } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Heading } from "@/components/heading";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader } from "@/components/loader";
import { Empty } from "@/components/ui/empty";
import { cn } from "@/lib/utils";
import { BotAvatar } from "@/components/bot-avatar";
import { UserAvatar } from "@/components/user-avatar";

const formSchema = z.object({
  taxonomyNode: z.string().min(1, "First product name is required"),
  taxonomyRelated: z.string().min(1, "Second market name is required"),
});

type FormValues = z.infer<typeof formSchema>;

interface ApiResponse {
  request_id: string;
  message: string;
}

interface ResultResponse {
  request_id: string;
  result: string;
}

export default function CrewAIForm() {
  const [apiResponse, setApiResponse] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      taxonomyNode: "",
      taxonomyRelated: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8000/generate/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: "llama3-70b-8192",
          reference_models: ["llama3-8b-8192", "llama3-70b-8192", "mixtral-8x7b-32768", "gemma-7b-it"],
          temperature: 0.7,
          max_tokens: 2048,
          rounds: 1,
          multi_turn: true,
          taxonomy_node: values.taxonomyNode,
          taxonomy_related: values.taxonomyRelated
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data: ApiResponse = await response.json();
      
      // Poll for results
      const result = await pollForResult(data.request_id);
      setApiResponse(result);
      setMessages(prev => [
        ...prev, 
        { role: 'user', content: `Analyze the relationship between ${values.taxonomyNode} and ${values.taxonomyRelated}` },
        { role: 'assistant', content: result }
      ]);
    } catch (error) {
      console.error('Error:', error);
      setApiResponse('An error occurred while processing your request.');
    } finally {
      setIsLoading(false);
    }
  };

  const pollForResult = async (requestId: string): Promise<string> => {
    const maxAttempts = 60;
    const delayMs = 5000;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      try {
        const response = await fetch(`http://localhost:8000/status/${requestId}`);
        const data = await response.json();

        if (data.status === 'completed') {
          const resultResponse = await fetch(`http://localhost:8000/result/${requestId}`);
          const resultData: ResultResponse = await resultResponse.json();
          return resultData.result;
        } else if (data.status === 'failed') {
          throw new Error(`Task failed: ${data.error}`);
        }

        setApiResponse(`Status: ${data.status}, Progress: ${data.progress}%`);
      } catch (error) {
        console.error('Error polling for result:', error);
        throw error;
      }

      await new Promise(resolve => setTimeout(resolve, delayMs));
    }

    throw new Error('Timeout waiting for result');
  };

  const renderResult = (content: string) => {
    const sections = content.split('**').filter(s => s.trim());
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">{sections[0]}</h2>
        {sections.slice(1).map((section, index) => {
          const [title, ...content] = section.split('\n');
          const Icon = [Star, Zap, Lightbulb, Users, GitBranch][index] || FileText;
          return (
            <Card key={index} className="overflow-hidden">
              <CardHeader className="bg-gray-50 flex items-center space-x-2 p-4">
                <div className="flex items-center space-x-2 w-full">
                  <Icon className="h-5 w-5 text-blue-500 flex-shrink-0" />
                  <h3 className="text-lg font-semibold text-gray-700 flex-grow">{title}</h3>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="prose prose-sm max-w-none">
                  {content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="mb-2 text-justify">{paragraph}</p>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <Heading
        title="Taxonomy Builder"
        description="Generate comprehensive analysis of relationships between products and markets."
        icon={FileText}
        iconColor="text-orange-700"
        bgColor="bg-orange-700/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2">
              <FormField
                name="taxonomyNode"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-5">
                    <FormLabel>First Product Name</FormLabel>
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Enter first product name"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="taxonomyRelated"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-5">
                    <FormLabel>Second Market Name</FormLabel>
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Enter second market name"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label="No conversation started." />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  message.role === "user" ? "bg-white border border-black/10" : "bg-muted"
                )}
              >
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <div className="flex-1">
                  {message.role === "user" ? (
                    <p className="text-sm">{message.content}</p>
                  ) : (
                    renderResult(message.content)
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}