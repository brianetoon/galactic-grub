import mongoose from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  ingredients: {
    type: [String],
    required: true
  },
  instructions: {
    type: String,
    required: true 
  },
  imgUrl: {
    type: String
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  }

}, {timestamps: true });

// Virutal comments property
recipeSchema.virtual("comments", {
  ref: "Comment",
  localField: "_id", 
  foreignField: "recipeId"
});

// Use case - fetch all recipes by a specific user 
// This is done in getAllRecipes via query param
recipeSchema.index({ userId: 1 });

recipeSchema.set("toObject", { virtuals: true });
recipeSchema.set("toJSON", { virtuals: true });

const Recipe = mongoose.model("Recipe", recipeSchema);
export default Recipe;
