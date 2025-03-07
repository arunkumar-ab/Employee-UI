import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AdminDashboard from "./pages/AdminDashboard"; // Admin Dashboard
import UserDashboard from "./pages/UserDashboard"; // User-specific Dashboard
import AddUser from "./pages/tempAddUser";
import EditUser from "./pages/EditUser";
function App() {
  return (
    <Router>
      <Routes>
        {/* Login Page */}
        <Route path="/" element={<Login />} />
        
        {/* Register Page */}
        <Route path="/register" element={<Register />} />
        
        {/* Admin Dashboard */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        
        {/* User Dashboard - Personalized page for user */}
        <Route path="/user-dashboard" element={<UserDashboard />} />

        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
        
      </Routes>
    </Router>
  );
}

export default App;
