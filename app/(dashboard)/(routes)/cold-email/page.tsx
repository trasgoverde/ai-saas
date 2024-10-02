"use client"

import React, { useState } from "react";
import axios from "axios";
import { MessageSquare } from "lucide-react";
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

const formSchema = z.object({
  product: z.string().min(1, "Product is required"),
  customerPersona: z.string().min(1, "Customer Persona is required"),
  prompt: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const desiredActions = {
  call: "Schedule a Call or Meeting",
  demo: "Request a Demo",
  download: "Download a Resource",
  survey: "Complete a Survey",
  webinar: "Sign Up for a Webinar",
  website: "Explore Our Website",
  colleague: "Refer a Colleague",
};

const ColdEmailPage = () => {
  const router = useRouter();
  const proModal = useProModal();
  const [selectedDesiredAction, setSelectedDesiredAction] = useState<keyof typeof desiredActions>("call");
  const [messages, setMessages] = useState<Message[]>([]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      product: "",
      customerPersona: "",
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: FormValues) => {
    try {
      const { product, customerPersona, prompt } = values;
      const contentPrompt = `Write a cold email that will draw in my ${customerPersona} with a relatable and authentic message, and then persuade them to ${desiredActions[selectedDesiredAction]} with a strong call-to-action and compelling visuals.\n${prompt}`;
     
      const userMessage: Message = { role: "user", content: contentPrompt };
      const newMessages = [...messages, userMessage];

      const response = await axios.post("/api/cold-email", { 
        messages: newMessages, 
        prompt: contentPrompt, 
        desiredAction: desiredActions[selectedDesiredAction],
        product
      });

      setMessages((current) => [...current, userMessage, response.data]);

      form.reset();
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 403) {
        proModal.onOpen();
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
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="product"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-4">
                    <FormLabel>Product/Service</FormLabel>
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
              <FormField
                name="customerPersona"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-4">
                    <FormLabel>Customer Persona</FormLabel>
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
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-6">
                    <FormLabel>Additional Instructions</FormLabel>
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Additional Instructions"
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
          <div className="bg-white rounded-md p-4">
            <p className="text-gray-700">Select desired action:</p>
            <div className="flex flex-wrap items-center gap-2">
              {(Object.keys(desiredActions) as Array<keyof typeof desiredActions>).map((action) => (
                <Button
                  key={action}
                  onClick={() => setSelectedDesiredAction(action)}
                  className={`text-sm ${
                    selectedDesiredAction === action ? "bg-violet-500 text-white" : "bg-gray-300 text-gray-600"
                  }`}
                >
                  {desiredActions[action]}
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

export default ColdEmailPage;