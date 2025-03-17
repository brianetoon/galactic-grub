import { create } from "zustand";
import { loginUser, signupUser } from "../services/authService";

const useAuthStore = create((set) => ({
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,

  login: async (credentials) => {
    // console.log("useAuthStore login method ran", credentials);
    try {
      const { user, token } = await loginUser(credentials);
      console.log(user, token);

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      set({ user, token });
    } catch (error) {
      console.error("Login failed:", error);
    }
  },

  logout: () => set({ user: null, token: null }),
}));

export default useAuthStore;