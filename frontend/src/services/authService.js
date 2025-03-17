import axios from "axios";
const API_URL = "http://localhost:3000/api/auth";

export const loginUser = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  console.log(response.data);
  return response.data; 
};

export const signupUser = async (userData) => {
  const response = await axios.post(`${API_URL}/signup`, userData);
  return response.data; // Expecting { user, token }
};
