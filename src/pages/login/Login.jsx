import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleButton from "../../components/common/GoogleButton";
import Option from "./Option";

import { validateLogin } from "../../validations/authValidation";
import { loginUser } from "../../services/authService";
import {useAuth} from "../../context/useAuth";
import { FiEye, FiEyeOff } from "react-icons/fi";


function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();


  const validationErrors = validateLogin(form);
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  try {
    const data = await loginUser(form);
  
    login(data);
    navigate("/home");
  } catch (err) {
    alert(err.message);
  }
};

const [showPassword, setShowPassword] = useState(false);


  return (
    <div className="min-h-screen bg-[#0f1b5b] flex items-center justify-center px-4">
      <div className="bg-gray-100 w-full max-w-md rounded-2xl p-6 shadow-lg">

        <h1 className="text-black font-bold text-center text-xl mb-4">
          ZECPATH
        </h1>

        <Option />

        <h2 className="text-xl font-bold mb-1">Welcome Back !</h2>

        <p className="text-sm text-gray-600 mb-6">
          Log in to your account to connect with professionals and explore opportunities.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

   <div>
  <label className="text-sm text-gray-500">Email</label>
  <input
    type="email"
    name="email"
    autoComplete="email"
    value={form.email}
    onChange={handleChange}
    className="w-full mt-1 p-3 rounded-lg shadow"
  />

  {errors.email && (
    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
  )}
</div>


<div className="relative">
  <label className="text-sm text-gray-500">Password</label>

  <input
    type={showPassword ? "text" : "password"}
    name="password"
    autoComplete="current-password"
    value={form.password}
    onChange={handleChange}
    className="w-full mt-1 p-3 rounded-lg shadow pr-10"
  />

  {errors.password && (
    <p className="text-red-500 text-sm mt-1">{errors.password}</p>
  )}



  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-3 top-9 text-gray-500"
  >
    {showPassword ? <FiEyeOff /> : <FiEye />}
  </button>
</div>


          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700"
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
