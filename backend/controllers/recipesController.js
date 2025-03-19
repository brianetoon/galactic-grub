import Recipe from "../models/recipe.js";
import User from "../models/user.js";

export const getAllRecipes = async (req, res, next) => {
  console.log(`🚀 ${req.method} request for all recipes`);

  try {
    const filter = req.query.userId ? { userId: req.query.userId } : {};
    const result = await Recipe.find(filter);

    res.status(200).json({ success: true, data: result });
  } catch(error) {
    next(error); 
  }
}

export const createRecipe = async (req, res, next) => {
  console.log(`🚀 ${req.method} request for a new recipe`);

  try {
    const user = await User.findById(req.body.userId);
    if (!user) {
      const error = new Error("User not found");
      error.statusCode = 404;
      return next(error);
    }

    const result = await Recipe.create(req.body);
    res.status(201).json({ success: true, data: result });
  } catch(error) {
    next(error); 
  }
}

