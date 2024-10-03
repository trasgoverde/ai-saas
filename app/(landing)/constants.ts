import * as z from "zod";

// Updated form schema to include all fields from page.tsx
export const formSchema = z.object({
  // Added topic field as required
  topic: z.string().min(1, {
    message: "Topic is required."
  }),
  // Added audience field as required
  audience: z.string().min(1, {
    message: "Audience is required."
  }),
  // Changed product to optional to match page.tsx
  product: z.string().optional(),
  // Renamed CustomerPersona to customerPersona for consistency
  customerPersona: z.string().optional(),
  prompt: z.string().optional(),
});

// Added desiredActions object to match page.tsx
export const desiredActions = {
  call: "Schedule a Call",
  demo: "Request a Demo",
  download: "Download a Resource",
  survey: "Complete a Survey",
  webinar: "Sign Up for a Webinar",
  website: "Explore Our Website",
  colleague: "Refer a Colleague",
};

// Added Message type definition
export type Message = {
  role: 'user' | 'assistant';
  content: string;
};

// Added FormValues type using zod inference
export type FormValues = z.infer<typeof formSchema>;
