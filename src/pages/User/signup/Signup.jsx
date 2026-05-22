import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Option from "../login/Option";
import GoogleButton from "../../../components/common/GoogleButton";

import { validateSignup } from "../../../validations/signupValidation";
import { registerUser } from "../../../services/signupService";

import { useTheme } from "../../../context/ThemeContext";

function Signup() {
  const navigate = useNavigate();

  const { theme } = useTheme();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateSignup(form);

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      registerUser(form);

      alert("Signup Successful!");

      navigate("/login");
    }
  };

  /* ================= INPUT STYLE ================= */

  const inputStyle = `
    w-full
    p-3
    rounded-xl
    outline-none
    transition-all
    duration-200
    border

    bg-white
    dark:bg-zinc-800

    text-black
    dark:text-white

    border-gray-300
    dark:border-zinc-600

    placeholder:text-gray-500
    dark:placeholder:text-gray-400

    hover:border-gray-400
    dark:hover:border-zinc-500

    focus:ring-2
    focus:ring-blue-500
    focus:border-blue-500

    shadow-sm
  `;

  return (
    <div
      className={`
        min-h-screen
        flex
        items-center
        justify-center
        px-4
        py-10
        transition-all
        duration-300
        ${theme.bg}
      `}
    >
      {/* CARD */}
      <div
        className={`
          w-full
          max-w-md
          rounded-3xl
          p-6
          sm:p-8
          border
          transition-all
          duration-300
          ${theme.cardBg}
          ${theme.border}
          ${theme.shadowMd}
        `}
      >
        {/* LOGO */}
        <div className="text-center mb-6">
          
          <h1
            className={`
              text-3xl
              font-extrabold
              tracking-wide
              ${theme.primaryText}
            `}
          >
            ZECPATH
          </h1>

          <p
            className={`
              text-sm
              mt-2
              ${theme.textMuted}
            `}
          >
            AI Powered Hiring Platform
          </p>
        </div>

        {/* OPTION */}
        <Option />

        {/* TITLE */}
        <div className="text-center mb-6">
          
          <h2
            className={`
              text-2xl
              font-bold
              ${theme.textPrimary}
            `}
          >
            Create an Account
          </h2>

          <p
            className={`
              mt-2
              text-sm
              ${theme.textMuted}
            `}
          >
            Join the platform and start your journey
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          {/* NAME */}
          <div>
            <label
              className={`
                block
                mb-2
                text-sm
                font-medium
                ${theme.textSecondary}
              `}
            >
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              className={inputStyle}
            />

            {errors.name && (
              <p className="text-red-500 text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label
              className={`
                block
                mb-2
                text-sm
                font-medium
                ${theme.textSecondary}
              `}
            >
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className={inputStyle}
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
                block
                mb-2
                text-sm
                font-medium
                ${theme.textSecondary}
              `}
            >
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Create password"
              value={form.password}
              onChange={handleChange}
              className={inputStyle}
            />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password}
              </p>
            )}
          </div>

          {/* CONFIRM PASSWORD */}
          <div>
            <label
              className={`
                block
                mb-2
                text-sm
                font-medium
                ${theme.textSecondary}
              `}
            >
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={form.confirmPassword}
              onChange={handleChange}
              className={inputStyle}
            />

            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* CHECKBOX */}
          <div>
            <label
              className={`
                flex
                items-center
                gap-3
                text-sm
                cursor-pointer
                ${theme.textSecondary}
              `}
            >
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                className="
                  h-4
                  w-4
                  accent-blue-600
                  rounded
                "
              />

              I agree to the Terms & Conditions
            </label>

            {errors.agree && (
              <p className="text-red-500 text-sm mt-2">
                {errors.agree}
              </p>
            )}
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="
              w-full
              py-3.5
              rounded-xl
              bg-blue-600
              hover:bg-blue-700
              text-white
              font-semibold
              transition-all
              duration-200
              shadow-md
              hover:shadow-lg
            "
          >
            Sign Up
          </button>
        </form>

        {/* DIVIDER */}
        <div className="relative my-6">
          
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-zinc-700"></div>
          </div>

          <div className="relative flex justify-center text-sm">
            <span
              className={`
                px-4
                ${theme.cardBg}
                ${theme.textMuted}
              `}
            >
              Or Continue With
            </span>
          </div>
        </div>

        {/* GOOGLE BUTTON */}
        <GoogleButton />

        {/* LOGIN */}
        <p
          className={`
            text-center
            text-sm
            mt-6
            ${theme.textSecondary}
          `}
        >
          Already have an account?{" "}

          <span
            onClick={() => navigate("/login")}
            className="
              text-blue-600
              hover:text-blue-700
              font-semibold
              cursor-pointer
            "
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Signup;