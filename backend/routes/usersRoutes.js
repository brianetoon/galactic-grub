import express from "express";
import User from "../models/user.js";
import generateToken from "../utils/generateToken.js";

const router = express.Router();

router.post("/signup", async (req, res, next) => {
  console.log(`🚀 ${req.method} request for signing up a new user`);
  const { username, email, password } = req.body;

  try {
    const user = await User.signup(username, email, password);
    // create a json web token
    const token = generateToken(user._id);

    res.status(201).json({ 
      success: true,
      data: {
        _id: user._id,
        username: user.username,
        email: user.email
      },
      token 
    });
  } catch(err) {
    console.log(err);
    res.status(400).json({ success: false, error: err.message });
  }
});

export default router;