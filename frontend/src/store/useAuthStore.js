import { create } from "zustand";
import { loginUser, signupUser } from "../services/authService";

const useAuthStore = create((set) => ({
  user: null, 
  token: null, 

  login: async (credentials) => {
    // console.log("useAuthStore login method ran", credentials);
    try {
      const { user, token } = await loginUser(credentials);
      console.log(user, token);
      set({ user, token });
    } catch (error) {
      console.error("Login failed:", error);
    }
  },

  logout: () => set({ user: null, token: null }),
}));

export default useAuthStore;