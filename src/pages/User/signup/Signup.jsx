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

const inputStyle = `
  w-full p-3 rounded-lg outline-none transition border

  bg-gray-50 dark:bg-zinc-800
  text-gray-900 dark:text-white

  border-gray-300 dark:border-zinc-600
  placeholder-gray-400 dark:placeholder-gray-500

  hover:border-gray-400 dark:hover:border-zinc-500

  focus:ring-2 focus:ring-blue-500
  focus:border-blue-500

  shadow-sm
`;

  return (
    <div
      className={`
        min-h-screen flex items-center justify-center px-4
        bg-gray-100 dark:bg-zinc-950
      `}
    >
     <div
  className="
    w-full max-w-md rounded-2xl p-6
    bg-white dark:bg-zinc-900
    border border-gray-200 dark:border-zinc-700
    shadow-xl
  "
>
        {/* Logo */}
        <h1
          className={`
            font-bold text-center text-xl mb-4
            ${theme.textPrimary}
          `}
        >
          ZECPATH
        </h1>

        <Option />

        {/* Title */}
        <h2
          className={`
            text-xl font-bold mb-4 text-center
            ${theme.textPrimary}
          `}
        >
          Create an account
        </h2>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          {/* Name */}
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
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

          {/* Email */}
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
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

          {/* Password */}
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
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

          {/* Confirm Password */}
          <div>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
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

          {/* Checkbox */}
          <div
            className={`
              flex items-center text-sm
              ${theme.textSecondary}
            `}
          >
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="
                         mr-2 h-4 w-4
                         accent-blue-600
                         border-gray-300
                        "
            />

            I agree to the Terms & Conditions
          </div>

          {errors.agree && (
            <p className="text-red-500 text-sm">
              {errors.agree}
            </p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="
              w-full py-3 bg-blue-600 text-white
              rounded-full font-semibold
              hover:bg-blue-700 transition
            "
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
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

export default Signup;