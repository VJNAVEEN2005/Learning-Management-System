import React from 'react';
import { BookOpen, Award, User, Mail, GraduationCap, BookMarked, Clock, Calendar } from 'lucide-react';

const UserProfile = () => {
  const userInfo = {
    name: "Alex Johnson",
    email: "alex.johnson@example.com",
    education: "Bachelor of Science in Computer Science",
    avatar: "/api/placeholder/150/150",
    completedCourses: 2,
    registeredCourses: 4
  };
  
  const certificates = [
    {
      id: 1,
      title: "Introduction to Web Development",
      issueDate: "April 10, 2024",
      issuer: "Emma Wilson"
    },
    {
      id: 2,
      title: "React Fundamentals",
      issueDate: "April 25, 2024",
      issuer: "David Chen"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 h-screen w-screen overflow-y-scroll p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          {/* Profile Header - Top Banner */}
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <img 
                src={userInfo.avatar} 
                alt="User avatar" 
                className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white shadow-md"
              />
              <div className="ml-4 text-white">
                <h1 className="text-2xl md:text-3xl font-bold">{userInfo.name}</h1>
                <p className="text-indigo-100">{userInfo.email}</p>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="bg-[#ffffff3d] p-3 rounded-xl text-center min-w-20">
                <p className="text-2xl font-bold text-white">{userInfo.registeredCourses}</p>
                <p className="text-white text-xs">Registered</p>
              </div>
              <div className="bg-[#ffffff3d] p-3 rounded-xl text-center min-w-20">
                <p className="text-2xl font-bold text-white">{userInfo.completedCourses}</p>
                <p className="text-white text-xs">Completed</p>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="p-6 md:p-8 grid md:grid-cols-3 gap-8">
            {/* Left Column - Personal Info */}
            <div className="md:col-span-1">
              <div className="bg-indigo-50 rounded-xl p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <User className="w-5 h-5 mr-2 text-indigo-600" />
                  Personal Info
                </h2>
                
                <div className="space-y-5">
                  <div className="flex items-center">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <User className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
                      <p className="text-gray-800 font-medium">{userInfo.name}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <Mail className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-500">Email Address</h3>
                      <p className="text-gray-800 font-medium">{userInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-white p-2 rounded-lg shadow-sm">
                      <GraduationCap className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-500">Education</h3>
                      <p className="text-gray-800 font-medium">{userInfo.education}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Middle & Right Column - Courses & Certificates */}
            <div className="md:col-span-2 space-y-8">
              {/* Course Stats */}
              <div className="bg-white border border-indigo-100 rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-indigo-600" />
                  Learning Progress
                </h2>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 p-4 rounded-xl text-center">
                    <p className="text-3xl font-bold text-white">{userInfo.registeredCourses}</p>
                    <p className="text-indigo-100 text-sm">Registered</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-xl text-center">
                    <p className="text-3xl font-bold text-white">{userInfo.completedCourses}</p>
                    <p className="text-purple-100 text-sm">Completed</p>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-400 to-indigo-500 p-4 rounded-xl text-center">
                    <p className="text-3xl font-bold text-white">{userInfo.registeredCourses - userInfo.completedCourses}</p>
                    <p className="text-indigo-100 text-sm">In Progress</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-400 to-purple-500 p-4 rounded-xl text-center">
                    <p className="text-3xl font-bold text-white">50%</p>
                    <p className="text-purple-100 text-sm">Completion</p>
                  </div>
                </div>
              </div>
              
              {/* Certificates */}
              <div className="bg-white border border-indigo-100 rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-indigo-600" />
                  Certificates
                </h2>
                
                <div className="space-y-4">
                  {certificates.map(cert => (
                    <div key={cert.id} className="border border-gray-100 rounded-lg p-4 hover:bg-indigo-50 transition flex justify-between items-center shadow-sm">
                      <div className="flex items-start space-x-4">
                        <div className="bg-indigo-100 p-3 rounded-lg hidden sm:block">
                          <Award className="w-6 h-6 text-indigo-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800">{cert.title}</h3>
                          <div className="flex items-center text-sm text-gray-600 mt-1">
                            <User className="w-4 h-4 mr-1 text-indigo-400" />
                            <p>Issued by: {cert.issuer}</p>
                          </div>
                          <div className="flex items-center text-sm text-gray-600 mt-1">
                            <Calendar className="w-4 h-4 mr-1 text-indigo-400" />
                            <p>{cert.issueDate}</p>
                          </div>
                        </div>
                      </div>
                      <button className="bg-indigo-100 hover:bg-indigo-200 text-indigo-700 py-2 px-4 rounded-lg text-sm font-medium transition">
                        View
                      </button>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 text-center">
                  <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-2 px-6 rounded-lg text-sm font-medium hover:opacity-90 transition shadow-md">
                    View All Certificates
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;