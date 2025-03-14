import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

import recipesRoutes from "./routes/recipesRoutes.js";
import usersRoutes from "./routes/usersRoutes.js";

const app = express();
const port = process.env.PORT || 8080; 

// Middleware
app.use(express.json());

// API Routes
app.use("/api/recipes", recipesRoutes);
app.use("/api/users", usersRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log(`Listening for requets on port ${port}`)
  });
});