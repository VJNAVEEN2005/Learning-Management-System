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
  Phone,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { logo } from "../assets/data";
import { Popover } from "@mantine/core";
import { IconDashboard } from "@tabler/icons-react";

const Navbar = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "", icon: <Home size={18} />, label: "Home" },
    //{ id: "courses", icon: <Book size={18} />, label: "Courses" },
    { id: "about", icon: <Calendar size={18} />, label: "About" },
    { id: "contact", icon: <Phone size={18} />, label: "Contact" },
  ];

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setIsLoggedIn(true);
    }
  }, []);

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setUserMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserMenuOpen(false);
  };

  // Toggle login status (demo only)
  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div className={`sticky top-0 z-50 w-full ${scrolled ? "shadow-md" : ""}`}>
      <nav
        className={`flex justify-between items-center bg-white p-4 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center z-20">
          <img src={logo} alt="Logo" className="h-8 mr-2" />
          <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text flex items-center">
            GraceGlow
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={`/${item.id}`}
              className={({ isActive }) =>
                `flex items-center justify-center px-3 py-1 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium"
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
            >
              {item.icon}
              <span className="ml-2">{item.label}</span>
            </NavLink>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Search Bar */}
          {/* <div
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
          </div> */}

          {/* Notifications */}
          {/* <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
            <Bell size={20} />
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
              3
            </span>
          </button> */}

          {/* Login/User Menu */}
          {/* {isLoggedIn ? (
            <div className="relative">
              <Popover position="bottom" withArrow shadow="md">
                <Popover.Target>
                  <button className="flex items-center cursor-pointer space-x-2 bg-gray-100 hover:bg-gray-200 rounded-full py-1 pl-1 pr-3 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white font-semibold">
                      U
                    </div>
                    <span className="text-sm font-medium">User</span>
                    <ChevronDown size={16} />
                  </button>
                </Popover.Target>
                <Popover.Dropdown
                  style={{
                    padding: 0,
                  }}
                >
                  <div className="m-0 w-48 bg-white rounded-lg shadow-lg z-10 border border-gray-200">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className="text-sm font-medium">User Account</p>
                      <p className="text-xs text-gray-500">user@example.com</p>
                    </div>
                    <a
                      href="#"
                      className="flex items-center cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <User size={16} className="mr-2" />
                      Profile
                    </a>
                    <NavLink
                      to={"/dashboard"}
                      className="flex items-center cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <IconDashboard size={16} className="mr-2" />
                      Dashboard
                    </NavLink>
                    <a
                      href="#"
                      className="flex cursor-pointer items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      <Settings size={16} className="mr-2" />
                      Settings
                    </a>
                    <div className="border-t border-gray-200 mt-1"></div>
                    <button
                      onClick={handleLogout}
                      className="flex cursor-pointer items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                    >
                      <LogOut size={16} className="mr-2" />
                      Sign Out
                    </button>
                  </div>
                </Popover.Dropdown>
              </Popover>
            </div>
          ) : (
            <NavLink
              to={"/login"}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all flex items-center space-x-1"
            >
              <span>Login</span>
              <User size={16} />
            </NavLink>
          )} */}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-gray-700 focus:outline-none z-20"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-10 flex flex-col transition-transform duration-300 ease-in-out ${
          mobileMenuOpen
            ? "transform translate-x-0"
            : "transform translate-x-full"
        } md:hidden`}
      >
        <div className="p-4 pt-20">
          <div className="mb-6">
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full bg-gray-100 text-gray-800 rounded-full pl-10 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
              />
              <Search
                size={18}
                className="absolute left-3 top-3.5 text-gray-400"
              />
            </div>

            {navItems.map((item) => (
              <NavLink
                key={item.id}
                to={`/${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 mb-2 rounded-xl transition ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                {item.icon}
                <span className="ml-3 font-medium">{item.label}</span>
              </NavLink>
            ))}
          </div>

          <div className="border-t border-gray-200 pt-4">
            {isLoggedIn ? (
              <>
                <div className="flex items-center px-4 py-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 flex items-center justify-center text-white font-semibold text-lg">
                    U
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">User Account</p>
                    <p className="text-sm text-gray-500">user@example.com</p>
                  </div>
                </div>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  <User size={20} className="mr-3" />
                  Profile
                </a>
                <a
                  href="#"
                  className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  <Settings size={20} className="mr-3" />
                  Settings
                </a>
                <button
                  onClick={handleLogout}
                  className="flex items-center w-full px-4 py-3 mt-2 text-red-600 hover:bg-gray-100 rounded-lg"
                >
                  <LogOut size={20} className="mr-3" />
                  Sign Out
                </button>
              </>
            ) : (
              <button
                onClick={toggleLogin}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl text-center font-medium"
              >
                Login to your account
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
