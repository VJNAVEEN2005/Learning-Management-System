import React, { useState } from 'react';
import { 
  Bell, 
  BookOpen, 
  Calendar, 
  ChevronRight, 
  Clock, 
  Flame, 
  PlusCircle, 
  Search, 
  Settings, 
  User
} from 'lucide-react';

// Mock data for the dashboard
const userData = {
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  avatar: "/api/placeholder/40/40",
  streak: 7,
  totalProgress: 68,
};

const courseData = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    progress: 85,
    totalLessons: 24,
    completedLessons: 20,
    nextLesson: "Advanced CSS Layouts",
    category: "Development",
    lastAccessed: "2 days ago"
  },
  {
    id: 2,
    title: "JavaScript Frameworks Masterclass",
    progress: 42,
    totalLessons: 36,
    completedLessons: 15,
    nextLesson: "Building React Components",
    category: "Development",
    lastAccessed: "Yesterday"
  },
  {
    id: 3,
    title: "UI/UX Design Principles",
    progress: 75,
    totalLessons: 18,
    completedLessons: 13,
    nextLesson: "User Testing Methods",
    category: "Design",
    lastAccessed: "3 days ago"
  }
];

// Component for progress bar
const ProgressBar = ({ progress, color = "from-indigo-500 to-purple-500" }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div 
        className={`h-2 rounded-full ${color}`} 
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

// Course card component
const CourseCard = ({ course }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4 border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-gray-800">{course.title}</h3>
          <div className="text-xs text-gray-500 mt-1">{course.category} • Last accessed {course.lastAccessed}</div>
        </div>
      </div>
      <div className="mt-3">
        <div className="flex justify-between text-xs text-gray-600 mb-1">
          <span>Progress</span>
          <span>{course.progress}%</span>
        </div>
        <ProgressBar progress={course.progress} />
      </div>
      <div className="mt-4 flex justify-between items-center">
        <div className="text-xs text-gray-600">
          <span>{course.completedLessons}/{course.totalLessons} lessons</span>
        </div>
        <div className="flex items-center text-indigo-600 text-sm font-medium cursor-pointer hover:text-indigo-800">
          <span>Continue</span>
          <ChevronRight size={16} className="ml-1" />
        </div>
      </div>
    </div>
  );
};

// Add Course Modal Component
const AddCourseModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Add New Course</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Course Category
          </label>
          <select className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Development</option>
            <option>Design</option>
            <option>Marketing</option>
            <option>Business</option>
            <option>Personal Development</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Search Courses
          </label>
          <div className="relative">
            <input
              type="text"
              className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Search by course name..."
            />
            <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
          </div>
        </div>
        <div className="max-h-60 overflow-y-auto mb-4">
          <div className="p-3 border rounded-md mb-2 hover:bg-indigo-50 cursor-pointer">
            <div className="font-medium">Advanced React Patterns</div>
            <div className="text-sm text-gray-500">36 lessons • 8 hours</div>
          </div>
          <div className="p-3 border rounded-md mb-2 hover:bg-indigo-50 cursor-pointer">
            <div className="font-medium">Full Stack Development with Node.js</div>
            <div className="text-sm text-gray-500">48 lessons • 12 hours</div>
          </div>
          <div className="p-3 border rounded-md hover:bg-indigo-50 cursor-pointer">
            <div className="font-medium">Mobile App Design Fundamentals</div>
            <div className="text-sm text-gray-500">24 lessons • 6 hours</div>
          </div>
        </div>
        <div className="flex justify-end space-x-3">
          <button 
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-md hover:opacity-90">
            Add Selected Course
          </button>
        </div>
      </div>
    </div>
  );
};

const ClientDashboard = () => {
  const [isAddCourseModalOpen, setIsAddCourseModalOpen] = useState(false);
  
  return (
    <div className="h-screen overflow-y-scroll w-screen bg-gradient-to-br from-indigo-50 to-purple-50">
    

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-800">Welcome back, {userData.name}!</h2>
                <div className="flex items-center text-amber-500">
                  <Flame size={20} className="mr-1" />
                  <span className="font-semibold">{userData.streak} day streak</span>
                </div>
              </div>
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-600 mb-1">
                  <span>Overall Progress</span>
                  <span>{userData.totalProgress}%</span>
                </div>
                <ProgressBar progress={userData.totalProgress} />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg">
                  <div className="text-indigo-600 font-semibold mb-1">3 Courses</div>
                  <div className="text-xs text-gray-600">In progress</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg">
                  <div className="text-indigo-600 font-semibold mb-1">12 Hours</div>
                  <div className="text-xs text-gray-600">Total learning time</div>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-4 rounded-lg">
                  <div className="text-indigo-600 font-semibold mb-1">4 Certificates</div>
                  <div className="text-xs text-gray-600">Earned</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">My Courses</h2>
                <button 
                  onClick={() => setIsAddCourseModalOpen(true)}
                  className="flex items-center text-sm bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1.5 rounded-md hover:opacity-90"
                >
                  <PlusCircle size={16} className="mr-1" /> Add Course
                </button>
              </div>
              
              <div className="space-y-4">
                {courseData.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <a href="/my-courses" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                  View all courses
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Profile Information</h2>
              <div className="space-y-3">
                <div className="flex items-center">
                  <User size={18} className="text-gray-400 mr-3" />
                  <div>
                    <div className="text-sm font-medium">{userData.name}</div>
                    <div className="text-xs text-gray-500">{userData.email}</div>
                  </div>
                </div>
                <div className="pt-2">
                  <a href="/profile" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                    Edit profile
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Quick Links</h2>
              <div className="space-y-3">
                <a href="/my-courses" className="flex items-center p-2 hover:bg-indigo-50 rounded-md">
                  <BookOpen size={18} className="text-indigo-500 mr-3" />
                  <span className="text-gray-700">My Courses</span>
                </a>
                <a href="/analytics" className="flex items-center p-2 hover:bg-indigo-50 rounded-md">
                  <Settings size={18} className="text-indigo-500 mr-3" />
                  <span className="text-gray-700">Analytics Dashboard</span>
                </a>
                <a href="/calendar" className="flex items-center p-2 hover:bg-indigo-50 rounded-md">
                  <Calendar size={18} className="text-indigo-500 mr-3" />
                  <span className="text-gray-700">Calendar</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Upcoming Lessons</h2>
              <div className="space-y-3">
                <div className="p-3 border border-gray-100 rounded-md">
                  <div className="text-sm font-medium">Building React Components</div>
                  <div className="text-xs text-gray-500 mt-1">JavaScript Frameworks Masterclass</div>
                  <div className="flex items-center mt-2 text-xs text-gray-600">
                    <Clock size={14} className="mr-1" />
                    <span>Today, 4:00 PM</span>
                  </div>
                </div>
                <div className="p-3 border border-gray-100 rounded-md">
                  <div className="text-sm font-medium">User Testing Methods</div>
                  <div className="text-xs text-gray-500 mt-1">UI/UX Design Principles</div>
                  <div className="flex items-center mt-2 text-xs text-gray-600">
                    <Clock size={14} className="mr-1" />
                    <span>Tomorrow, 11:00 AM</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <a href="/calendar" className="text-indigo-600 hover:text-indigo-800 text-sm font-medium">
                  View full schedule
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add Course Modal */}
      <AddCourseModal 
        isOpen={isAddCourseModalOpen} 
        onClose={() => setIsAddCourseModalOpen(false)} 
      />
    </div>
  );
};

export default ClientDashboard;