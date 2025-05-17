import { useState, useEffect } from "react";
import {
  Search,
  Bell,
  Calendar,
  Book,
  Compass,
  Trophy,
  Settings,
  User,
  LogOut,
  ChevronDown,
  Menu,
  X,
  Home,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { Button } from "@mantine/core";
import { IconLogin, IconLogin2 } from "@tabler/icons-react";

const Navbar = () => {
  const [searchFocused, setSearchFocused] = useState(false);

  const navItems = [
    { id: "", icon: <Home size={18} />, label: "Home" },
    { id: "courses", icon: <Book size={18} />, label: "Courses" },
    { id: "about", icon: <Calendar size={18} />, label: "About" },
    { id: "contact", icon: <Trophy size={18} />, label: "Contact" },
  ];

  return (
    <div>
      <nav className="flex justify-between items-center bg-white p-4 shadow-md">
        <div className="flex items-center">
          <img src="/vite.svg" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text flex items-center">
            LearnHub
          </span>
        </div>
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={`/${item.id}`}
              className={({ isActive }) =>
        `flex items-center justify-center px-3 py-1 rounded-xl transition ${
          isActive
            ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
            : "text-gray-700 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-purple-600 hover:text-white"
        }`
      }
            >
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </NavLink>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <div
            className={`relative transition-all duration-300 ${
              searchFocused ? "w-64" : "w-48"
            }`}
          >
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full bg-gray-100 text-gray-800 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
            <Search
              size={16}
              className="absolute left-3 top-2.5 text-gray-400"
            />
          </div>
          <div>
            <Button
              style={{
                background: "linear-gradient(to right, #4f46e5, #9333ea)",
                borderRadius: "20px",
              }}
              rightSection={<IconLogin2 size={16} />}
            >
              Login
            </Button>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <Menu size={24} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
