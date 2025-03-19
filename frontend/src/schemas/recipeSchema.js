import * as z from "zod";

// recipe fields
// title (required)
// description (required)
// instructions (required)
// ingredients (somehow optional on server but should be required)
// imgUrl (optional)
// userId (required, but not submitted by user)

export const RecipeSchema = z.object({
  title: z.string().min(1, {
    message: "Please enter a recipe title"
  }),
  description: z.string().min(1, {
    message: "Please enter a recipe description"
  }),
  instructions: z.string().min(1, {
    message: "Please enter recipe instructions"
  }),
});