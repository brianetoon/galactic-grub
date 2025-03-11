import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

import recipesRoutes from "./routes/recipesRoutes.js"

const app = express();
const port = process.env.PORT || 8080; 

// API Routes
app.use("/api/recipes", recipesRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log(`Listening for requets on port ${port}`)
  });
});