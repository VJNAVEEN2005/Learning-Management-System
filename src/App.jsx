import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Hero from "./pages/Hero";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Navbar from "./ui/Navbar";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Course from "./pages/Course";
import Details from "./pages/Course/Details";

function App() {
  return (
    <div>
      <Navbar/>
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
