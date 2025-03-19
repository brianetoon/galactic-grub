import RecipeFormCard from "./RecipeFormCard";
import useAuthStore from "@/store/useAuthStore";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RecipeSchema } from "@/schemas/recipeSchema";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
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

  const form = useForm({
    resolver: zodResolver(RecipeSchema),
    defaultValues: {
      title: "",
      description: "",
      instructions: ""
    }
  });

  const onSubmit = (data) => {
    console.log({ ...data, userId: user._id });
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