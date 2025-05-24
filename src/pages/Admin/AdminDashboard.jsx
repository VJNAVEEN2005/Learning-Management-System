import React, { useState } from "react";
import { Users, BookOpen, GraduationCap, TrendingUp, Calendar, Award } from "lucide-react";

const AdminDashboard = () => {
  // Mock data for students and courses
  const [students] = useState([
    { id: 1, name: "Alice Johnson", email: "alice@email.com", courses: ["React Fundamentals", "JavaScript Advanced"] },
    { id: 2, name: "Bob Smith", email: "bob@email.com", courses: ["Python Basics", "Data Science"] },
    { id: 3, name: "Carol Davis", email: "carol@email.com", courses: ["React Fundamentals", "Node.js"] },
    { id: 4, name: "David Wilson", email: "david@email.com", courses: ["JavaScript Advanced", "Vue.js"] },
    { id: 5, name: "Eva Brown", email: "eva@email.com", courses: ["Python Basics"] },
    { id: 6, name: "Frank Miller", email: "frank@email.com", courses: ["Data Science", "Machine Learning"] },
  ]);

  const [courses] = useState([
    { id: 1, name: "React Fundamentals", enrolled: 2, capacity: 25, instructor: "John Doe" },
    { id: 2, name: "JavaScript Advanced", enrolled: 2, capacity: 20, instructor: "Jane Smith" },
    { id: 3, name: "Python Basics", enrolled: 2, capacity: 30, instructor: "Mike Johnson" },
    { id: 4, name: "Data Science", enrolled: 2, capacity: 15, instructor: "Sarah Wilson" },
    { id: 5, name: "Node.js", enrolled: 1, capacity: 20, instructor: "Tom Brown" },
    { id: 6, name: "Vue.js", enrolled: 1, capacity: 18, instructor: "Lisa Davis" },
    { id: 7, name: "Machine Learning", enrolled: 1, capacity: 12, instructor: "Alex Chen" },
  ]);

  const totalStudents = students.length;
  const totalCourses = courses.length;
  const totalEnrollments = students.reduce((sum, student) => sum + student.courses.length, 0);
  const averageEnrollmentPerStudent = (totalEnrollments / totalStudents).toFixed(1);

  const StatCard = ({ icon: Icon, title, value, subtitle, gradient }) => (
    <div className={`bg-gradient-to-br ${gradient} p-6 rounded-xl shadow-lg border border-white/20 backdrop-blur-sm`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-indigo-100 text-sm font-medium">{title}</p>
          <p className="text-white text-3xl font-bold mt-2">{value}</p>
          {subtitle && <p className="text-indigo-200 text-xs mt-1">{subtitle}</p>}
        </div>
        <div className="bg-white/20 p-3 rounded-lg">
          <Icon className="w-6 h-6 text-white" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-screen w-screen overflow-y-scroll bg-gradient-to-br from-indigo-50 to-purple-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Admin Dashboard
          </h1>
          <p className="text-gray-600 mt-2">Manage students and track course registrations</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={Users}
            title="Total Students"
            value={totalStudents}
            subtitle="Active learners"
            gradient="from-indigo-500 to-purple-500"
          />
          <StatCard
            icon={BookOpen}
            title="Total Courses"
            value={totalCourses}
            subtitle="Available programs"
            gradient="from-indigo-500 to-purple-500"
          />
          <StatCard
            icon={GraduationCap}
            title="Total Enrollments"
            value={totalEnrollments}
            subtitle="Course registrations"
            gradient="from-indigo-500 to-purple-500"
          />
          <StatCard
            icon={TrendingUp}
            title="Avg per Student"
            value={averageEnrollmentPerStudent}
            subtitle="Courses enrolled"
            gradient="from-indigo-500 to-purple-500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Students Section */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Users className="w-5 h-5" />
                Students Overview
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {students.map((student) => (
                  <div
                    key={student.id}
                    className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">{student.name}</h3>
                      <p className="text-gray-600 text-sm">{student.email}</p>
                      <div className="flex items-center gap-1 mt-2">
                        <Award className="w-4 h-4 text-indigo-500" />
                        <span className="text-sm text-indigo-600 font-medium">
                          {student.courses.length} courses enrolled
                        </span>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {student.courses.length}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Courses Section */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Course Registrations
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-800">{course.name}</h3>
                      <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        {course.enrolled}/{course.capacity}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">Instructor: {course.instructor}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(course.enrolled / course.capacity) * 100}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-gray-500">
                        {course.enrolled} enrolled
                      </span>
                      <span className="text-xs text-gray-500">
                        {((course.enrolled / course.capacity) * 100).toFixed(0)}% capacity
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Student Course Details */}
        <div className="mt-8 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              Student Course Enrollments
            </h2>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Student</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Email</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-700">Enrolled Courses</th>
                    <th className="text-center py-3 px-4 font-semibold text-gray-700">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((student, index) => (
                    <tr
                      key={student.id}
                      className={`border-b border-gray-100 hover:bg-gradient-to-r from-indigo-50 to-purple-50 transition-colors ${
                        index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                      }`}
                    >
                      <td className="py-3 px-4 font-medium text-gray-800">{student.name}</td>
                      <td className="py-3 px-4 text-gray-600">{student.email}</td>
                      <td className="py-3 px-4">
                        <div className="flex flex-wrap gap-1">
                          {student.courses.map((course, courseIndex) => (
                            <span
                              key={courseIndex}
                              className="bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-2 py-1 rounded-full text-xs font-medium"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-2 py-1 rounded-full text-sm font-semibold">
                          {student.courses.length}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;