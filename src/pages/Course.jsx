import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Filter,
  BookOpen,
  Star,
  X,
  DollarSign,
  IndianRupee,
} from "lucide-react";
import { Autocomplete, Modal } from "@mantine/core";
import { NavLink } from "react-router-dom";
import axios from "axios";
import api from "../api/api";

const Course = () => {
  // Sample courses data
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Introduction to React",
      instructor: "Sarah Johnson",
      level: "Beginner",
      category: "Web Development",
      rating: 4.8,
      students: 2450,
      price: 49.99,
      image: "/api/placeholder/320/180",
    },
    {
      id: 2,
      title: "Advanced JavaScript Patterns",
      instructor: "Michael Chen",
      level: "Advanced",
      category: "Programming",
      rating: 4.9,
      students: 1876,
      price: 69.99,
      image: "/api/placeholder/320/180",
    },
    {
      id: 3,
      title: "UI/UX Design Fundamentals",
      instructor: "Emily Rogers",
      level: "Intermediate",
      category: "Design",
      rating: 4.7,
      students: 3210,
      price: 59.99,
      image: "/api/placeholder/320/180",
    },
    {
      id: 4,
      title: "Python for Data Science",
      instructor: "David Wilson",
      level: "Intermediate",
      category: "Data Science",
      rating: 4.8,
      students: 4120,
      price: 79.99,
      image: "/api/placeholder/320/180",
    },
    {
      id: 5,
      title: "Mobile App Development with Flutter",
      instructor: "Jessica Lee",
      level: "Beginner",
      category: "Mobile Development",
      rating: 4.6,
      students: 1920,
      price: 54.99,
      image: "/api/placeholder/320/180",
    },
    {
      id: 6,
      title: "Machine Learning Basics",
      instructor: "Robert Zhang",
      level: "Intermediate",
      category: "Data Science",
      rating: 4.9,
      students: 2890,
      price: 89.99,
      image: "/api/placeholder/320/180",
    },
  ]);

  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const [showFilterModal, setShowFilterModal] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [sortBy, setSortBy] = useState("popularity");

  // Ref for search input and suggestions container
  const searchInputRef = useRef(null);
  const suggestionsRef = useRef(null);

  // Available categories and levels

  // Update search suggestions when search term changes
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get(`${api.current}api/courses`);
        console.log("Fetched courses:", res.data.data);

        setCourses(res.data.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };
    fetchCourses();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSearchSuggestions([]);
      return;
    }

    const term = searchTerm.toLowerCase();
    const suggestions = courses
      .filter(
        (course) =>
          course.title.toLowerCase().includes(term) ||
          course.instructor.toLowerCase().includes(term)
      )
      .slice(0, 5) // Limit to 5 suggestions
      .map((course) => ({
        id: course.id,
        title: course.title,
        instructor: course.instructor,
      }));

    setSearchSuggestions(suggestions);
  }, [searchTerm, courses]);

  // Handle click outside search suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target) &&
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filtered courses based on search term, category, level, and price
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesPrice =
      course.price >= priceRange[0] && course.price <= priceRange[1];

    return matchesSearch && matchesPrice;
  });

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.title);
    setShowSuggestions(false);
  };

  const convertDriveLink = (url) => {
    if (!url) return "";

    // Extract file ID from Google Drive share URL
    const match = url.match(/\/file\/d\/([a-zA-Z0-9-_]+)/);
    if (match) {
      return `https://drive.google.com/file/d/${match[1]}/preview`;
    }

    // If it's already a preview link or direct link, return as is
    return url;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-500 p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-4">
            Explore Our Courses
          </h1>
          <p className="text-xl text-white opacity-80">
            Discover the perfect course to enhance your skills
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search bar with suggestions */}
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search courses..."
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
              />

              {/* Search suggestions dropdown */}
              {showSuggestions && searchSuggestions.length > 0 && (
                <div
                  ref={suggestionsRef}
                  className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg max-h-60 overflow-auto"
                >
                  <ul className="py-1">
                    {searchSuggestions.map((suggestion) => (
                      <li
                        key={suggestion.id}
                        className="px-4 py-2 hover:bg-indigo-50 cursor-pointer flex flex-col"
                        onClick={() => handleSuggestionClick(suggestion)}
                      >
                        <span className="font-medium">{suggestion.title}</span>
                        <div className="flex items-center text-xs text-gray-500">
                          <span>{suggestion.instructor}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Filter button */}
            <button
              onClick={() => setShowFilterModal(true)}
              className="w-full md:w-auto px-4 py-2 bg-indigo-600 text-white rounded-md shadow flex items-center justify-center space-x-2 hover:bg-indigo-700 transition-colors"
            >
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <iframe
                src={convertDriveLink(course.thumbnailUrl)}
                frameborder="0"
                className="w-full h-48 object-cover"
              ></iframe>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">by {course.instructor}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">
                    INR {course.price}
                  </span>
                  <div className="flex gap-2">
                    <NavLink
                      to={`/courses/details/${course._id}`}
                      className="px-4 py-2 cursor-pointer bg-sky-600 text-white rounded-md hover:opacity-90 transition-opacity"
                    >
                      Details
                    </NavLink>
                    <button className="px-4 py-2 bg-gradient-to-r cursor-pointer from-indigo-500 to-purple-500 text-white rounded-md hover:opacity-90 transition-opacity">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredCourses.length === 0 && (
          <div className="bg-white rounded-lg shadow-lg p-10 text-center">
            <BookOpen className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No courses found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>

      {/* Filter Modal - Mantine UI inspired */}
      <Modal
        opened={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        title="Advanced Filters"
      >
        <div className="bg-white rounded-lg w-full max-w-lg overflow-hidden">
          {/* Modal body */}
          <div className="px-6 py-4 max-h-96 overflow-y-auto">
            {/* Price Range */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-medium text-gray-700 flex items-center">
                  <IndianRupee className="h-4 w-4 mr-1" />
                  Price Range
                </label>
                <span className="text-sm text-gray-500">
                  INR {priceRange[0]} - INR {priceRange[1]}
                </span>
              </div>
              <div className="relative pt-1">
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], parseInt(e.target.value)])
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          </div>

          {/* Modal footer */}
          <div className="px-6 py-4 bg-gray-50 border-t flex justify-end space-x-3">
            <button
              onClick={() => {
                setPriceRange([0, 100]);
              }}
              className="px-4 py-2 border border-gray-300 rounded-md cursor-pointer text-gray-700 hover:bg-gray-100 transition-colors"
            >
              Reset
            </button>
            <button
              onClick={() => setShowFilterModal(false)}
              className="px-4 py-2 cursor-pointer bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-md hover:opacity-90 transition-opacity"
            >
              Apply Filters
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Course;
