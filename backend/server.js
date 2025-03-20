import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import errorHandler from "./middleware/errorHandler.js";
import recipesRoutes from "./routes/recipesRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import upladRoutes from "./routes/uploadRoutes.js";

const app = express();
const port = process.env.PORT || 8080; 

// Check environment variables
if (!process.env.MONGO_URI) {
  console.error("MONGO_URI is not defined in .env");
  process.exit(1);
}

app.use(cors({ origin: "http://localhost:5173" }));

// Parse JSON
app.use(express.json());

// API Routes
app.use("/api/recipes", recipesRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/upload", upladRoutes);

// Catch all 404 handler for undefined routes
app.use("*", (req, res, next) => {
  const err = new Error("Resource not found");
  err.status = 404;
  next(err);
});

// Error Handler
app.use(errorHandler);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("🚀 Connected to MongoDB");
  app.listen(port, () => {
    console.log(`🚀 Listening for requests on port ${port}`)
  });
})
.catch((err) => {
  console.log("Failed to connect to MongoDB:", err);
  process.exit(1);
});

// Graceful Shutdown
process.on("SIGINT", async () => {
  console.log("🛑 Closing server");
  await mongoose.disconnect();
  process.exit();
});