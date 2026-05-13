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
      // Backend API Call
      const response = await axiosClient.post("/auth/login", credentials);

      // Save Tokens
      if (response.data.accessToken) {
        setToken(response.data.accessToken);
      }

      if (response.data.refreshToken) {
        setRefreshToken(response.data.refreshToken);
      }

      return response.data;

    } catch (error) {

      // Demo Mode if backend not running
      if (
        error.code === "ERR_NETWORK" ||
        error.message === "Network Error"
      ) {
        console.warn("Backend unreachable. Using Demo Mode.");

        // ENV Credentials
        const ADMIN_EMAIL =
          import.meta.env.VITE_ADMIN_EMAIL || "admin@gmail.com";

        const ADMIN_PASSWORD =
          import.meta.env.VITE_ADMIN_PASSWORD || "123456";

        // Fake network delay
        await new Promise((resolve) => setTimeout(resolve, 800));

        // Admin Login
        if (
          credentials.email === ADMIN_EMAIL &&
          credentials.password === ADMIN_PASSWORD
        ) {
          const fakeToken = "demo-access-token";

          setToken(fakeToken);
          setRefreshToken("demo-refresh-token");

          return {
            user: {
              id: 1,
              name: "Admin User",
              email: credentials.email,
              role: "admin",
            },

            accessToken: fakeToken,
            refreshToken: "demo-refresh-token",
          };
        }

        // Employer Demo Login
        if (
          credentials.email === "employer@gmail.com" &&
          credentials.password === "123456"
        ) {
          const fakeToken = "demo-employer-token";

          setToken(fakeToken);
          setRefreshToken("demo-refresh-token");

          return {
            user: {
              id: 2,
              name: "Employer User",
              email: credentials.email,
              role: "employer",
            },

            accessToken: fakeToken,
            refreshToken: "demo-refresh-token",
          };
        }

        // User/Candidate Demo Login
        if (
          credentials.email === "user@gmail.com" &&
          credentials.password === "123456"
        ) {
          const fakeToken = "demo-user-token";

          setToken(fakeToken);
          setRefreshToken("demo-refresh-token");

          return {
            user: {
              id: 3,
              name: "Candidate User",
              email: credentials.email,
              role: "user",
            },

            accessToken: fakeToken,
            refreshToken: "demo-refresh-token",
          };
        }

        throw new Error(
          "Invalid credentials.\n\nTry:\nadmin@gmail.com / 123456\nemployer@gmail.com / 123456\nuser@gmail.com / 123456"
        );
      }

      throw error;
    }
  },

  /**
   * Get Current User
   */
  async getCurrentUser() {
    try {
      const response = await axiosClient.get("/auth/me");
      return response.data;

    } catch (error) {

      // Demo fallback
      if (
        error.code === "ERR_NETWORK" ||
        error.message === "Network Error"
      ) {

        const token = localStorage.getItem("access_token");

        // Admin
        if (token === "demo-access-token") {
          return {
            id: 1,
            name: "Admin User",
            email: "admin@gmail.com",
            role: "admin",
          };
        }

        // Employer
        if (token === "demo-employer-token") {
          return {
            id: 2,
            name: "Employer User",
            email: "employer@gmail.com",
            role: "employer",
          };
        }

        // User
        if (token === "demo-user-token") {
          return {
            id: 3,
            name: "Candidate User",
            email: "user@gmail.com",
            role: "user",
          };
        }

        throw new Error("Invalid demo session");
      }

      throw error;
    }
  },

  /**
   * Logout
   */
  async logout() {
    try {
      await axiosClient.post("/auth/logout");
    } catch (error) {
      console.error("Logout Error:", error);
    } finally {
      clearAuthTokens();
    }
  },
};