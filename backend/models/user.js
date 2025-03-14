import mongoose from "mongoose";
import validator from "validator";

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
  
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("Email already in use");
  }
  if (!validator.isEmail(email)) {
    throw Error("Email is not valid");
  }

  // password hashing
  const salt = await bcrypt.getSalt(10);
  const hash = await bcrypt.hash(password, salt);

  // create new user
  const user = await this.create({ username, email, password: hash});

  return user;
}



const User = mongoose.model("User", userSchema);
export default User;