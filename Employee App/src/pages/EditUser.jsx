import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function EditUser({ employee }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    hireDate: "",
    jobTitle: "",
    departmentId: 1,
    salary: 0,
    role: "user",
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (employee) {
      // Format the hireDate to YYYY-MM-DD for the input field
      const formattedHireDate = employee.hireDate
        ? new Date(employee.hireDate).toISOString().split("T")[0]
        : "";

      setFormData({
        firstName: employee.firstName || "",
        lastName: employee.lastName || "",
        email: employee.email || "",
        phone: employee.phone || "",
        hireDate: formattedHireDate,
        jobTitle: employee.jobTitle || "",
        departmentId: employee.departmentId || 1,
        salary: employee.salary || 0,
        role: employee.role || "user",
      });
    }
  }, [employee]);

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
      [name]: name === "departmentId" ? parseInt(value) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(
        `http://localhost:5049/api/${employee.empId}`,
        formData
      );

      if (response.status === 200) {
        alert("User updated successfully!");
        navigate("/admin-dashboard");
      }
    } catch (error) {
      console.error("Error updating employee:", error);
      alert("Error occurred while updating the user. Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto bg-gray-800 p-6 mt-10 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="bg-gray-700 text-white border border-gray-600 p-2 rounded w-full"
            value={formData.firstName}
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
            value={formData.lastName}
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
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="bg-gray-700 text-white border border-gray-600 p-2 rounded w-full"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="date"
            name="hireDate"
            className="bg-gray-700 text-white border border-gray-600 p-2 rounded w-full"
            value={formData.hireDate}
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
            value={formData.jobTitle}
            onChange={handleChange}
            required
          />
        </div>

        {/* Department Dropdown */}
        <div className="mb-4">
          <select
            name="departmentId"
            className="bg-gray-700 text-white border border-gray-600 p-2 rounded w-full"
            value={formData.departmentId}
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
            value={formData.salary}
            onChange={handleChange}
            required
          />
        </div>

        {/* Role Selection */}
        <div className="mb-4">
          <select
            name="role"
            className="bg-gray-700 text-white border border-gray-600 p-2 rounded w-full"
            value={formData.role}
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

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
        >
          Update User
        </button>
      </form>
    </div>
  );
}