import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();
const port = 8080;

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log(`Listening for requets on port ${port}`)
  });
});