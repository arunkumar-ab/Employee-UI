import { useState } from "react";
import { Menu, Bell, Settings, MoreHorizontal } from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminDashboard() {
  const [isOpen, setIsOpen] = useState(false);
const username = "Arun";
  return (
    <div className="bg-gray-900 text-white min-h-screen ">
      {/* Fixed Header */}
      <header className="bg-gray-800 p-4 flex items-center justify-between fixed top-0 left-0 w-full z-10">
        {/* Left Side - Menu Button & Title */}
        <div className="flex items-center">
          <button className="text-white p-2 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            <Menu size={30} />
          </button>
          <h1 className="text-2xl ml-4">{username}</h1>
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
          className={`fixed top-16 left-0 h-full w-64 bg-gray-800 p-4 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300`}
        >
          <ul className="mt-4 space-y-2">
            <li className="p-2 hover:bg-gray-700 cursor-pointer">
              <Link to="/dashboard">Home</Link>
            </li>
            <li className="p-2 hover:bg-gray-700 cursor-pointer">
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className={`flex-1 p-6 transition-all duration-300 ${isOpen ? "ml-64" : "ml-0"}`}>
          <h2 className="text-3xl font-semibold">Welcome to Your Dashboard</h2>
        </div>
      </div>
    </div>
  );
}
