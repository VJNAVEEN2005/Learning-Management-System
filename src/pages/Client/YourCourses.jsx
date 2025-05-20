import React, { useState } from "react";
import {
  Search,
  BookOpen,
  Clock,
  Star,
  Award,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const YourCourses = () => {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Mock course data
  const courses = [
    {
      id: 1,
      title: "Introduction to Web Development",
      instructor: "Sarah Johnson",
      progress: 45,
      image: "/api/placeholder/320/180",
      category: "development",
      lastAccessed: "2 days ago",
      completed: false,
      stars: 4.7,
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      instructor: "Michael Chen",
      progress: 78,
      image: "/api/placeholder/320/180",
      category: "data",
      lastAccessed: "4 hours ago",
      completed: false,
      stars: 4.9,
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      instructor: "Emma Rodriguez",
      progress: 92,
      image: "/api/placeholder/320/180",
      category: "design",
      lastAccessed: "Yesterday",
      completed: false,
      stars: 4.5,
    },
    {
      id: 4,
      title: "JavaScript for Beginners",
      instructor: "James Wilson",
      progress: 100,
      image: "/api/placeholder/320/180",
      category: "development",
      lastAccessed: "1 week ago",
      completed: true,
      stars: 4.8,
    },
  ];

  // Filter courses based on selected filter and search query
  const filteredCourses = courses.filter((course) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "completed" && course.completed) ||
      (filter === "in-progress" && !course.completed && course.progress > 0) ||
      (filter === "not-started" && course.progress === 0);

    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <div className=" overflow-y-scroll h-screen w-full bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
      <div className="mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Your Courses</h1>
            <p className="text-gray-600 mt-2">
              Continue learning where you left off
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-lg font-medium shadow-md hover:shadow-lg transition-all">
              Browse Catalog
            </button>
          </div>
        </div>

        {/* Search and filters */}
        <div className="bg-white rounded-xl shadow-md p-4 mb-8">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-300 focus:border-indigo-500 outline-none transition-all"
                placeholder="Search your courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex gap-2">
              <button
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === "all"
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setFilter("all")}
              >
                All
              </button>
              <button
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === "in-progress"
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setFilter("in-progress")}
              >
                In Progress
              </button>
              <button
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === "completed"
                    ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setFilter("completed")}
              >
                Completed
              </button>
            </div>
          </div>
        </div>

        {/* Course cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg"
            >
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3 bg-white bg-opacity-90 px-2 py-1 rounded-md flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-medium">{course.stars}</span>
                </div>
              </div>

              <div className="p-5">
                <div className="mb-3">
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700">
                    {course.category.charAt(0).toUpperCase() +
                      course.category.slice(1)}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Instructor: {course.instructor}
                </p>

                <div className="mb-4">
                  {course.completed ? (
                    <div className="flex items-center text-green-600">
                      <Award className="h-5 w-5 mr-2" />
                      <span className="font-medium">Completed</span>
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-between text-sm text-gray-600 mb-1">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500"
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </>
                  )}
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{course.lastAccessed}</span>
                  </div>

                  <button
                    onClick={() => navigate(`/courses/courseView/${course.id}`)}
                    className="flex items-center cursor-pointer text-sm font-medium text-indigo-600 hover:text-purple-600 transition-colors"
                  >
                    {course.completed ? "Review" : "Continue"}
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              No courses found
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              {searchQuery
                ? `No results match "${searchQuery}". Try different keywords or browse our catalog.`
                : "You don't have any courses in this category yet."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default YourCourses;
