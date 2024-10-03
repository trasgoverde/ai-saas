import * as z from "zod";

// Updated form schema to make only the product field required
export const formSchema = z.object({
  product: z.string().min(1, {
    message: "Product is required."
  }),
  benefit1: z.string().optional(),
  benefit2: z.string().optional(),
  benefit3: z.string().optional(),
  prompt: z.string().optional(),
});