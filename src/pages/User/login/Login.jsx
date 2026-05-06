import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleButton from "../../../components/common/GoogleButton";
import Option from "./Option";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

import { validateLogin } from "../../../validations/authValidation";
import { authService } from "../../../services/authService";
import { useAuth } from "../../../context/useAuth";
import { FiEye, FiEyeOff } from "react-icons/fi";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear field-level error on typing
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
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
      login(data.user || data); // Store user context
      toast.success("Successfully logged in!");
      navigate("/dashboard"); // Redirecting to dashboard context
    } catch (err) {
      const errorMsg = err.response?.data?.message || err.message || "Login failed. Please try again.";
      toast.error(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              disabled={isSubmitting}
              className={`w-full mt-1 p-3 rounded-lg shadow outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-400' : 'focus:ring-blue-400'}`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div className="relative">
            <label className="text-sm text-gray-500">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                autoComplete="current-password"
                value={form.password}
                onChange={handleChange}
                disabled={isSubmitting}
                className={`w-full mt-1 p-3 rounded-lg shadow pr-10 outline-none focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-400' : 'focus:ring-blue-400'}`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-4 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 flex justify-center items-center py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors"
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

        <div className="text-center my-4 text-gray-500 text-sm">
          Or Continue With
        </div>

        <GoogleButton />
      </div>
    </div>
  );
}

export default Login;
