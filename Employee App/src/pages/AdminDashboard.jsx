// import { useState } from "react";
// import { Menu, Bell, Settings, MoreHorizontal } from "lucide-react";
// import { Link } from "react-router-dom";

// export default function AdminDashboard() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isManageOpen, setIsManageOpen] = useState(false);

//   return (
//     <div className="bg-gray-900 text-white min-h-screen ">
//       {/* Fixed Header */}
//       <header className="bg-gray-800 p-4 flex items-center justify-between fixed top-0 left-0 w-full z-10">
//         {/* Left Side - Menu Button & Title */}
//         <div className="flex items-center">
//           <button className="text-white p-2 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
//             <Menu size={30} />
//           </button>
//           <h1 className="text-2xl ml-4">Employee Manager</h1>
//         </div>

//         {/* Right Side - Icons & Profile */}
//         <div className="flex items-center space-x-4">
//           <button className="p-2 hover:bg-gray-700 rounded-full">
//             <Bell size={24} />
//           </button>
//           <button className="p-2 hover:bg-gray-700 rounded-full">
//             <Settings size={24} />
//           </button>
//           <button className="p-2 hover:bg-gray-700 rounded-full">
//             <MoreHorizontal size={24} />
//           </button>
//           <img
//             src=""
//             alt="Profile"
//             className="w-10 h-10 rounded-full border border-gray-500"
//           />
//         </div>
//       </header>

//       <div className="flex flex-1 pt-16">
//         {/* Sidebar */}
//         <div
//           className={`fixed top-16 left-0 h-full w-64 bg-gray-800 p-4 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}
//         >
//           <ul className="mt-4 space-y-2">
//             <li className="p-2 hover:bg-gray-700 cursor-pointer">
//               <Link to="/admin-dashboard">Home</Link>
//             </li>
//             <li className="p-2 hover:bg-gray-700 cursor-pointer">
//               <Link to="/search">Search</Link>
//             </li>
//             <li
//               className="p-2 hover:bg-gray-700 cursor-pointer"
//               onClick={() => setIsManageOpen(!isManageOpen)}
//             >
//               Manage Users
//             </li>
//             {isManageOpen && (
//               <ul className="ml-4 space-y-1">
//                 <li className="p-2 hover:bg-gray-700 cursor-pointer">
//                   <Link to="/add-user">Add User</Link>
//                 </li>
//                 <li className="p-2 hover:bg-gray-700 cursor-pointer">
//                   <Link to="/edit-user">Edit User</Link>
//                 </li>
//                 <li className="p-2 hover:bg-gray-700 cursor-pointer">
//                   <Link to="/delete-user">Delete User</Link>
//                 </li>
//               </ul>
//             )}
//           </ul>
//         </div>

//         {/* Main Content */}
//         <div className={`flex-1 p-6 transition-all duration-300 ${isOpen ? "ml-64" : "ml-0"}`}>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { Menu, Bell, Settings, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";
import AddUser from "./tempAddUser"; // Import AddUser component

export default function AdminDashboard() {
  const [isOpen, setIsOpen] = useState(false);
  const [isManageOpen, setIsManageOpen] = useState(false);
  const [currentView, setCurrentView] = useState("home"); // Default view is "home"

  // Change the current view when "Add User" is clicked
  const handleAddUserClick = () => {
    setCurrentView("addUser");
  };

  return (
    <div className="min-h-screen bg-gray-800 text-white">
      {/* Fixed Header */}
      <header className="bg-gray-900 p-4 flex items-center justify-between fixed top-0 left-0 w-full z-10">
        {/* Left Side - Menu Button & Title */}
        <div className="flex items-center">
          <button
            className="text-white p-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu size={30} />
          </button>
          <h1 className="text-2xl ml-4">Employee Manager</h1>
        </div>

        {/* Right Side - Icons & Profile */}
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-700 rounded-full">
            <Bell size={24} />
          </button>
          <button className="p-2 hover:bg-gray-700 rounded-full">
            <Settings size={24} />
          </button>
          <button className="p-2 hover:bg-gray-700 rounded-full">
            <MoreHorizontal size={24} />
          </button>
          <img
            src=""
            alt="Profile"
            className="w-10 h-10 rounded-full border border-gray-500"
          />
        </div>
      </header>

      <div className="flex flex-1 pt-16">
        {/* Sidebar */}
        <div
          className={`fixed top-16 left-0 h-full w-64 bg-gray-900 p-4 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}
        >
          <ul className="mt-4 space-y-2">
            <li className="p-2 hover:bg-gray-700 cursor-pointer">
              <Link to="/admin-dashboard" onClick={() => setCurrentView("home")}>
                Home
              </Link>
            </li>
            <li className="p-2 hover:bg-gray-700 cursor-pointer">
              <Link to="/search">Search</Link>
            </li>
            <li
              className="p-2 hover:bg-gray-700 cursor-pointer"
              onClick={() => setIsManageOpen(!isManageOpen)}
            >
              Manage Users
            </li>
            {isManageOpen && (
              <ul className="ml-4 space-y-1">
                <li
                  className="p-2 hover:bg-gray-700 cursor-pointer"
                  onClick={handleAddUserClick}
                >
                  Add User
                </li>
                <li className="p-2 hover:bg-gray-700 cursor-pointer">
                  <Link to="/edit-user">Edit User</Link>
                </li>
                <li className="p-2 hover:bg-gray-700 cursor-pointer">
                  <Link to="/delete-user">Delete User</Link>
                </li>
              </ul>
            )}
          </ul>
        </div>

        {/* Main Content */}
        <div
          className={`flex-1 p-6 transition-all duration-300 ${isOpen ? "ml-64" : "ml-0"}`}
        >
          {/* Show Home or Add User based on the current view */}
          {currentView === "home" && (
            <div>
              <h2 className="text-2xl font-bold mb-4">Home</h2>
              {/* Content for the Home page */}
            </div>
          )}

          {currentView === "addUser" && <AddUser />}
        </div>
      </div>
    </div>
  );
}
