import Recipe from "../models/recipe.js";
import User from "../models/user.js";

export const getAllRecipes = async (req, res, next) => {
  console.log(`🚀 ${req.method} request for all recipes`);

  try {
    const filter = req.query.userId ? { userId: req.query.userId } : {};
    const result = await Recipe.find(filter);

    res.status(200).json({ success: true, data: result });
  } catch(err) {
    next(err); 
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
  } catch(err) {
    next(err); 
  }
}

export const deleteRecipe = async (req, res, next) => {
  console.log(`🚀 ${req.method} request for recipe ID: ${req.params.id}`);

  try {
    const result = await Recipe.findByIdAndDelete(req.params.id);

    if (!result) {
      const error = new Error("Recipe not found");
      error.status = 404;
      return next(error); 
    }

    res.status(200).json({ success: true, data: result });
  } catch(err) {
    next(err); 
  }
}

export const getRecipeById = async (req, res, next) => {
  console.log(`🚀 ${req.method} request for recipe ID: ${req.params.id}`);

  try {
    const result = await Recipe.findById(req.params.id);

    if (!result) {
      const error = new Error("Recipe not found");
      error.status = 404;
      return next(error); 
    }

    res.status(200).json({ success: true, data: result });
  } catch(err) {
    next(err);
  }
}

export const updateRecipe = async (req, res, next) => {
  console.log(`🚀 ${req.method} request for recipe ID: ${req.params.id}`);

  try {
    if (Object.keys(req.body).length === 0) {
      const error = new Error("No update data provided");
      error.status = 400;
      return next(error);
    }
    
    const result = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!result) {
      const error = new Error("Recipe not found");
      error.status = 404;
      return next(error); 
    }

    res.status(200).json({ success: true, data: result });
  } catch(err) {
    next(err)
  }
}
