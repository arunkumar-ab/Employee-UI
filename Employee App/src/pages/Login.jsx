import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";  // You can install axios with `npm install axios`

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");  // To handle any errors
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await axios.post("http://localhost:5049/api/login", {
        email,
        password,
      });

      if (response.data && response.data.role) {
        // Navigate to user or admin dashboard based on the role
        if (response.data.role === "admin") {
          navigate("/admin-dashboard");
        } else if (response.data.role === "user") {
          navigate("/user-dashboard");
        }
      }
    } catch (err) {
      setError("Invalid credentials or an error occurred. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      {/* Login Box */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-96">
        <h2 className="text-white text-2xl font-semibold text-center mb-4">Login</h2>
        
        {/* Error Message */}
        {error && <div className="text-red-500 mb-4">{error}</div>}

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="mb-2">
          <label className="block text-gray-300 mb-1">Password</label>
          <input
            type="password"
            className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Forgot Password */}
        <div className="text-right mb-4">
          <Link to="/forgot-password" className="text-blue-400 hover:underline text-sm">
            Forgot Password?
          </Link>
        </div>

        {/* Login Button */}
        <button
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
          onClick={handleLogin}
        >
          Login
        </button>

        {/* Register Link */}
        <p className="text-center text-gray-400 mt-4 text-sm">
          New user? <Link to="/register" className="text-blue-400 hover:underline">Register here</Link>
        </p>
      </div>
    </div>
  );
}
