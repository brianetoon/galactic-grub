import User from "../models/user.js";
import generateToken from "../utils/generateToken.js"

export const signupUser = async (req, res, next) => {
  console.log(`🚀 ${req.method} request for signing up a new user`);
  const { username, email, password } = req.body;

  try {
    const user = await User.signup(username, email, password);
    const token = generateToken(user._id);

    res.status(201).json({ 
      success: true,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email
      },
      token 
    });

  } catch (error) {
    next(error);
  }
}

export const loginUser = async (req, res, next) => {
  console.log(`🚀 ${req.method} request for logging in a user`);
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = generateToken(user._id);

    res.status(201).json({ 
      success: true,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email
      },
      token 
    });

  } catch (error) {
    next(error);
  }
}