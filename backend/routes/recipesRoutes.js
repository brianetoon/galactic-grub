import express from "express";
import { 
  createRecipe,
  getAllRecipes
 } from "../controllers/recipesController.js";

const router = express.Router()

router.get("/", getAllRecipes);
router.post("/", createRecipe);
// router.get("/:id", getRecipeById);
// router.patch("/:id", updateRecipe);
// router.delete("/:id", deleteRecipe);

export default router;