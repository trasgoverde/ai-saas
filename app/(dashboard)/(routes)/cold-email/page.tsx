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

const ColdEmailPage = () => {
  const router = useRouter(); // Corrected import
  const proModal = useProModal();
  const [messages, setMessages] = useState<OpenAI.Chat.CreateChatCompletionRequestMessage[]>([]);
  const [selectedDesiredAction, setSelectedDesiredAction] = useState("assertive"); // Corrected spelling

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      CustomerPersona: "",
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const desiredAction = {
    call: "Schedule a Call or Meeting",
    demo: "Request a Demo",
    download: "Download a Resource",
    survey: "Complete a Survey",
    webinar: "Sign Up for a Webinar",
    website: "Explore Our Website",
    colleague: "Refer a Colleague",
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const { product, prompt } = values;
      const contentPrompt = `Write a cold email that will draw in my ${values.CustomerPersona} with a relatable and authentic message, and then persuade them to take ${selectedDesiredAction} with a strong call-to-action and compelling visuals.\n${prompt}`;
     
      const userMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = { role: "user", content: contentPrompt };
      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/cold-email", { messages: newMessages, prompt: contentPrompt });

      setMessages((current) => [...current, userMessage, response.data]);

      form.reset();
    } catch (error) {
      if (error.response && error.response.status === 403) {
        proModal.onOpen();
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      router.reload(); // Corrected function name
    }
  };

  const handleDesiredActionChange = (desiredAction) => {
    setSelectedDesiredAction(desiredAction);
  };

  return (
    <div>
      <Heading
        title="Cold Email Generator"
        description="Generate emails and headlines with different call-to-action."
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
              <FormItem className="col-span-12 lg:col-span-4">
                <FormControl className="m-0 p-0">
                  <Input
                    className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                    disabled={isLoading}
                    placeholder="Product/Service"
                    {...form.register("product")}
                  />
                </FormControl>
              </FormItem>
              <FormItem className="col-span-12 lg:col-span-4">
                <FormControl className="m-0 p-0">
                  <Input
                    className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                    disabled={isLoading}
                    placeholder="Customer Persona"
                    {...form.register("CustomerPersona")}
                  />
                </FormControl>
              </FormItem>
             
              <FormItem className="col-span-12 lg:col-span-6">
                <FormControl className="m-0 p-0">
                  <Input
                    className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                    disabled={isLoading}
                    placeholder={`Additional Instructions`}
                    {...form.register("prompt")}
                  />
                </FormControl>
              </FormItem>
              <Button className="col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          <div className="bg-white rounded-md p-4">
            <p className="text-gray-700">Select desired action:</p>
            <div className="flex items-center space-x-4">
              {Object.keys(desiredAction).map((action) => (
                <Button
                  key={action}
                  onClick={() => handleDesiredActionChange(action)}
                  className={`text-sm ${
                    selectedDesiredAction === action ? "bg-violet-500 text-white" : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {desiredAction[action]}
                </Button>
              ))}
            </div>
          </div>
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

export default ColdEmailPage;