import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleButton from "../../../components/common/GoogleButton";
import Option from "./Option";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

import { validateLogin } from "../../../validations/authValidation";
import { authService } from "../../../services/authService";
import { useAuth } from "../../../context/useAuth";
import { useTheme } from "../../../context/ThemeContext";

import { FiEye, FiEyeOff } from "react-icons/fi";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();

  const { theme } = useTheme();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: null,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateLogin(form);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const data = await authService.login(form);

      const userData = data.user;

      login(userData);

      toast.success("Successfully logged in!");

      // Role Based Navigation
      if (userData.role === "admin") {
        navigate("/admin/dashboard");
      } else if (userData.role === "employer") {
        navigate("/employer/dashboard");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      const errorMsg =
        err.response?.data?.message ||
        err.message ||
        "Login failed. Please try again.";

      toast.error(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

const inputStyle = `
  w-full mt-1 p-3 rounded-lg outline-none transition border
  bg-white dark:bg-zinc-800
  text-black dark:text-white
  border-gray-300 dark:border-zinc-600
  placeholder-gray-400 dark:placeholder-gray-500
  focus:ring-2 focus:ring-blue-500
  focus:border-blue-500
`;

  return (
    <div
      className={`
        min-h-screen
        flex items-center justify-center
        px-4
        ${theme.bg}
      `}
    >
      <div
        className={`
          w-full max-w-md rounded-2xl p-6
          ${theme.cardBg}
          ${theme.border}
          ${theme.shadowLg}
        `}
      >
        <h1
          className={`
            font-bold text-center text-xl mb-4
            ${theme.textPrimary}
          `}
        >
          ZECPATH
        </h1>

        <Option />

        <h2
          className={`
            text-xl font-bold mb-1
            ${theme.textPrimary}
          `}
        >
          Welcome Back !
        </h2>

        <p
          className={`
            text-sm mb-6
            ${theme.textMuted}
          `}
        >
          Log in to your account to connect with professionals
          and explore opportunities.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Email */}
          <div>
            <label
              className={`text-sm ${theme.textMuted}`}
            >
              Email
            </label>

            <input
              type="email"
              name="email"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              disabled={isSubmitting}
              className={`${inputStyle} ${
                errors.email
                  ? "border-red-500 focus:ring-red-400"
                  : ""
              }`}
            />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="relative">
            <label
              className={`text-sm ${theme.textMuted}`}
            >
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                autoComplete="current-password"
                value={form.password}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`${inputStyle} pr-10 ${
                  errors.password
                    ? "border-red-500 focus:ring-red-400"
                    : ""
                }`}
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                className={`
                  absolute right-3 top-4
                  ${theme.textMuted}
                `}
              >
                {showPassword ? (
                  <FiEyeOff />
                ) : (
                  <FiEye />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password}
              </p>
            )}
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="
              w-full mt-4 flex justify-center items-center
              py-3 bg-blue-600 text-white rounded-full
              font-semibold hover:bg-blue-700
              disabled:bg-blue-400
              disabled:cursor-not-allowed
              transition-colors
            "
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <div
          className={`
            text-center my-4 text-sm
            ${theme.textMuted}
          `}
        >
          Or Continue With
        </div>

        <GoogleButton />
      </div>
    </div>
  );
}

export default Login;