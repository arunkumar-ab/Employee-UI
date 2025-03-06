import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function TempAddUser() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    hireDate: new Date("2025-02-24").toISOString().split('T')[0],
    jobTitle: "",
    department: 1, // Default department ID
    salary: "",
    password: "",
    role: "user", // Default role
  });

  const navigate = useNavigate();

  const departmentOptions = [
    { id: 1, name: "Human Resources" },
    { id: 2, name: "Finance" },
    { id: 3, name: "Engineering" },
    { id: 4, name: "Marketing" },
  ];

  const roleOptions = ["user", "admin"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "department" ? parseInt(value) : value, // Convert department to number
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Log the form data (for now, no backend request)
    console.log("Form submitted with the following data:", formData);

    try {
      // Send POST request to the backend API
      const response = await axios.post("http://localhost:5049/api/register", formData);

      if (response.status === 200) {
        // If successful, show success alert and navigate
        alert("User added successfully!");
        navigate("/admin-dashboard");
      }
    } catch (error) {
      // Handle error response
      console.error("Error occurred while registering:", error);
      alert("Error occurred while registering the user. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-800 p-6 mt-10 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="bg-gray-700 text-white border border-gray-600 p-2 rounded w-full"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="bg-gray-700 text-white border border-gray-600 p-2 rounded w-full"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="bg-gray-700 text-white border border-gray-600 p-2 rounded w-full"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            className="bg-gray-700 text-white border border-gray-600 p-2 rounded w-full"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="date"
            name="hireDate"
            className="bg-gray-700 text-white border border-gray-600 p-2 rounded w-full"
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            className="bg-gray-700 text-white border border-gray-600 p-2 rounded w-full"
            onChange={handleChange}
            required
          />
        </div>

        {/* Department Dropdown */}
        <div className="mb-4">
          <select
            name="department"
            className="bg-gray-700 text-white border border-gray-600 p-2 rounded w-full"
            onChange={handleChange}
            required
          >
            {departmentOptions.map((dept) => (
              <option key={dept.id} value={dept.id}>
                {dept.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <input
            type="number"
            name="salary"
            placeholder="Salary"
            className="bg-gray-700 text-white border border-gray-600 p-2 rounded w-full"
            onChange={handleChange}
            required
          />
        </div>

        {/* Role Selection */}
        <div className="mb-4">
          <select
            name="role"
            className="bg-gray-700 text-white border border-gray-600 p-2 rounded w-full"
            onChange={handleChange}
            required
          >
            {roleOptions.map((role) => (
              <option key={role} value={role}>
                {role.charAt(0).toUpperCase() + role.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="bg-gray-700 text-white border border-gray-600 p-2 rounded w-full"
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
        >
          Add User
        </button>
      </form>
    </div>
  );
}