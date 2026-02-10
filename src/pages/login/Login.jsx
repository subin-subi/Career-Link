import { useState } from "react";
import GoogleButton from "../../components/common/GoogleButton";
import Option from "./Option";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
        <h2 className="text-xl font-bold mb-1">Welcome Back !</h2>

        <p className="text-sm text-gray-600 mb-6">
          Log in to your account to connect with professionals and explore opportunities.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-gray-500">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              className="w-full mt-1 p-3 rounded-lg shadow focus:outline-none"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="********"
              className="w-full mt-1 p-3 rounded-lg shadow focus:outline-none"
              required
            />
          </div>

          <div className="text-right">
            <a href="#" className="text-blue-600 text-sm">
              Forgot Password
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-full font-semibold shadow-md hover:bg-blue-700 transition"
          >
            Login
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

export default Login;
