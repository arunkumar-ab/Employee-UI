import { useState, useEffect } from "react";
import axios from "axios";
import { Pencil, Trash2 } from "lucide-react"; // Icons for edit & delete

export default function EmployeeSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  // Department ID to Name mapping
  const departmentMapping = {
    1: "Human Resource",
    2: "Engineering",
    3: "Marketing",
    4: "Sales",
    5: "Finance",
  };

  // Fetch employees when the component mounts or searchQuery changes
  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true);
      try {
        const url =
          searchQuery.trim() === ""
            ? "http://localhost:5049/api/employees"
            : `http://localhost:5049/api/search?query=${searchQuery}`;
        const response = await axios.get(url);
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
      setLoading(false);
    };

    const timer = setTimeout(fetchEmployees, 500);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleDelete = async (empId) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete Employee ID: ${empId}?`);
    if (!confirmDelete) return;
  
    try {
      await axios.delete(`http://localhost:5049/api/${empId}`);
      setEmployees(employees.filter(emp => emp.empId !== empId)); // Remove deleted employee from UI
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };
  

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-800 text-white rounded-lg">
      <h2 className="text-xl font-bold mb-4">Search Employees</h2>

      <input
        type="text"
        className="bg-gray-700 text-white border border-gray-600 p-2 rounded w-full mb-4"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {loading && <p>Loading...</p>}

      {employees.length > 0 ? (
        <table className="w-full border border-gray-600">
          <thead>
            <tr className="bg-gray-900">
              <th className="p-2 border border-gray-600">ID</th>
              <th className="p-2 border border-gray-600">Name</th>
              <th className="p-2 border border-gray-600">Email</th>
              <th className="p-2 border border-gray-600">Phone</th>
              <th className="p-2 border border-gray-600">Department</th>
              <th className="p-2 border border-gray-600">Salary</th>
              <th className="p-2 border border-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => {
              const departmentId = Number(emp.departmentId);
              const departmentName = departmentMapping[departmentId] || "N/A";

              return (
                <tr key={emp.empId} className="bg-gray-700">
                  <td className="p-2 border border-gray-600">{emp.empId}</td>
                  <td className="p-2 border border-gray-600">{emp.firstName} {emp.lastName}</td>
                  <td className="p-2 border border-gray-600">{emp.email}</td>
                  <td className="p-2 border border-gray-600">{emp.phone || "N/A"}</td>
                  <td className="p-2 border border-gray-600">{departmentName}</td>
                  <td className="p-2 border border-gray-600">{emp.salary || 0}</td>
                  <td className="p-2 border border-gray-600 flex justify-center gap-3">
                    {/* Edit Button */}
                    <button className="text-blue-400 hover:text-blue-600">
                      <Pencil size={20} />
                    </button>
                    {/* Delete Button */}
                    <button 
                      className="text-red-400 hover:text-red-600" 
                      onClick={() => handleDelete(emp.empId)}
                    >
                      <Trash2 size={20} />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        !loading && <p>No employees found.</p>
      )}
    </div>
  );
}
