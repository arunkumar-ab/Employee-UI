import axios from "axios";

const API_URL = "http://localhost:5049/api/employees"

export const getEmployees = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching employees:", error.response?.data || error.message);
    throw error; // Re-throw to handle it in the component if needed
  }
};

export const createEmployee = async (employeeData) => {
  try {
    const response = await axios.post(API_URL, employeeData);
    return response.data;
  } catch (error) {
    console.error("Error creating employee:", error.response?.data || error.message);
    throw error;
  }
};

export const updateEmployee = async (id, employeeData) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, employeeData);
    return response.data;
  } catch (error) {
    console.error("Error updating employee:", error.response?.data || error.message);
    throw error;
  }
};

export const deleteEmployee = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting employee:", error.response?.data || error.message);
    throw error;
  }
};
export default employeeService;