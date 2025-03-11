import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  bio: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/s,
  },
  avatarUrl: {
    type: String,
    trim: true,
  }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;