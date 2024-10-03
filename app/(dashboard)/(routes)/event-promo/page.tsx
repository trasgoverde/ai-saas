"use client";

import React, { useState } from "react";
import axios from "axios";
import { FileText } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

import { BotAvatar } from "@/components/bot-avatar";
import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { Loader } from "@/components/loader";
import { UserAvatar } from "@/components/user-avatar";
import { Empty } from "@/components/ui/empty";
import { useProModal } from "@/hooks/use-pro-modal";
import { z } from "zod";
import { BLOG_SEO_ARTICLE_ROUTE } from '@/app/api/routes';

const formSchema = z.object({
  topic: z.string().min(1, "Topic is required"),
  audience: z.string().min(1, "Audience is required"),
  product: z.string().optional(),
  customerPersona: z.string().optional(),
  prompt: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const desiredActions = {
  call: "Schedule a Call",
  demo: "Request a Demo",
  download: "Download a Resource",
  survey: "Complete a Survey",
  webinar: "Sign Up for a Webinar",
  website: "Explore Our Website",
  colleague: "Refer a Colleague",
};

const BlogSeoPage = () => {
  const router = useRouter();
  const proModal = useProModal();
  const [selectedDesiredAction, setSelectedDesiredAction] = useState<keyof typeof desiredActions>("call");
  const [messages, setMessages] = useState<Message[]>([]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      topic: "",
      audience: "",
      product: "",
      customerPersona: "",
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: FormValues) => {
    try {
      const { topic, audience, product, customerPersona, prompt } = values;
      const contentPrompt = `I want you to act as a Content writer very proficient SEO that speaks and writes fluently English*. Write a blog SEO-friendly article about ${topic} for my ${audience}. ${product ? `Product: ${product}. ` : ""}${customerPersona ? `Target audience: ${customerPersona}. ` : ""}Write an SEO-optimized Long Form article with a minimum of 2000 words. Please use a minimum of 10 headings and sub headings, included H1 heading, H2 headings, and H3, H4. The final paragraph should be a conclusion. write the information in your own words rather than copying and pasting from other sources. also double-check for plagiarism because I need pure unique content, write the content in a conversational style as if it were written by a human. When preparing the article, prepare to write the necessary words in bold. I want you to write content so that it can outrank other websites. Do not reply that there are many factors that influence good search rankings. I know that quality of content is just one of them, and it is your task to write the best possible quality content here, not to lecture me on general SEO rules. I give you the Title 'make money online' of an article that we need to outrank in Google. Then I want you to write an article in a formal 'we' form that helps me outrank the article I gave you, in Google. Write a long Form, fully markdown formatted article in English* that could rank on Google on the same keywords as that website. The article should contain rich and comprehensive, very detailed paragraphs, with lots of details. Do not echo my prompt. Let the article be a long Form article of a minimum of 2000 words. Do not remind me what I asked you for. Do not apologize. Do not self-reference. Do not use generic filler phrases. Do use useful subheadings with keyword-rich titles. Get to the point precisely and accurately. Make headings bold and appropriate for h tagsUse relevant keywords and include a strong call to action to ${desiredActions[selectedDesiredAction]}. ${prompt || ""}`;

      const userMessage: Message = { role: "user", content: contentPrompt };
      const newMessages = [...messages, userMessage];

      const response = await axios.post(BLOG_SEO_ARTICLE_ROUTE, { 
        messages: newMessages, 
        topic, 
        audience, 
        product, 
        customerPersona, 
        desiredAction: selectedDesiredAction,
        prompt: contentPrompt
      });

      // Handle the response based on its structure
      let assistantMessage: Message;
      if (typeof response.data === 'object' && 'content' in response.data) {
        assistantMessage = { 
          role: "assistant", 
          content: response.data.content 
        };
      } else if (typeof response.data === 'string') {
        assistantMessage = { 
          role: "assistant", 
          content: response.data 
        };
      } else {
        throw new Error("Unexpected response format");
      }

      setMessages((current) => [...current, userMessage, assistantMessage]);

      form.reset();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 403) {
        proModal.onOpen();
      } else if (axios.isAxiosError(error) && error.response?.status === 400) {
        toast.error("Invalid request. Please check your inputs.");
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div>
      <Heading
        title="Event Promo Generator"
        description="Generate Event Promos with compelling CTAs."
        icon={FileText}
        iconColor="text-blue-500"
        bgColor="bg-blue-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 grid grid-cols-12 gap-2"
            >
              {/* Topic Input */}
              <FormField
                name="topic"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-4">
                    <FormLabel>Topic</FormLabel>
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Blog Topic"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Audience Input */}
              <FormField
                name="audience"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-4">
                    <FormLabel>Audience</FormLabel>
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Target Audience"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Product Input (Optional) */}
              <FormField
                name="product"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-4">
                    <FormLabel>Product (Optional)</FormLabel>
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Product/Service"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Customer Persona Input (Optional) */}
              <FormField
                name="customerPersona"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-4">
                    <FormLabel>Customer Persona (Optional)</FormLabel>
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Customer Persona"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Additional Instructions */}
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-6">
                    <FormLabel>Additional Instructions</FormLabel>
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Extra details (optional)"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <Button className="col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">
                {isLoading ? <Loader /> : "Generate"}
              </Button>
            </form>
          </Form>
        </div>

        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-md p-4">
            <p className="text-gray-700">Select desired action:</p>
            <div className="flex flex-wrap items-center gap-2">
              {/* Desired Action Buttons */}
              {Object.keys(desiredActions).map((action) => (
                <Button
                  key={action}
                  onClick={() => setSelectedDesiredAction(action as keyof typeof desiredActions)}
                  className={`text-sm ${
                    selectedDesiredAction === action ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {desiredActions[action as keyof typeof desiredActions]}
                </Button>
              ))}
            </div>
          </div>

          {/* Loading & Messages */}
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
              <Loader />
            </div>
          )}

          {!isLoading && messages.length === 0 && <Empty label="No conversation started." />}

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