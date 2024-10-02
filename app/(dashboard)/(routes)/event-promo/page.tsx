"use client"

import React, { useState } from "react";
import axios from "axios";
import { MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import OpenAI from "openai"; // Assuming you have OpenAI's ChatCompletionRequestMessage

import { BotAvatar } from "@/components/bot-avatar"; // Ensure consistent casing
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
import { z } from "zod"; // Import Zod

// Define your form schema using Zod
const formSchema = z.object({
  eventDetails: z.string().nonempty("Event details are required"),
  // Add other fields as needed
});

const EventPromoPage = () => {
  const router = useRouter();
  const proModal = useProModal();
  const [messages, setMessages] = useState<OpenAI.Chat.CreateChatCompletionRequestMessage[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      eventDetails: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const userMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = { role: "user", content: values.eventDetails };
      const newMessages = [...messages, userMessage];

      // Send a request to OpenAI to generate content
      const response = await axios.post("/api/event-promo", { messages: newMessages, prompt: values.eventDetails });

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

  const renderMessageContent = (content: any) => {
    if (typeof content === "string") {
      return content;
    } else if (Array.isArray(content)) {
      return content.map((part, i) => <span key={i}>{part.text}</span>); // Assuming part has a text property
    } else {
      return null;
    }
  };

  return (
    <div>
      <Heading
        title="Event Promo Generator"
        description="Generate event promotion content."
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
                name="eventDetails"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Write here the Event details"
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
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`} // Use a combination of role and index for a unique key
                className={cn(
                  "p-8 w-full flex items-start gap-x-8 rounded-lg",
                  message.role === "user" ? "bg-white border border-black/10" : "bg-muted"
                )}
              >
                {message.role === "user" ? <UserAvatar /> : <BotAvatar />}
                <p className="text-sm">
                  {renderMessageContent(message.content)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventPromoPage;