import RecipeFormCard from "./RecipeFormCard";
import useAuthStore from "@/store/useAuthStore";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RecipeSchema } from "@/schemas/recipeSchema";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";

const RecipeForm = () => {
  const { user } = useAuthStore();
  // Todo: figure out a better way to handle ingredients
  const [ingredients, setIngredients] = useState([]);
  const [ingredientInput, setIngredientInput] = useState("");

  const form = useForm({
    resolver: zodResolver(RecipeSchema),
    defaultValues: {
      title: "",
      description: "",
      instructions: "",
      // ingredients: [],
    }
  });

  const addIngredient = () => {
    if (ingredientInput.trim() && !ingredients.includes(ingredientInput.trim())) {
      setIngredients([...ingredients, ingredientInput.trim()]);
      setIngredientInput("");
    }
  };

  const removeIngredient = (ingredient) => {
    setIngredients(ingredients.filter((ing) => ing !== ingredient));
  };

  // Form submit
  const onSubmit = (data) => {
    console.log({ ...data, userId: user._id, ingredients });
  }

  return (
    <RecipeFormCard>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            
            <FormField 
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} type="text" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField 
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField 
              control={form.control}
              name="instructions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Instructions</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="ingredients"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Add Ingredient</FormLabel>
                  <div className="flex space-x-2">
                    <Input
                      // {...field}
                      value={ingredientInput}
                      onChange={(e) => setIngredientInput(e.target.value)}
                      placeholder="Enter an ingredient"
                    />
                    <Button type="button" onClick={addIngredient}>
                      Add
                    </Button>
                  </div>
                  {/* Display Added Ingredients as Badges */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {ingredients.map((ingredient, index) => (
                      <Badge key={index} className="flex items-center gap-1">
                        {ingredient}
                        <X
                          className="w-4 h-4 cursor-pointer"
                          onClick={() => removeIngredient(ingredient)}
                        />
                      </Badge>
                    ))}
                  </div>
                </FormItem>
              )}
            />

          <Button type="submit" className="w-full">
            Submit Recipe
          </Button>

          </div>
        </form>
      </Form>

    </RecipeFormCard>
  )
}

export default RecipeForm