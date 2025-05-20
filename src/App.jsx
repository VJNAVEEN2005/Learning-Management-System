import { Routes, Route, useLocation } from "react-router-dom";
import Hero from "./pages/Hero";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Navbar from "./ui/Navbar";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Course from "./pages/Course";
import Details from "./pages/Course/Details";
import { NavbarUser } from "./ui/NavbarUser";
import ClientDashboard from "./pages/Client/ClientDashboard";
import Profile from "./pages/Client/Profile";
import YourCourses from "./pages/Client/YourCourses";
import Settings from "./pages/Client/Settings";
import Analytics from "./pages/Client/Analytics";
import PageNotFound from "./pages/PageNotFound";
import { Flex } from "@mantine/core";
import "./App.css";
import CourseView from "./pages/Client/CourseView";
import AdminAddCourse from "./pages/Admin/AdminAddCourse";
import AdminDashboard from "./pages/Admin/AdminDashboard";

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  const isAuthPage = pathname === "/login" || pathname === "/signup";
  const isUserDashboard =
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/profile") ||
    pathname.startsWith("/yourcourses") ||
    pathname.startsWith("/settings") ||
    pathname.startsWith("/analytics") ||
    pathname.startsWith("/courses/courseView") ||
    pathname.startsWith("/AdminAddCourse");

  return (
    <div>
      {!isAuthPage && !isUserDashboard && <Navbar />}

      <Routes>
        {/* Public Pages */}
        <Route path="/" element={<Hero />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<Course />} />
        <Route path="/courses/details/:id" element={<Details />} />

        {/* Dashboard Pages with User Navbar */}
        <Route
          path="/dashboard"
          element={
            <Flex pos="relative">
              <NavbarUser />
              <ClientDashboard />
            </Flex>
          }
        />
        <Route
          path="/profile"
          element={
            <Flex pos="relative">
              <NavbarUser />
              <Profile />
            </Flex>
          }
        />
        <Route
          path="/yourcourses"
          element={
            <Flex pos="relative">
              <NavbarUser />
              <YourCourses />
            </Flex>
          }
        />
        <Route
          path="/settings"
          element={
            <Flex pos="relative">
              <NavbarUser />
              <Settings />
            </Flex>
          }
        />
        <Route
          path="/analytics"
          element={
            <Flex pos="relative">
              <NavbarUser />
              <Analytics />
            </Flex>
          }
        />
        <Route
          path="/courses/courseView/:id"
          element={
            <Flex pos="relative">
              <NavbarUser />
              <CourseView />
            </Flex>
          }
        />

        {/* Admin */}
        <Route
          path="/AdminAddCourse"
          element={
            <Flex pos="relative">
              <NavbarUser />
              <AdminAddCourse />
            </Flex>
          }
        />

        <Route path="adminDashboard" element={<AdminDashboard />} />
        {/* Catch-All */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
