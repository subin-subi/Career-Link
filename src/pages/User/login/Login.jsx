import { useState } from "react";
import { useNavigate } from "react-router-dom";

import GoogleButton from "../../../components/common/GoogleButton";
import Option from "./Option";

import toast from "react-hot-toast";

import { Loader2 } from "lucide-react";
import { FiEye, FiEyeOff } from "react-icons/fi";

import { validateLogin } from "../../../validations/authValidation";
import { authService } from "../../../services/authService";

import { useAuth } from "../../../context/useAuth";
import { useTheme } from "../../../context/ThemeContext";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [showPassword, setShowPassword] =
    useState(false);

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

    const validationErrors =
      validateLogin(form);

    if (
      Object.keys(validationErrors).length > 0
    ) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const data = await authService.login(
        form
      );

      const userData = data.user;

      login(userData);

      toast.success("Successfully logged in!");

      // Role Based Navigation
      if (userData.role === "admin") {
        navigate("/admin/dashboard");
      } else if (
        userData.role === "employer"
      ) {
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
    w-full mt-1 p-3 rounded-xl outline-none transition border

    ${theme.cardBg}
    ${theme.textPrimary}
    ${theme.border}

    placeholder:text-gray-500

    focus:ring-2 focus:ring-[#4A90E2]
    focus:border-[#4A90E2]

    shadow-sm
  `;

  return (
    <div
      className={`
        min-h-screen
        flex items-center justify-center
        px-4 py-10
        ${theme.bg}
      `}
    >
      <div
        className="
          w-full max-w-6xl
          flex items-center justify-between
          gap-10
        "
      >
        {/* LEFT IMAGE SECTION */}
        <div
  className="
    hidden md:flex
    md:w-[450px]
    items-center
    justify-center
  "
>
         <div
  className={`
    ${theme.primary}
    w-full
    h-[500px]
    rounded-3xl
    overflow-hidden
    ${theme.shadowMd}
  `}
>
  <video
    autoPlay
    loop
    muted
    playsInline
    className="
      w-full
      h-full
      object-cover
      rounded-3xl
    "
  >
    <source
      src="/video/log.mp4"
      type="video/mp4"
    />
  </video>
</div>
        </div>

        {/* RIGHT LOGIN CARD */}
        <div
          className={`
            w-full md:w-[450px]
            rounded-3xl
            p-8
            border

            ${theme.cardBg}
            ${theme.border}
            ${theme.shadowMd}
          `}
        >
          {/* LOGO */}
          <h1
            className={`
              font-bold text-center text-4xl mb-6
              ${theme.textPrimary}
            `}
          >
            ZECPATH
          </h1>

          {/* LOGIN / SIGNUP OPTION */}
          <Option />

          {/* TITLE */}
          <h2
            className={`
              text-3xl font-bold mb-2
              ${theme.textPrimary}
            `}
          >
            Welcome Back !
          </h2>

          {/* DESCRIPTION */}
          <p
            className={`
              text-sm mb-6
              ${theme.textMuted}
            `}
          >
            Log in to your account to connect
            with professionals and explore
            opportunities.
          </p>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* EMAIL */}
            <div>
              <label
                className={`
                  text-sm
                  ${theme.textMuted}
                `}
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

            {/* PASSWORD */}
            <div>
              <label
                className={`
                  text-sm
                  ${theme.textMuted}
                `}
              >
                Password
              </label>

              <div className="relative">
                <input
                  type={
                    showPassword
                      ? "text"
                      : "password"
                  }
                  name="password"
                  autoComplete="current-password"
                  value={form.password}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`${inputStyle} pr-12 ${
                    errors.password
                      ? "border-red-500 focus:ring-red-400"
                      : ""
                  }`}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(
                      !showPassword
                    )
                  }
                  className={`
                    absolute right-4 top-1/2
                    -translate-y-1/2
                    ${theme.textMuted}
                  `}
                >
                  {showPassword ? (
                    <FiEyeOff size={20} />
                  ) : (
                    <FiEye size={20} />
                  )}
                </button>
              </div>

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                w-full mt-4 flex justify-center items-center
                py-3 rounded-xl text-white
                font-semibold
                transition-all

                ${theme.primary}
                ${theme.primaryHover}

                disabled:bg-blue-400
                disabled:cursor-not-allowed
              `}
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

          {/* CONTINUE WITH */}
          <div
            className={`
              text-center my-5 text-sm
              ${theme.textMuted}
            `}
          >
            Or Continue With
          </div>

          {/* GOOGLE BUTTON */}
          <GoogleButton />
        </div>
      </div>
    </div>
  );
}

export default Login;