import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Option from "../login/Option";
import GoogleButton from "../../../components/common/GoogleButton";
import { validateSignup } from "../../../validations/signupValidation";
import { registerUser } from "../../../services/signupService";

function Signup() {
  const navigate = useNavigate();

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

  return (
    <div className="min-h-screen bg-[#0f1b5b] flex items-center justify-center px-4">
      <div className="bg-gray-100 w-full max-w-md rounded-2xl p-6 shadow-lg">

        <h1 className="text-black font-bold text-center text-xl mb-4">
          ZECPATH
        </h1>

        <Option />

        <h2 className="text-xl font-bold mb-4 text-center">
          Create an account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg shadow"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg shadow"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 rounded-lg shadow"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 rounded-lg shadow"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
          )}

          <div className="flex items-center text-sm">
            <input
              type="checkbox"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              className="mr-2"
            />
            I agree to the Terms & Conditions
          </div>
          {errors.agree && <p className="text-red-500 text-sm">{errors.agree}</p>}

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-full font-semibold"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center my-4 text-gray-500 text-sm">
          Or Continue With
        </div>

        <GoogleButton />
      </div>
    </div>
  );
}

export default Signup;