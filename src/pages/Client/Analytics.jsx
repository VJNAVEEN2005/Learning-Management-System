import React, { useState } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  BarChart,
  Bar 
} from 'recharts';
import { Calendar, Clock, Award, BookOpen, Users, BarChart2, Activity, CheckCircle } from 'lucide-react';

// Sample data - this would come from your backend in a real implementation
const progressData = [
  { day: 'Mon', progress: 45 },
  { day: 'Tue', progress: 65 },
  { day: 'Wed', progress: 80 },
  { day: 'Thu', progress: 78 },
  { day: 'Fri', progress: 90 },
  { day: 'Sat', progress: 95 },
  { day: 'Sun', progress: 100 },
];

const courseData = [
  { 
    id: 1, 
    title: 'Introduction to React', 
    completed: 85, 
    total: 15, 
    done: 12,
    active: true
  },
  { 
    id: 2, 
    title: 'Advanced JavaScript Concepts', 
    completed: 60, 
    total: 20, 
    done: 12,
    active: true
  },
  { 
    id: 3, 
    title: 'CSS Mastery', 
    completed: 40, 
    total: 12, 
    done: 5,
    active: true
  },
  { 
    id: 4, 
    title: 'Node.js Fundamentals', 
    completed: 0, 
    total: 18, 
    done: 0,
    active: false
  },
];

const quizData = [
  { name: 'Quiz 1', score: 85 },
  { name: 'Quiz 2', score: 92 },
  { name: 'Quiz 3', score: 78 },
  { name: 'Quiz 4', score: 95 }
];

const Analytics = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Current streak calculation (sample)
  const currentStreak = 12;
  const longestStreak = 21;
  
  // Total study time (sample)
  const totalStudyHours = 128;
  const averageDailyMinutes = 45;
  
  // Total badges earned (sample)
  const badgesEarned = 15;
  const totalBadges = 30;
  
  // Course completion (sample)
  const coursesCompleted = 3;
  const coursesEnrolled = 7;
  const completionPercentage = Math.round((coursesCompleted / coursesEnrolled) * 100);
  
  const renderProgressBar = (completed) => {
    return (
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full" 
          style={{ width: `${completed}%` }}
        ></div>
      </div>
    );
  };
  
  const renderTab = (tab) => {
    switch(tab) {
      case 'overview':
        return (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Current Streak</p>
                  <p className="text-2xl font-bold">{currentStreak} days</p>
                  <p className="text-sm text-gray-500">Longest: {longestStreak} days</p>
                </div>
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white">
                  <Calendar size={24} />
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Study Time</p>
                  <p className="text-2xl font-bold">{totalStudyHours} hours</p>
                  <p className="text-sm text-gray-500">Average: {averageDailyMinutes} min/day</p>
                </div>
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white">
                  <Clock size={24} />
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Badges Earned</p>
                  <p className="text-2xl font-bold">{badgesEarned}/{totalBadges}</p>
                  <p className="text-sm text-gray-500">{Math.round((badgesEarned / totalBadges) * 100)}% completed</p>
                </div>
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white">
                  <Award size={24} />
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Course Completion</p>
                  <p className="text-2xl font-bold">{coursesCompleted}/{coursesEnrolled}</p>
                  <p className="text-sm text-gray-500">{completionPercentage}% completed</p>
                </div>
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full text-white">
                  <BookOpen size={24} />
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'courses':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Course Progress</h3>
            
            <div className="space-y-4">
              {courseData.map((course) => (
                <div 
                  key={course.id}
                  className={`p-4 rounded-lg ${course.active 
                    ? "bg-gradient-to-r from-indigo-50 to-purple-50" 
                    : "bg-gray-100"}`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">{course.title}</h4>
                    <span className={`text-sm px-2 py-1 rounded ${course.active 
                      ? "bg-green-100 text-green-800" 
                      : "bg-gray-200 text-gray-600"}`}>
                      {course.active ? "Active" : "Not Started"}
                    </span>
                  </div>
                  
                  <div className="mb-2">
                    {renderProgressBar(course.completed)}
                  </div>
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {course.done}/{course.total} lessons completed
                    </span>
                    <span className="font-medium">{course.completed}%</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Quiz Performance</h3>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={quizData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Bar dataKey="score" fill="#6366f1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
        
      case 'progress':
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Weekly Learning Progress</h3>
            
            <div className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={progressData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="progress" 
                    stroke="#8884d8" 
                    strokeWidth={2}
                    activeDot={{ r: 8 }} 
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold">Learning Streak</h4>
                  <Activity size={20} className="text-indigo-500" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Current Streak</span>
                    <span className="font-bold">{currentStreak} days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Longest Streak</span>
                    <span className="font-bold">{longestStreak} days</span>
                  </div>
                  <div className="mt-4">
                    {renderProgressBar((currentStreak / longestStreak) * 100)}
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold">Learning Goals</h4>
                  <CheckCircle size={20} className="text-indigo-500" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Daily study goal</span>
                    <span className="font-bold">45 min/day</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Weekly completion goal</span>
                    <span className="font-bold">3 modules</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Monthly certificate goal</span>
                    <span className="font-bold">1 certificate</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-screen overflow-y-scroll bg-gradient-to-br from-indigo-50 to-purple-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">My Learning Analytics</h1>
          
          <div className="bg-white p-2 rounded-lg shadow-sm">
            <select 
              className="border-0 focus:ring-0 text-sm" 
              defaultValue="last7Days"
            >
              <option value="today">Today</option>
              <option value="last7Days">Last 7 Days</option>
              <option value="last30Days">Last 30 Days</option>
              <option value="allTime">All Time</option>
            </select>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow mb-6">
          <div className="border-b">
            <nav className="flex overflow-x-auto">
              <button 
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 ${
                  activeTab === 'overview' 
                    ? 'border-indigo-500 text-indigo-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('overview')}
              >
                Overview
              </button>
              <button 
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 ${
                  activeTab === 'courses' 
                    ? 'border-indigo-500 text-indigo-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('courses')}
              >
                Courses
              </button>
              <button 
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 ${
                  activeTab === 'progress' 
                    ? 'border-indigo-500 text-indigo-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('progress')}
              >
                Progress
              </button>
            </nav>
          </div>
          
          <div className="p-4 md:p-6">
            {renderTab(activeTab)}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow p-4 md:p-6">
          <h2 className="text-xl font-semibold mb-4">Recommended Actions</h2>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 border border-indigo-100 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-indigo-100 rounded-full">
                  <BookOpen size={16} className="text-indigo-600" />
                </div>
                <h3 className="font-medium">Continue Learning</h3>
              </div>
              <p className="text-sm text-gray-600">
                Continue with "Advanced JavaScript Concepts" - 40% left to complete
              </p>
              <button className="mt-3 w-full py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-md text-sm font-medium">
                Resume Course
              </button>
            </div>
            
            <div className="p-4 border border-indigo-100 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-indigo-100 rounded-full">
                  <Users size={16} className="text-indigo-600" />
                </div>
                <h3 className="font-medium">Join Discussion</h3>
              </div>
              <p className="text-sm text-gray-600">
                3 new discussions in your active courses need your input
              </p>
              <button className="mt-3 w-full py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-md text-sm font-medium">
                View Discussions
              </button>
            </div>
            
            <div className="p-4 border border-indigo-100 rounded-lg bg-gradient-to-r from-indigo-50 to-purple-50">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-indigo-100 rounded-full">
                  <BarChart2 size={16} className="text-indigo-600" />
                </div>
                <h3 className="font-medium">Take Assessment</h3>
              </div>
              <p className="text-sm text-gray-600">
                Weekly assessment for "CSS Mastery" is now available
              </p>
              <button className="mt-3 w-full py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-md text-sm font-medium">
                Start Assessment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;