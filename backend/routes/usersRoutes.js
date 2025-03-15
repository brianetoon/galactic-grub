import express from "express";
import User from "../models/user.js";
import generateToken from "../utils/generateToken.js";

const router = express.Router();

router.post("/signup", async (req, res, next) => {
  console.log(`🚀 ${req.method} request for signing up a new user`);
  const { username, email, password } = req.body;

  try {
    const user = await User.signup(username, email, password);
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

  } catch (err) {
    next(err);
  }
});

router.post("/login", async (req, res, next) => {
  console.log(`🚀 ${req.method} request for logging in a user`);
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
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

  } catch (err) {
    next(err);
  }
});

export default router;