// ./constants.ts

import * as z from "zod";

export const formSchema = z.object({
  product: z.string().min(1, {
    message: "Product is required."
  }),
  CustomerPersona: z.string().optional(), // Optional CustomerPersona field
  prompt: z.string().optional(), // Optional prompt field
});
