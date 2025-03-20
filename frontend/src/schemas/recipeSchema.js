import * as z from "zod";

export const RecipeSchema = z.object({
  title: z.string().min(1, {
    message: "Please enter a recipe title"
  }),
  description: z.string().min(1, {
    message: "Please enter a recipe description"
  }),
  instructions: z.string().min(1, {
    message: "Please enter recipe instructions"
  })
});