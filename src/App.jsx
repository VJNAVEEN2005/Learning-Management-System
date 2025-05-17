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

function App() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/login" || location.pathname === "/signup";

  return (
    <div>
      {!hideNavbar && <Navbar />}

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/courses/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
