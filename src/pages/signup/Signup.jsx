import { useState } from "react";
import Option from "../login/Option";
import GoogleButton from "../../components/common/GoogleButton";

function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="min-h-screen bg-[#0f1b5b] flex items-center justify-center px-4">
      <div className="bg-gray-100 w-full max-w-md rounded-2xl p-6 shadow-lg">

        {/* Logo */}
        <h1 className="text-black font-bold text-center text-xl mb-4">
          ZECPATH
        </h1>

        {/* Tabs */}
        <Option />

        {/* Heading */}
        <h2 className="text-xl font-bold mb-4 text-center">
          Create an account
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded-lg shadow focus:outline-none"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded-lg shadow focus:outline-none"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full p-3 rounded-lg shadow focus:outline-none"
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            className="w-full p-3 rounded-lg shadow focus:outline-none"
            required
          />

          {/* Terms */}
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

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="text-center my-4 text-gray-500 text-sm">
  Or Continue With
</div>

<GoogleButton />
      </div>
    </div>
  );
}

export default Signup;
