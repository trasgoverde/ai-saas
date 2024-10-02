"use client"

import React, { useState } from "react";
import axios from "axios";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import OpenAI from "openai"; // Assuming you have OpenAI's ChatCompletionRequestMessage

import { BotAvatar } from "@/components/bot-avatar";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Loader } from "@/components/loader"; // Import the Loader component
import { UserAvatar } from "@/components/user-avatar";
import { Empty } from "@/components/ui/empty";
import { useProModal } from "@/hooks/use-pro-modal";
import { formSchema } from "./constants";
import { z } from "zod";

const BlogSeoPage = () => {
  const router = useRouter();
  const proModal = useProModal();
  const [messages, setMessages] = useState<OpenAI.Chat.CreateChatCompletionRequestMessage[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  // Your prompt for generating content
  const contentPrompt =
    "I want you to act as a Content writer very proficient SEO that speaks and writes fluently English*. Write an SEO-optimized Long Form article with a minimum of 2000 words. Please use a minimum of 10 headings and sub headings, included H1 heading, H2 headings, and H3, H4. The final paragraph should be a conclusion. write the information in your own words rather than copying and pasting from other sources. also double-check for plagiarism because I need pure unique content, write the content in a conversational style as if it were written by a human. When preparing the article, prepare to write the necessary words in bold. I want you to write content so that it can outrank other websites. Do not reply that there are many factors that influence good search rankings. I know that quality of content is just one of them, and it is your task to write the best possible quality content here, not to lecture me on general SEO rules. I give you the Title 'make money online' of an article that we need to outrank in Google. Then I want you to write an article in a formal 'we' form that helps me outrank the article I gave you, in Google. Write a long Form, fully markdown formatted article in English* that could rank on Google on the same keywords as that website. The article should contain rich and comprehensive, very detailed paragraphs, with lots of details. Do not echo my prompt. Let the article be a long Form article of a minimum of 2000 words. Do not remind me what I asked you for. Do not apologize. Do not self-reference. Do not use generic filler phrases. Do use useful subheadings with keyword-rich titles. Get to the point precisely and accurately. Make headings bold and appropriate for h tags."; // Insert your entire prompt here

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = { role: "user", content: values.prompt };
      const newMessages = [...messages, userMessage];

      // Send a request to OpenAI to generate content
      const response = await axios.post("/api/blog-seo-article", { messages: newMessages, prompt: contentPrompt });

      // Append the generated content to the messages
      setMessages((current) => [...current, userMessage, response.data]);

      form.reset();
    } catch (error: unknown) {
      if (error instanceof Error && 'response' in error && typeof error.response === 'object' && error.response && 'status' in error.response) {
        if (error.response.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Something went wrong.");
      }
    } else {
      toast.error("An unexpected error occurred.");
    }

    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Conversation"
        description="Our most advanced conversation model."
        icon={MessageSquare}
        iconColor="text-violet-500"
        bgColor="bg-violet-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="
                rounded-lg
                border
                w-full
                p-4
                px-3
                md:px-6
                focus-within:shadow-sm
                grid
                grid-cols-12
                gap-2
              "
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Write here the Article specifications needed, Keywords, Products or Services"
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
          {messages.length === 0 && !isLoading && <Empty label="No conversation started." />}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div
                key={message.content}
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  message.role === "user" ? "bg-white border border-black/10" : "bg-muted"
                )}
              >
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <p className="text-sm">{message.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSeoPage;
