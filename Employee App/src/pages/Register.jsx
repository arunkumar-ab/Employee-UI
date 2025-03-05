import { useState } from "react";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      {/* Register Box */}
      <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-96">
        <h2 className="text-white text-2xl font-semibold text-center mb-4">Register</h2>
        
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
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Password</label>
          <input
            type="password"
            className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Confirm Password Input */}
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Confirm Password</label>
          <input
            type="password"
            className="w-full p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        {/* Register Button */}
        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg transition">
          Register
        </button>

        {/* Login Link */}
        <p className="text-center text-gray-400 mt-4 text-sm">
          Already have an account? <Link to="/" className="text-blue-400 hover:underline">Login here</Link>
        </p>
      </div>
    </div>
  );
}
