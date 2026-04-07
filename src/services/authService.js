import axiosClient from "./axiosClient";
import { setToken, setRefreshToken, clearAuthTokens } from "../utils/token";

export const authService = {
  /**
   * Logs in the user and stores the tokens
   * @param {Object} credentials - { email, password }
   * @returns {Object} user data
   */
  async login(credentials) {
    try {
      // Make axios call to backend
      const response = await axiosClient.post("/auth/login", credentials);
      
      if (response.data.accessToken) {
        setToken(response.data.accessToken);
      }
      if (response.data.refreshToken) {
        setRefreshToken(response.data.refreshToken);
      }
      
      return response.data;
    } catch (error) {
      // Graceful fallback for demo purposes if backend isn't running
      if (error.code === 'ERR_NETWORK' || error.message === 'Network Error') {
        console.warn("Backend unreachable. Using Demo Mode.");
        const ADMIN_EMAIL = import.meta.env.VITE_ADMIN_EMAIL || "admin@example.com";
        const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || "password123";

        // To simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        if (credentials.email === ADMIN_EMAIL && credentials.password === ADMIN_PASSWORD) {
          const fakeToken = "demo-access-token";
          setToken(fakeToken);
          setRefreshToken("demo-refresh-token");
          return {
            user: { email: credentials.email, name: "Admin User", id: 1 },
            accessToken: fakeToken,
            refreshToken: "demo-refresh-token"
          };
        }
        throw new Error(`Invalid mock credentials. Try ${ADMIN_EMAIL} / ${ADMIN_PASSWORD}`);
      }
      throw error;
    }
  },

  /**
   * Registers a new user
   * @param {Object} userData 
   * @returns {Object} response data
   */
  async register(userData) {
    const response = await axiosClient.post("/auth/register", userData);
    return response.data;
  },

  /**
   * Fetches the current authenticated user's profile
   * @returns {Object} user data
   */
  async getCurrentUser() {
    try {
      const response = await axiosClient.get("/auth/me");
      return response.data;
    } catch (error) {
       // Graceful fallback for demo purposes if backend isn't running
       if (error.code === 'ERR_NETWORK' || error.message === 'Network Error') {
         if (localStorage.getItem("access_token") === "demo-access-token") {
            return { email: import.meta.env.VITE_ADMIN_EMAIL || "admin@example.com", name: "Admin User", id: 1 };
         }
         throw new Error("Invalid demo session");
       }
       throw error;
    }
  },

  /**
   * Logs out the user and clears local tokens
   */
  async logout() {
    try {
      // Optional: notify backend to invalidate refresh token
      await axiosClient.post("/auth/logout");
    } catch (error) {
      console.error("Logout error", error);
    } finally {
      clearAuthTokens();
    }
  }
};
