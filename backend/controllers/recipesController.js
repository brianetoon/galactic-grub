import Recipe from "../models/recipe.js";
// import User from "../models/user.js";

export const getAllRecipes = async (req, res, next) => {
  console.log(`🚀 ${req.method} request for all recipes`);

  try {
    const filter = req.query.userId ? { userId: req.query.userId } : {};
    const result = await Recipe.find(filter);

    res.status(200).json({ success: true, data: result });
  } catch(err) {
    // next(err); 
    console.log(err);
  }
}

