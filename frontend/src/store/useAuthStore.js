import { create } from "zustand";
import { loginUser, registerUser } from "../services/authService";

const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,

  register: async (userData) => {
    try {
      const { user, token } = await registerUser(userData);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      set({ user, token });
    } catch (error) {
      console.error("Signup failed:", error);
    }
  },

  login: async (credentials) => {
    try {
      const { user, token } = await loginUser(credentials);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      set({ user, token });
    } catch (error) {
      console.error("Login failed:", error);
    }
  },

  logout: () => {
    set({ user: null, token: null });
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }
  
}));

export default useAuthStore;