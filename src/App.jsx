import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Navbar from "./ui/Navbar";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Course from "./pages/Course";
import Details from "./pages/Course/Details";
import "./App.css";
import { NavbarUser } from "./ui/NavbarUser";
import ClientDashboard from "./pages/Client/ClientDashboard";
import { Flex } from "@mantine/core";
import Profile from "./pages/Client/Profile";

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  const hideNavbar = pathname === "/login" || pathname === "/signup";
  const showUserNavbar = pathname === "/dashboard" || pathname === "/profile";

  return (
    <div>
      {!hideNavbar && !showUserNavbar && <Navbar />}


      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/courses/details/:id" element={<Details />} />
      </Routes>

      {/* Client Routes */}
      {showUserNavbar && (
        <Flex>
          <NavbarUser />
          <Routes>
            <Route path="/dashboard" element={<ClientDashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Flex>
      )}
    </div>
  );
}

export default App;
