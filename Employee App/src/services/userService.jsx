import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Adjust this based on your backend URL

// Register User (Adds to Employee and Users tables)
const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: "Registration failed" };
  }
};

// Login User (Checks credentials and returns role)
const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, credentials);
    return response.data; // { message: "Login successful", role: "user" }
  } catch (error) {
    throw error.response?.data || { message: "Invalid credentials" };
  }
};

export default { registerUser, loginUser };
