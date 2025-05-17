import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  Clock,
  Users,
  FileText,
  Award,
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
  Check
} from "lucide-react";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedSections, setExpandedSections] = useState({});
  const [activeTab, setActiveTab] = useState("curriculum");

  useEffect(() => {
    // Simulate API call to fetch course details
    const fetchCourse = () => {
      setLoading(true);
      // Sample course data - in a real app, this would be fetched from an API
      const courseData = {
        id: parseInt(id),
        title: "Advanced JavaScript Patterns",
        instructor: "Michael Chen",
        instructorTitle: "Senior JavaScript Developer at TechCorp",
        instructorImage: "/api/placeholder/100/100",
        level: "Advanced",
        category: "Programming",
        rating: 4.9,
        students: 1876,
        reviews: 328,
        price: 69.99,
        originalPrice: 129.99,
        image: "/api/placeholder/800/450",
        lastUpdated: "April 2025",
        language: "English",
        duration: "18 hours",
        description: "Master advanced JavaScript patterns and techniques used by top developers in the industry. This comprehensive course will take your JavaScript skills to the next level with in-depth lessons on design patterns, functional programming, asynchronous JavaScript, and more.",
        learningOutcomes: [
          "Implement advanced design patterns in JavaScript applications",
          "Write clean, maintainable, and efficient JavaScript code",
          "Master asynchronous programming with Promises and async/await",
          "Build robust JavaScript applications with proper error handling",
          "Understand prototype inheritance and object composition",
          "Create and use closures effectively",
          "Apply functional programming concepts in JavaScript"
        ],
        requirements: [
          "Intermediate JavaScript knowledge",
          "Understanding of basic HTML and CSS",
          "Familiarity with ES6+ features",
          "Node.js installed on your computer"
        ],
        curriculum: [
          {
            title: "JavaScript Fundamentals Review",
            duration: "2 hours",
            lectures: [
              { title: "Course Introduction", duration: "10 min", preview: true },
              { title: "JavaScript Execution Context", duration: "25 min", preview: false },
              { title: "Scope and Closures", duration: "30 min", preview: false },
              { title: "Prototypes and Inheritance", duration: "40 min", preview: false },
              { title: "Section Practice Project", duration: "15 min", preview: false }
            ]
          },
          {
            title: "Design Patterns in JavaScript",
            duration: "4 hours",
            lectures: [
              { title: "Introduction to Design Patterns", duration: "20 min", preview: true },
              { title: "Creational Patterns", duration: "50 min", preview: false },
              { title: "Structural Patterns", duration: "55 min", preview: false },
              { title: "Behavioral Patterns", duration: "60 min", preview: false },
              { title: "Implementing Patterns: Real-world Example", duration: "45 min", preview: false },
              { title: "Section Project: Building a Component System", duration: "30 min", preview: false }
            ]
          },
          {
            title: "Functional Programming",
            duration: "3.5 hours",
            lectures: [
              { title: "Functional Programming Concepts", duration: "35 min", preview: false },
              { title: "Pure Functions and Side Effects", duration: "25 min", preview: false },
              { title: "Higher-Order Functions", duration: "40 min", preview: false },
              { title: "Function Composition", duration: "30 min", preview: false },
              { title: "Immutability", duration: "35 min", preview: false },
              { title: "Functional Libraries Overview", duration: "25 min", preview: false },
              { title: "Section Project: Refactoring to Functional Style", duration: "40 min", preview: false }
            ]
          },
          {
            title: "Asynchronous JavaScript Mastery",
            duration: "4 hours",
            lectures: [
              { title: "Callbacks and Their Limitations", duration: "30 min", preview: false },
              { title: "Promises Deep Dive", duration: "45 min", preview: false },
              { title: "Async/Await Patterns", duration: "40 min", preview: false },
              { title: "Error Handling Strategies", duration: "35 min", preview: false },
              { title: "Concurrent Operations", duration: "50 min", preview: false },
              { title: "Performance Optimization", duration: "40 min", preview: false },
              { title: "Section Project: Building a Data Fetching Library", duration: "50 min", preview: false }
            ]
          },
          {
            title: "Advanced Application Architecture",
            duration: "4.5 hours",
            lectures: [
              { title: "Component Architecture", duration: "45 min", preview: false },
              { title: "State Management Patterns", duration: "55 min", preview: false },
              { title: "Module System and Code Organization", duration: "35 min", preview: false },
              { title: "Testing Strategies", duration: "50 min", preview: false },
              { title: "Performance Monitoring and Optimization", duration: "40 min", preview: false },
              { title: "Final Project: Building a Complete Application", duration: "65 min", preview: false }
            ]
          }
        ],
        reviewsComment: [
          {
            id: 1,
            user: "Jennifer L.",
            date: "March 15, 2025",
            rating: 5,
            comment: "This course completely transformed how I approach JavaScript development. The advanced patterns section was particularly eye-opening. Highly recommended for anyone looking to level up their skills!"
          },
          {
            id: 2,
            user: "David K.",
            date: "February 28, 2025",
            rating: 4,
            comment: "Great content and explanations. The instructor really knows his stuff and explains complex topics in an approachable way. The only thing I'd improve is adding more practical exercises."
          },
          {
            id: 3,
            user: "Aisha M.",
            date: "April 2, 2025",
            rating: 5,
            comment: "One of the best programming courses I've taken. The curriculum is well-structured and the examples are relevant to real-world scenarios. I particularly enjoyed the functional programming section."
          }
        ]
      };

      setTimeout(() => {
        setCourse(courseData);
        setLoading(false);
      }, 300); // Simulate network delay
    };

    fetchCourse();
  }, [id]);

  const toggleSection = (index) => {
    setExpandedSections({
      ...expandedSections,
      [index]: !expandedSections[index]
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-500 p-8 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-lg p-10 text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-indigo-500 border-opacity-50 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-700">Loading course details...</p>
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
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Course not found</h3>
            <p className="text-gray-500 mb-4">The course you're looking for doesn't exist or has been removed.</p>
            <Link to="/courses" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
              Browse Courses
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-500">
      {/* Course Header */}
      <div className="bg-gray-900 bg-opacity-75 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row">
            {/* Course Info */}
            <div className="flex-1 pr-0 lg:pr-12">
              <div className="flex items-center mb-4">
                <span className="px-3 py-1 bg-indigo-600 text-white text-sm font-semibold rounded-full mr-3">
                  {course.category}
                </span>
                <span className="px-3 py-1 bg-purple-600 text-white text-sm font-semibold rounded-full">
                  {course.level}
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">{course.title}</h1>
              
              <p className="text-lg text-gray-200 mb-6">{course.description}</p>
              
              <div className="flex flex-wrap items-center text-sm mb-6">
                <div className="flex items-center mr-4 mb-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-1">{course.rating} ({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center mr-4 mb-2">
                  <Users className="h-5 w-5 text-gray-300" />
                  <span className="ml-1">{course.students.toLocaleString()} students</span>
                </div>
                <div className="flex items-center mr-4 mb-2">
                  <Clock className="h-5 w-5 text-gray-300" />
                  <span className="ml-1">{course.duration}</span>
                </div>
                <div className="flex items-center mr-4 mb-2">
                  <Globe className="h-5 w-5 text-gray-300" />
                  <span className="ml-1">{course.language}</span>
                </div>
                <div className="flex items-center mb-2">
                  <FileText className="h-5 w-5 text-gray-300" />
                  <span className="ml-1">Last updated {course.lastUpdated}</span>
                </div>
              </div>
              
              <div className="flex items-center mb-6">
                <img src={course.instructorImage} alt={course.instructor} className="w-12 h-12 rounded-full mr-3" />
                <div>
                  <p className="font-semibold">{course.instructor}</p>
                  <p className="text-sm text-gray-300">{course.instructorTitle}</p>
                </div>
              </div>
            </div>
            
            {/* Video Preview Card */}
            <div className="lg:w-1/3 mt-8 lg:mt-0">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative pb-[56.25%]">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center">
                    <img 
                      src={course.image} 
                      alt={course.title} 
                      className="w-full h-full object-cover opacity-75"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-indigo-700 transition-colors">
                        <Play className="h-8 w-8 text-white ml-1" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold text-gray-900">${course.price}</span>
                      <span className="ml-2 text-lg text-gray-500 line-through">${course.originalPrice}</span>
                    </div>
                    <span className="px-2 py-1 bg-green-100 text-green-800 text-sm font-semibold rounded">
                      {Math.round((1 - course.price / course.originalPrice) * 100)}% off
                    </span>
                  </div>
                  <button className="w-full py-3 mb-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center">
                    <span>Enroll Now</span>
                  </button>
                  <div className="text-center text-sm text-gray-500 mb-4">30-Day Money-Back Guarantee</div>
                  <div className="flex justify-center gap-4">
                    <button className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                      <Heart className="h-5 w-5 mr-1" />
                      <span className="text-sm">Wishlist</span>
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                      <Share2 className="h-5 w-5 mr-1" />
                      <span className="text-sm">Share</span>
                    </button>
                    <button className="flex items-center text-gray-600 hover:text-indigo-600 transition-colors">
                      <Gift className="h-5 w-5 mr-1" />
                      <span className="text-sm">Gift</span>
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
                className={`px-6 py-4 text-sm font-medium ${activeTab === 'curriculum' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('curriculum')}
              >
                Curriculum
              </button>
              <button 
                className={`px-6 py-4 text-sm font-medium ${activeTab === 'overview' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button 
                className={`px-6 py-4 text-sm font-medium ${activeTab === 'reviews' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews
              </button>
              <button 
                className={`px-6 py-4 text-sm font-medium ${activeTab === 'instructor' ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500 hover:text-gray-700'}`}
                onClick={() => setActiveTab('instructor')}
              >
                Instructor
              </button>
            </div>
          </div>
          
          {/* Tab Content */}
          <div className="p-6">
            {/* Curriculum Tab */}
            {activeTab === 'curriculum' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Course Curriculum</h2>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{course.duration} total length</span>
                    <span className="mx-2">•</span>
                    <FileText className="h-4 w-4 mr-1" />
                    <span>{course.curriculum.reduce((total, section) => total + section.lectures.length, 0)} lectures</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {course.curriculum.map((section, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div 
                        className="bg-gray-50 p-4 flex justify-between items-center cursor-pointer"
                        onClick={() => toggleSection(index)}
                      >
                        <div className="flex items-center">
                          <BookOpen className="h-5 w-5 text-indigo-600 mr-2" />
                          <h3 className="font-medium text-gray-800">{section.title}</h3>
                        </div>
                        <div className="flex items-center">
                          <span className="text-sm text-gray-500 mr-4">{section.duration} • {section.lectures.length} lectures</span>
                          {expandedSections[index] ? (
                            <ChevronUp className="h-5 w-5 text-gray-400" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                          )}
                        </div>
                      </div>
                      
                      {expandedSections[index] && (
                        <div className="divide-y divide-gray-100">
                          {section.lectures.map((lecture, lectureIndex) => (
                            <div key={lectureIndex} className="p-4 flex justify-between items-center">
                              <div className="flex items-center">
                                {lecture.preview ? (
                                  <Play className="h-5 w-5 text-indigo-600 mr-3" />
                                ) : (
                                  <Lock className="h-5 w-5 text-gray-400 mr-3" />
                                )}
                                <div>
                                  <h4 className="text-gray-800">{lecture.title}</h4>
                                  {lecture.preview && (
                                    <span className="text-xs text-indigo-600">Preview available</span>
                                  )}
                                </div>
                              </div>
                              <div className="text-sm text-gray-500">{lecture.duration}</div>
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
            {activeTab === 'overview' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">About This Course</h2>
                <p className="text-gray-700 mb-8">{course.description}</p>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">What You'll Learn</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {course.learningOutcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">Requirements</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {course.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            
            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Student Reviews</h2>
                  <div className="flex items-center">
                    <div className="flex items-center mr-3">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1 font-semibold">{course.rating}</span>
                    </div>
                    <span className="text-gray-600">{course.reviews} reviews</span>
                  </div>
                </div>
                
                <div className="space-y-6">
                  {course.reviewsComment.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-6 last:border-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-800">{review.user}</h4>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <button className="px-6 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
                    See All Reviews
                  </button>
                </div>
              </div>
            )}
            
            {/* Instructor Tab */}
            {activeTab === 'instructor' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Meet Your Instructor</h2>
                
                <div className="flex flex-col md:flex-row items-start md:items-center mb-8">
                  <img src={course.instructorImage} alt={course.instructor} className="w-24 h-24 rounded-full mr-6 mb-4 md:mb-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{course.instructor}</h3>
                    <p className="text-gray-600">{course.instructorTitle}</p>
                    
                    <div className="flex items-center mt-3 space-x-6">
                      <div className="flex items-center">
                        <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        <span className="ml-1 text-gray-700">4.8 Instructor Rating</span>
                      </div>
                      <div className="flex items-center">
                        <MessageCircle className="h-5 w-5 text-gray-600" />
                        <span className="ml-1 text-gray-700">1,240 Reviews</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-gray-600" />
                        <span className="ml-1 text-gray-700">9,870 Students</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="prose max-w-none text-gray-700">
                  <p className="mb-4">Michael Chen is a seasoned JavaScript developer with over 10 years of experience building web applications for startups and Fortune 500 companies. He currently works as a Senior JavaScript Developer at TechCorp, where he leads the frontend architecture team.</p>
                  
                  <p className="mb-4">Michael is passionate about teaching and has mentored dozens of junior developers throughout his career. His teaching approach focuses on practical applications of theoretical concepts, helping students bridge the gap between knowledge and real-world implementation.</p>
                  
                  <p>When not coding or teaching, Michael contributes to open-source projects and speaks at web development conferences around the world.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// These components aren't defined in the original code, so we need to define them here
const Lock = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  );
};

const Gift = ({ className }) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <rect x="3" y="8" width="18" height="4" rx="1"></rect>
      <path d="M12 8v13"></path>
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
    </svg>
  );
};

export default CourseDetails;