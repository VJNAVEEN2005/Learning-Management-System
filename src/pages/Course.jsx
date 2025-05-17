import React, { useState, useEffect, useRef } from "react";
import {
  Search,
  Filter,
  BookOpen,
  ChevronDown,
  Star,
  X,
  Sliders,
  Clock,
  DollarSign,
} from "lucide-react";
import { Autocomplete, Modal } from "@mantine/core";
import { NavLink } from "react-router-dom";

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
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [duration, setDuration] = useState("Any");
  const [sortBy, setSortBy] = useState("popularity");

  // Ref for search input and suggestions container
  const searchInputRef = useRef(null);
  const suggestionsRef = useRef(null);

  // Available categories and levels
  const categories = [
    "All",
    "Web Development",
    "Programming",
    "Design",
    "Data Science",
    "Mobile Development",
  ];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];
  const durations = [
    "Any",
    "0-1 hour",
    "1-3 hours",
    "3-6 hours",
    "6-10 hours",
    "10+ hours",
  ];
  const sortOptions = [
    { value: "popularity", label: "Most Popular" },
    { value: "newest", label: "Newest" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "rating", label: "Highest Rated" },
  ];

  // Update search suggestions when search term changes
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
          course.instructor.toLowerCase().includes(term) ||
          course.category.toLowerCase().includes(term)
      )
      .slice(0, 5) // Limit to 5 suggestions
      .map((course) => ({
        id: course.id,
        title: course.title,
        category: course.category,
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

  // Filtered courses based on search term, category, level, and advanced filters
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "All" || course.level === selectedLevel;
    const matchesPrice =
      course.price >= priceRange[0] && course.price <= priceRange[1];

    return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
  });

  // Sort courses based on selected sort option
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        // Assuming higher ID means newer course in this example
        return b.id - a.id;
      case "popularity":
      default:
        return b.students - a.students;
    }
  });

  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.title);
    setShowSuggestions(false);
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
              {/* <Autocomplete
                leftSection={<Search className="h-5 w-5 text-gray-400" />}
                placeholder="Search courses..."
                data={courses.map((course) => course.title)}
                onChange={(e) => setSearchTerm(e.target.value)}
        
              /> */}

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
                          <span>{suggestion.category}</span>
                          <span className="mx-1">•</span>
                          <span>{suggestion.instructor}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Category filter */}
            <div className="w-full md:w-48">
              <div className="relative">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
            </div>

            {/* Level filter */}
            <div className="w-full md:w-48">
              <div className="relative">
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none"
                >
                  {levels.map((level) => (
                    <option key={level} value={level}>
                      {level}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </div>
              </div>
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
          {sortedCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs font-semibold rounded">
                    {course.category}
                  </span>
                  <span className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded">
                    {course.level}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-4">by {course.instructor}</p>
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1 text-gray-700">{course.rating}</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-600">
                    {course.students.toLocaleString()} students
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">
                    ${course.price}
                  </span>
                  <div className="flex gap-2">
                    <NavLink to={`/courses/details/${course.id}`} className="px-4 py-2 cursor-pointer bg-sky-600 text-white rounded-md hover:opacity-90 transition-opacity">
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
        {sortedCourses.length === 0 && (
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
                  <DollarSign className="h-4 w-4 mr-1" />
                  Price Range
                </label>
                <span className="text-sm text-gray-500">
                  ${priceRange[0]} - ${priceRange[1]}
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

            {/* Course Duration */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                Course Duration
              </label>
              <div className="grid grid-cols-2 gap-2">
                {durations.map((dur) => (
                  <div
                    key={dur}
                    onClick={() => setDuration(dur)}
                    className={`px-4 py-2 rounded-md cursor-pointer border ${
                      duration === dur
                        ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    {dur}
                  </div>
                ))}
              </div>
            </div>

            {/* Sort By */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                <Sliders className="h-4 w-4 mr-1" />
                Sort Results By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Modal footer */}
          <div className="px-6 py-4 bg-gray-50 border-t flex justify-end space-x-3">
            <button
              onClick={() => {
                setPriceRange([0, 100]);
                setDuration("Any");
                setSortBy("popularity");
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
