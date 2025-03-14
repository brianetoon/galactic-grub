import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true
  },
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    trim: true,
  },
  avatarUrl: {
    type: String,
    trim: true,
  }
}, { timestamps: true });

// static signup method
userSchema.statics.signup = async function (username, email, password) {
  
  // validation
  if (!username || !email || !password) {
    throw Error("Please fill in all required fields");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }
  if (!validator.isAlphanumeric(username)) {
    throw Error("Username must contain only letters and numbers");
  }

  const normalizedEmail = email.toLowerCase();
  const exists = await this.findOne({ email: normalizedEmail });

  if (exists) {
    throw Error("Email already in use");
  }

  // password hashing
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  // create new user
  try {
    const user = await this.create({ username, email: normalizedEmail, password: hash });
    return user;
  } catch (err) {
    if (err.code === 11000) {
      throw Error("Username or email already exists"); 
    }
    throw err; 
  }
}

const User = mongoose.model("User", userSchema);
export default User;