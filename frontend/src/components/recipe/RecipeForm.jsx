import RecipeFormCard from "./RecipeFormCard";
import useAuthStore from "@/store/useAuthStore";
import useCreateRecipe from "@/hooks/useCreateRecipe";
import useUploadImage from "@/hooks/useUploadImage";
import { useNavigate } from "react-router-dom";
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
  const { createNewRecipe, loading, error } = useCreateRecipe();
  const { uploadImage } = useUploadImage();
  const { user } = useAuthStore();
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  // Todo: figure out a better way to handle ingredients
  const [ingredients, setIngredients] = useState([]);
  const [ingredientInput, setIngredientInput] = useState("");

  const form = useForm({
    resolver: zodResolver(RecipeSchema),
    defaultValues: {
      title: "",
      description: "",
      instructions: "",
    }
  });

  // Image file
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  // Image upload
  const handleUploadImage = async () => {
    if (!selectedImage) return;
    const imgUrl = await uploadImage(selectedImage);
    setImageUrl(imgUrl);
  }

  // Ingredients
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
  const onSubmit = async (data) => {
    
    // console.log("imageUrl: ", imageUrl);

    const newRecipe = await createNewRecipe({ 
      ...data, 
      userId: user._id,
      imgUrl: imageUrl,
      ingredients 
    });
    // Todo: use the newRecipe._id to navigate to new recipe page

    // navigate("/");
  }

  return (
    <RecipeFormCard>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-6">
            
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
              render={() => (
                <FormItem>
                  <FormLabel>Add Ingredient</FormLabel>
                  <div className="flex space-x-2">
                    <Input
                      onChange={(e) => setIngredientInput(e.target.value)}
                      value={ingredientInput}
                    />
                    <Button variant="secondary" type="button" onClick={addIngredient}>
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

          <FormItem>
            <FormLabel>Upload Image</FormLabel>
            <div className="flex gap-2 mt-2">
              <FormControl>
                <Input type="file" accept="image/*" onChange={handleImageChange} />
              </FormControl>
              <Button
                type="button"
                variant="secondary"
                onClick={handleUploadImage}
                disabled={!selectedImage}
              >
                Upload
              </Button>
            </div>
            {/* {image && <img src={image.url} alt="Recipe" className="mt-2 w-32 h-32 object-cover rounded" />} */}
          </FormItem>

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