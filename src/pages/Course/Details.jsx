import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  Clock,
  Users,
  FileText,
  Globe,
  MessageCircle,
  BookOpen,
  ChevronDown,
  ChevronUp,
  Play,
  Download,
  Share2,
  Heart,
  AlertCircle,
  Check,
} from "lucide-react";
import axios from "axios";
import api from "../../api/api";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedSections, setExpandedSections] = useState({});
  const [activeTab, setActiveTab] = useState("curriculum");

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

  useEffect(() => {
    const fetchCourse = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${api.current}api/courses/${id}`);
        setCourse(response.data.data);
        console.log("Course data:", response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching course details:", error);
        setCourse(null);
      } finally {
        setLoading(false);
      }
    };
    fetchCourse();
  }, [id]);

  const toggleSection = (index) => {
    setExpandedSections({
      ...expandedSections,
      [index]: !expandedSections[index],
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-500 p-8 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-10 text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-500 border-opacity-50 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-700">
            Loading course details...
          </p>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-500 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-10 text-center">
            <AlertCircle className="h-16 w-16 mx-auto text-red-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              Course not found
            </h3>
            <p className="text-gray-500 mb-4">
              The course you're looking for doesn't exist or has been removed.
            </p>
            <Link
              to="/courses"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            >
              Browse Courses
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Calculate total lessons
  const totalLessons = course.modules.reduce(
    (total, module) => total + module.lessons.length,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-500">
      {/* Course Header */}
      <div className="bg-gray-900 bg-opacity-75 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row">
            {/* Course Info */}
            <div className="flex-1 pr-0 lg:pr-12">
              <div className="flex items-center mb-4">
                <span className="px-2 py-1 bg-indigo-600 text-sm rounded">
                  {course.level}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                {course.title}
              </h1>
              <p className="text-lg text-gray-200 mb-6">{course.description}</p>

              <div className="flex items-center mb-6">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16" />
                <div className="ml-4">
                  <p className="font-semibold">{course.instructor}</p>
                  <div className="flex items-center mt-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span>{course.rating.toFixed(1)} Instructor Rating</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>{course.enrollmentCount} Students</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>
                    Last updated:{" "}
                    {new Date(course.updatedAt).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center">
                  <Globe className="h-5 w-5 mr-2" />
                  <span>English</span>
                </div>
              </div>
            </div>

            {/* Video Preview Card */}
            <div className="lg:w-1/3 mt-8 lg:mt-0">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative pb-[56.25%]">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
                    <div className="w-full h-full bg-gray-200 border-2 border-dashed rounded-xl flex items-center justify-center">
                      <iframe
                        src={convertDriveLink(course.thumbnailUrl)}
                        frameborder="0"
                        className="w-full h-full rounded-lg"
                      ></iframe>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-indigo-700 transition-colors">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-3xl font-bold text-gray-900">
                      ₹{course.price}
                    </span>
                  </div>
                  <button className="w-full py-3 mb-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center">
                    <span>Enroll Now</span>
                  </button>
                  <div className="text-center text-sm text-gray-500 mb-4">
                    30-Day Money-Back Guarantee
                  </div>
                  <div className="flex justify-center gap-4">
                    <button className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                      <Heart className="h-5 w-5 mr-1" />
                      <span className="text-sm">Wishlist</span>
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                      <Share2 className="h-5 w-5 mr-1" />
                      <span className="text-sm">Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              <button
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === "curriculum"
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("curriculum")}
              >
                Curriculum
              </button>
              <button
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === "overview"
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("overview")}
              >
                Overview
              </button>
              <button
                className={`px-6 py-4 text-sm font-medium ${
                  activeTab === "instructor"
                    ? "text-indigo-600 border-b-2 border-indigo-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("instructor")}
              >
                Instructor
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Curriculum Tab */}
            {activeTab === "curriculum" && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Course Curriculum
                  </h2>
                  <div className="flex items-center text-sm text-gray-600">
                    <FileText className="h-4 w-4 mr-1" />
                    <span>{totalLessons} lessons</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {course.modules.map((module, index) => (
                    <div
                      key={module.id}
                      className="border border-gray-200 rounded-lg overflow-hidden"
                    >
                      <div
                        className="bg-gray-50 p-4 flex justify-between items-center cursor-pointer"
                        onClick={() => toggleSection(index)}
                      >
                        <div className="flex items-center">
                          <BookOpen className="h-5 w-5 text-indigo-600 mr-2" />
                          <h3 className="font-medium text-gray-800">
                            {module.title}
                          </h3>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm text-gray-500 mr-3">
                            {module.lessons.length} lessons
                          </span>
                          {expandedSections[index] ? (
                            <ChevronUp className="h-5 w-5 text-gray-400" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                          )}
                        </div>
                      </div>

                      {expandedSections[index] && (
                        <div className="divide-y divide-gray-100">
                          {module.lessons.map((lesson) => (
                            <div
                              key={lesson.id}
                              className="p-4 flex justify-between items-center"
                            >
                              <div className="flex items-center">
                                <Play className="h-5 w-5 text-indigo-600 mr-3" />
                                <div>
                                  <h4 className="text-gray-800">
                                    {lesson.title}
                                  </h4>
                                </div>
                              </div>
                              <div className="flex items-center space-x-4">
                                {lesson.pdfUrl && (
                                  <a
                                    href={lesson.pdfUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:text-indigo-800 flex items-center"
                                  >
                                    <Download className="h-4 w-4 mr-1" />
                                    <span className="text-sm">PDF</span>
                                  </a>
                                )}
                                <span className="text-sm text-gray-500">
                                  {lesson.duration > 0
                                    ? `${Math.floor(lesson.duration / 60)}m ${
                                        lesson.duration % 60
                                      }s`
                                    : "Watch"}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  About This Course
                </h2>
                <p className="text-gray-700 mb-8">{course.description}</p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Course Details
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Users className="h-5 w-5 text-indigo-600 mr-2" />
                      <div>
                        <p className="text-gray-600">Level</p>
                        <p className="font-medium">{course.level}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-indigo-600 mr-2" />
                      <div>
                        <p className="text-gray-600">Last Updated</p>
                        <p className="font-medium">
                          {new Date(
                            course.updatedAt
                          ).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-indigo-600 mr-2" />
                      <div>
                        <p className="text-gray-600">Total Lessons</p>
                        <p className="font-medium">{totalLessons}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 text-indigo-600 mr-2" />
                      <div>
                        <p className="text-gray-600">Language</p>
                        <p className="font-medium">English</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Instructor Tab */}
            {activeTab === "instructor" && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Meet Your Instructor
                </h2>

                <div className="flex flex-col md:flex-row items-start md:items-center mb-8">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 md:mr-6 mb-4 md:mb-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {course.instructor}
                    </h3>

                    <div className="flex items-center mt-3 space-x-6">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="ml-1 text-gray-700">
                          {course.rating.toFixed(1)} Instructor Rating
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-gray-600" />
                        <span className="ml-1 text-gray-700">
                          {course.enrollmentCount} Students
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">
                    {course.instructor} is an experienced instructor
                    specializing in Figma design. With a passion for teaching
                    and a focus on practical skills,{" "}
                    {course.instructor.split(" ")[0]}
                    helps students master design tools through hands-on projects
                    and real-world examples.
                  </p>

                  <p>
                    When not teaching, {course.instructor.split(" ")[0]}{" "}
                    contributes to the design community and creates resources
                    for aspiring designers.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
