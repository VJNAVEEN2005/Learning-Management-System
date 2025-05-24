import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Save, ChevronDown, ChevronUp, FileText, Video, BookOpen, Check, Layout, Edit3, Eye, Search, Filter, Calendar, Users, Clock } from 'lucide-react';

const AdminCourseView = () => {
  // Sample courses data - in a real app, this would come from an API
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Introduction to React",
      description: "Learn the fundamentals of React development",
      createdAt: "2024-01-15",
      students: 45,
      duration: "8 hours",
      status: "published",
      modules: [
        {
          id: 1,
          title: "Getting Started with React",
          lessons: [
            {
              id: 101,
              title: "What is React?",
              videoUrl: "/api/placeholder/640/360",
              notes: "React is a JavaScript library for building user interfaces...",
              pdfUrl: "#/react-intro.pdf",
              completed: false
            },
            {
              id: 102,
              title: "Setting up the Development Environment",
              videoUrl: "/api/placeholder/640/360",
              notes: "Learn how to set up your development environment for React...",
              pdfUrl: "",
              completed: false
            }
          ]
        },
        {
          id: 2,
          title: "Components and JSX",
          lessons: [
            {
              id: 201,
              title: "Understanding Components",
              videoUrl: "/api/placeholder/640/360",
              notes: "Components are the building blocks of React applications...",
              pdfUrl: "#/components.pdf",
              completed: false
            }
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Advanced JavaScript",
      description: "Master advanced JavaScript concepts and patterns",
      createdAt: "2024-02-20",
      students: 32,
      duration: "12 hours",
      status: "draft",
      modules: [
        {
          id: 1,
          title: "Async Programming",
          lessons: [
            {
              id: 101,
              title: "Promises and Async/Await",
              videoUrl: "/api/placeholder/640/360",
              notes: "Understanding asynchronous programming in JavaScript...",
              pdfUrl: "",
              completed: false
            }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Node.js Backend Development",
      description: "Build scalable backend applications with Node.js",
      createdAt: "2024-03-10",
      students: 28,
      duration: "15 hours",
      status: "published",
      modules: [
        {
          id: 1,
          title: "Express.js Fundamentals",
          lessons: [
            {
              id: 101,
              title: "Setting up Express Server",
              videoUrl: "/api/placeholder/640/360",
              notes: "Learn how to create and configure an Express.js server...",
              pdfUrl: "#/express-setup.pdf",
              completed: false
            }
          ]
        }
      ]
    }
  ]);

  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [expandedModules, setExpandedModules] = useState([]);
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Filter courses based on search and status
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || course.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  // Handle course selection
  const selectCourse = (course) => {
    setSelectedCourse(course);
    setIsEditing(false);
    setExpandedModules([]);
    setSelectedModule(null);
    setSelectedLesson(null);
  };

  // Handle edit mode toggle
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
    if (selectedCourse && selectedCourse.modules.length > 0) {
      setSelectedModule(selectedCourse.modules[0].id);
      if (selectedCourse.modules[0].lessons.length > 0) {
        setSelectedLesson(selectedCourse.modules[0].lessons[0].id);
      }
    }
  };

  // Handle course deletion
  const deleteCourse = (courseId) => {
    if (window.confirm("Are you sure you want to delete this course? This action cannot be undone.")) {
      setCourses(prevCourses => prevCourses.filter(course => course.id !== courseId));
      if (selectedCourse && selectedCourse.id === courseId) {
        setSelectedCourse(null);
        setIsEditing(false);
      }
    }
  };

  // Handle course changes (similar to AdminAddCourse)
  const handleCourseChange = (e) => {
    setSelectedCourse({
      ...selectedCourse,
      [e.target.name]: e.target.value
    });
  };

  // Handle module changes
  const handleModuleChange = (moduleId, e) => {
    setSelectedCourse(prevCourse => {
      const updatedModules = prevCourse.modules.map(module => {
        if (module.id === moduleId) {
          return { ...module, title: e.target.value };
        }
        return module;
      });
      return { ...prevCourse, modules: updatedModules };
    });
  };

  // Handle lesson changes
  const handleLessonChange = (moduleId, lessonId, field, value) => {
    setSelectedCourse(prevCourse => {
      const updatedModules = prevCourse.modules.map(module => {
        if (module.id === moduleId) {
          const updatedLessons = module.lessons.map(lesson => {
            if (lesson.id === lessonId) {
              return { ...lesson, [field]: value };
            }
            return lesson;
          });
          return { ...module, lessons: updatedLessons };
        }
        return module;
      });
      return { ...prevCourse, modules: updatedModules };
    });
  };

  // Add module
  const addModule = () => {
    const newModuleId = Math.max(...selectedCourse.modules.map(m => m.id), 0) + 1;
    const newLessonId = newModuleId * 100 + 1;
    const newModule = {
      id: newModuleId,
      title: "",
      lessons: [
        {
          id: newLessonId,
          title: "",
          videoUrl: "",
          notes: "",
          pdfUrl: "",
          completed: false
        }
      ]
    };
    
    setSelectedCourse(prevCourse => ({
      ...prevCourse,
      modules: [...prevCourse.modules, newModule]
    }));
    
    setExpandedModules(prev => [...prev, newModuleId]);
    setSelectedModule(newModuleId);
    setSelectedLesson(newLessonId);
  };

  // Remove module
  const removeModule = (moduleId) => {
    setSelectedCourse(prevCourse => {
      const filteredModules = prevCourse.modules.filter(module => module.id !== moduleId);
      
      if (selectedModule === moduleId && filteredModules.length > 0) {
        setSelectedModule(filteredModules[0].id);
        if (filteredModules[0].lessons.length > 0) {
          setSelectedLesson(filteredModules[0].lessons[0].id);
        } else {
          setSelectedLesson(null);
        }
      }
      
      return {
        ...prevCourse,
        modules: filteredModules
      };
    });
    
    setExpandedModules(prev => prev.filter(id => id !== moduleId));
  };

  // Add lesson
  const addLesson = (moduleId) => {
    setSelectedCourse(prevCourse => {
      const updatedModules = prevCourse.modules.map(module => {
        if (module.id === moduleId) {
          const newLessonId = module.lessons.length > 0 
            ? Math.max(...module.lessons.map(l => l.id)) + 1 
            : moduleId * 100 + 1;
          
          const newLesson = {
            id: newLessonId,
            title: "",
            videoUrl: "",
            notes: "",
            pdfUrl: "",
            completed: false
          };
          
          setSelectedLesson(newLessonId);
          
          return {
            ...module,
            lessons: [...module.lessons, newLesson]
          };
        }
        return module;
      });
      
      return {
        ...prevCourse,
        modules: updatedModules
      };
    });
  };

  // Remove lesson
  const removeLesson = (moduleId, lessonId) => {
    setSelectedCourse(prevCourse => {
      const updatedModules = prevCourse.modules.map(module => {
        if (module.id === moduleId) {
          const updatedLessons = module.lessons.filter(lesson => lesson.id !== lessonId);
          
          if (selectedLesson === lessonId && updatedLessons.length > 0) {
            setSelectedLesson(updatedLessons[0].id);
          } else if (updatedLessons.length === 0) {
            setSelectedLesson(null);
          }
          
          return { ...module, lessons: updatedLessons };
        }
        return module;
      });
      return { ...prevCourse, modules: updatedModules };
    });
  };

  // Toggle module expansion
  const toggleModule = (moduleId) => {
    setExpandedModules(prev => {
      if (prev.includes(moduleId)) {
        return prev.filter(id => id !== moduleId);
      } else {
        return [...prev, moduleId];
      }
    });
  };

  // Select module and lesson
  const selectModule = (moduleId) => {
    setSelectedModule(moduleId);
    const module = selectedCourse.modules.find(m => m.id === moduleId);
    if (module && module.lessons.length > 0) {
      setSelectedLesson(module.lessons[0].id);
    } else {
      setSelectedLesson(null);
    }
  };

  const selectLesson = (moduleId, lessonId) => {
    setSelectedModule(moduleId);
    setSelectedLesson(lessonId);
  };

  // Handle file uploads
  const handleFileUpload = (moduleId, lessonId, field, e) => {
    const file = e.target.files[0];
    if (file) {
      const url = field === 'videoUrl' ? "/api/placeholder/640/360" : "#/sample-pdf.pdf";
      handleLessonChange(moduleId, lessonId, field, url);
      e.target.value = '';
    }
  };

  // Save course changes
  const saveCourse = () => {
    setSaving(true);
    
    setTimeout(() => {
      // Update the course in the courses array
      setCourses(prevCourses => 
        prevCourses.map(course => 
          course.id === selectedCourse.id ? selectedCourse : course
        )
      );
      
      setSaving(false);
      setSaveSuccess(true);
      setIsEditing(false);
      
      setTimeout(() => {
        setSaveSuccess(false);
      }, 3000);
      
      console.log("Course updated:", selectedCourse);
    }, 1500);
  };

  // Get current lesson
  const getCurrentLesson = () => {
    if (!selectedCourse || !selectedModule || !selectedLesson) return null;
    const module = selectedCourse.modules.find(m => m.id === selectedModule);
    if (module) {
      return module.lessons.find(l => l.id === selectedLesson);
    }
    return null;
  };

  const selectedLessonData = getCurrentLesson();

  return (
    <div className="flex flex-col w-screen h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Top Header Bar */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 flex justify-between items-center shadow-md">
        <div>
          <h1 className="text-2xl font-bold">Course Management</h1>
          <p className="text-indigo-100 text-sm">View and manage your courses</p>
        </div>
        
        {isEditing && selectedCourse && (
          <button 
            className="px-6 py-2 bg-white text-indigo-700 rounded-lg flex items-center shadow hover:bg-indigo-50 transition-colors"
            onClick={saveCourse}
            disabled={saving}
          >
            {saving ? (
              <>
                <div className="animate-spin mr-2 h-4 w-4 border-2 border-indigo-600 border-t-transparent rounded-full"></div>
                Saving...
              </>
            ) : (
              <>
                <Save size={18} className="mr-2" />
                Save Changes
              </>
            )}
          </button>
        )}
      </div>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar - Course List */}
        <div className="w-1/3 bg-white border-r border-gray-200 flex flex-col overflow-hidden">
          {/* Search and Filters */}
          <div className="p-4 border-b border-gray-200">
            <div className="mb-4">
              <div className="relative">
                <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Search courses..."
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Filter size={18} className="text-gray-500" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="all">All Status</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>
          </div>
          
          {/* Course List */}
          <div className="flex-1 overflow-y-auto">
            {filteredCourses.map((course) => (
              <div 
                key={course.id}
                className={`p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 ${selectedCourse?.id === course.id ? 'bg-indigo-50 border-indigo-200' : ''}`}
                onClick={() => selectCourse(course)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-800 truncate">{course.title}</h3>
                  <div className="flex space-x-1 ml-2">
                    <button
                      className="p-1 text-gray-500 hover:text-indigo-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        selectCourse(course);
                        toggleEditMode();
                      }}
                    >
                      <Edit3 size={16} />
                    </button>
                    <button
                      className="p-1 text-gray-500 hover:text-red-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteCourse(course.id);
                      }}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
                
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{course.description}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <Users size={12} className="mr-1" />
                      {course.students}
                    </span>
                    <span className="flex items-center">
                      <Clock size={12} className="mr-1" />
                      {course.duration}
                    </span>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${course.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {course.status}
                  </span>
                </div>
                
                <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
                  <span className="flex items-center">
                    <Calendar size={12} className="mr-1" />
                    Created: {new Date(course.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
            
            {filteredCourses.length === 0 && (
              <div className="p-8 text-center">
                <BookOpen size={48} className="mx-auto text-gray-300 mb-4" />
                <p className="text-gray-500">No courses found</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Right Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {selectedCourse ? (
            <>
              {/* Course Structure */}
              {isEditing && (
                <div className="w-1/3 bg-white border-r border-gray-200 flex flex-col overflow-hidden">
                  {/* Course Details */}
                  <div className="p-4 border-b border-gray-200">
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Course Title</label>
                      <input
                        type="text"
                        name="title"
                        value={selectedCourse.title}
                        onChange={handleCourseChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter course title"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Course Description</label>
                      <textarea
                        name="description"
                        value={selectedCourse.description}
                        onChange={handleCourseChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        placeholder="Enter course description"
                        rows="2"
                      ></textarea>
                    </div>
                  </div>
                  
                  {/* Module Navigation */}
                  <div className="flex-1 overflow-y-auto p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="font-semibold text-gray-800">Modules</h2>
                      <button 
                        className="p-1 bg-indigo-100 text-indigo-700 rounded-md flex items-center"
                        onClick={addModule}
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    
                    <div className="space-y-2">
                      {selectedCourse.modules.map((module) => (
                        <div key={module.id} className={`border rounded-lg overflow-hidden ${selectedModule === module.id ? 'border-indigo-500 shadow-sm' : 'border-gray-200'}`}>
                          <div 
                            className={`p-3 flex items-center justify-between cursor-pointer ${selectedModule === module.id ? 'bg-indigo-50' : 'bg-white'}`}
                            onClick={() => selectModule(module.id)}
                          >
                            <div className="flex items-center flex-1 mr-2">
                              <input
                                type="text"
                                value={module.title}
                                onChange={(e) => handleModuleChange(module.id, e)}
                                className={`w-full border-none bg-transparent p-0 focus:outline-none focus:ring-0 ${module.title ? '' : 'text-gray-400'}`}
                                placeholder="Module Title"
                                onClick={(e) => e.stopPropagation()}
                              />
                            </div>
                            <div className="flex space-x-1">
                              <button 
                                className="p-1 text-gray-500 hover:text-indigo-600"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleModule(module.id);
                                }}
                              >
                                {expandedModules.includes(module.id) ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                              </button>
                              <button 
                                className="p-1 text-gray-500 hover:text-red-600"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  removeModule(module.id);
                                }}
                              >
                                <Trash2 size={16} />
                              </button>
                            </div>
                          </div>
                          
                          {expandedModules.includes(module.id) && (
                            <div className="pl-3 pr-1 py-2 border-t border-gray-100 bg-gray-50">
                              <div className="space-y-1">
                                {module.lessons.map((lesson) => (
                                  <div 
                                    key={lesson.id} 
                                    className={`px-3 py-2 text-sm rounded-md flex items-center justify-between cursor-pointer ${selectedLesson === lesson.id ? 'bg-indigo-100 text-indigo-800' : 'hover:bg-gray-100'}`}
                                    onClick={() => selectLesson(module.id, lesson.id)}
                                  >
                                    <div className="flex-1 truncate">
                                      {lesson.title || "Untitled Lesson"}
                                    </div>
                                    <button 
                                      className="p-1 text-gray-400 hover:text-red-600 opacity-50 hover:opacity-100"
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        removeLesson(module.id, lesson.id);
                                      }}
                                    >
                                      <Trash2 size={14} />
                                    </button>
                                  </div>
                                ))}
                                
                                <button 
                                  className="w-full py-1 text-xs text-gray-600 border border-dashed border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-100"
                                  onClick={() => addLesson(module.id)}
                                >
                                  <Plus size={14} className="mr-1" />
                                  Add Lesson
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
              
              {/* Course Content */}
              <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
                {!isEditing ? (
                  // View Mode
                  <div className="max-w-4xl mx-auto">
                    {/* Course Header */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h1 className="text-3xl font-bold text-gray-800 mb-2">{selectedCourse.title}</h1>
                          <p className="text-gray-600 mb-4">{selectedCourse.description}</p>
                          
                          <div className="flex items-center space-x-6 text-sm text-gray-500">
                            <span className="flex items-center">
                              <Users size={16} className="mr-1" />
                              {selectedCourse.students} students
                            </span>
                            <span className="flex items-center">
                              <Clock size={16} className="mr-1" />
                              {selectedCourse.duration}
                            </span>
                            <span className="flex items-center">
                              <Calendar size={16} className="mr-1" />
                              Created: {new Date(selectedCourse.createdAt).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex space-x-2">
                          <button
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg flex items-center hover:bg-indigo-700"
                            onClick={toggleEditMode}
                          >
                            <Edit3 size={18} className="mr-2" />
                            Edit Course
                          </button>
                          <span className={`px-3 py-2 rounded-lg text-sm ${selectedCourse.status === 'published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                            {selectedCourse.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Course Modules */}
                    <div className="space-y-4">
                      {selectedCourse.modules.map((module, moduleIndex) => (
                        <div key={module.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                          <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                            <h3 className="text-lg font-semibold text-gray-800">
                              Module {moduleIndex + 1}: {module.title}
                            </h3>
                          </div>
                          
                          <div className="p-6">
                            <div className="space-y-4">
                              {module.lessons.map((lesson, lessonIndex) => (
                                <div key={lesson.id} className="border border-gray-200 rounded-lg p-4">
                                  <h4 className="font-medium text-gray-800 mb-2">
                                    Lesson {lessonIndex + 1}: {lesson.title}
                                  </h4>
                                  
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {lesson.videoUrl && (
                                      <div className="space-y-2">
                                        <div className="flex items-center text-sm text-gray-600">
                                          <Video size={16} className="mr-1" />
                                          Video Content
                                        </div>
                                        <div className="bg-black rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                                          <img src="/api/placeholder/640/360" alt="Video placeholder" className="max-w-full" />
                                        </div>
                                      </div>
                                    )}
                                    
                                    {lesson.notes && (
                                      <div className="space-y-2">
                                        <div className="flex items-center text-sm text-gray-600">
                                          <BookOpen size={16} className="mr-1" />
                                          Lesson Notes
                                        </div>
                                        <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-700 max-h-32 overflow-y-auto">
                                          {lesson.notes}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                  
                                  {lesson.pdfUrl && (
                                    <div className="mt-3 pt-3 border-t border-gray-200">
                                      <div className="flex items-center text-sm text-gray-600">
                                        <FileText size={16} className="mr-1" />
                                        <span>PDF Resource available</span>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Edit Mode - Lesson Editor
                  selectedLessonData ? (
                    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200">
                      <div className="p-6 border-b border-gray-200">
                        <input
                          type="text"
                          value={selectedLessonData.title}
                          onChange={(e) => handleLessonChange(selectedModule, selectedLesson, 'title', e.target.value)}
                          className="w-full text-xl font-medium border-none p-0 mb-4 focus:outline-none focus:ring-0"
                          placeholder="Lesson Title"
                        />
                        
                        <div className="grid grid-cols-2 gap-6">
                          <div className="space-y-6">
                            {/* Video upload */}
                            <div className="border border-gray-200 rounded-lg p-4">
                              <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                                <Video size={18} className="mr-2" />
                                Video Content
                              </label>
                              
                              {selectedLessonData.videoUrl ? (
                                <div className="space-y-3">
                                  <div className="bg-black rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                                    <img src="/api/placeholder/640/360" alt="Video placeholder" className="max-w-full" />
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-green-600 flex items-center text-sm">
                                      <Check size={16} className="mr-1" />
                                      Video uploaded
                                    </span>
                                    <button 
                                      className="text-sm text-red-600 hover:text-red-800"
                                      onClick={() => handleLessonChange(selectedModule, selectedLesson, 'videoUrl', '')}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              ) : (
                                <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 flex flex-col items-center">
                                  <Layout size={40} className="text-gray-300 mb-2" />
                                  <p className="text-gray-500 text-sm mb-4 text-center">Upload a video file for this lesson</p>
                                  <input
                                    type="file"
                                    accept="video/*"
                                    onChange={(e) => handleFileUpload(selectedModule, selectedLesson, 'videoUrl', e)}
                                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                                  />
                                </div>
                              )}
                            </div>
                            
                            {/* PDF Resources */}
                            <div className="border border-gray-200 rounded-lg p-4">
                              <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                                <FileText size={18} className="mr-2" />
                                PDF Resources
                              </label>
                              
                              {selectedLessonData.pdfUrl ? (
                                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                  <span className="text-green-600 flex items-center text-sm">
                                    <Check size={16} className="mr-1" />
                                    PDF document uploaded
                                  </span>
                                  <button 
                                    className="text-sm text-red-600 hover:text-red-800"
                                    onClick={() => handleLessonChange(selectedModule, selectedLesson, 'pdfUrl', '')}
                                  >
                                    Remove
                                  </button>
                                </div>
                              ) : (
                                <div className="border-2 border-dashed border-gray-200 rounded-lg p-4 flex items-center justify-center">
                                  <input
                                    type="file"
                                    accept=".pdf"
                                    onChange={(e) => handleFileUpload(selectedModule, selectedLesson, 'pdfUrl', e)}
                                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
                                  />
                                </div>
                              )}
                            </div>
                          </div>
                          
                          {/* Right Column - Notes */}
                          <div className="border border-gray-200 rounded-lg p-4 min-h-96">
                            <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                              <BookOpen size={18} className="mr-2" />
                              Lesson Notes
                            </label>
                            <textarea
                              value={selectedLessonData.notes}
                              onChange={(e) => handleLessonChange(selectedModule, selectedLesson, 'notes', e.target.value)}
                              className="w-full h-80 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              placeholder="Enter lesson notes, summaries, and key points here..."
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="max-w-md mx-auto mt-12 text-center">
                      <Layout size={64} className="mx-auto text-gray-300 mb-4" />
                      <h3 className="text-xl font-medium text-gray-700 mb-2">No Lesson Selected</h3>
                      <p className="text-gray-500 mb-6">Select a lesson from the sidebar to edit</p>
                      <button
                        className="px-4 py-2 bg-indigo-600 text-white rounded-lg inline-flex items-center"
                        onClick={() => {
                          if (selectedCourse.modules.length === 0) {
                            addModule();
                          } else {
                            selectModule(selectedCourse.modules[0].id);
                          }
                        }}
                      >
                        <Plus size={18} className="mr-1" />
                        {selectedCourse.modules.length === 0 ? "Create First Module" : "Select a Lesson"}
                      </button>
                    </div>
                  )
                )}
              </div>
            </>
          ) : (
            // No course selected
            <div className="flex-1 flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <BookOpen size={64} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-medium text-gray-700 mb-2">No Course Selected</h3>
                <p className="text-gray-500 mb-6">Select a course from the list to view or edit it</p>
                
                {filteredCourses.length === 0 ? (
                  <div className="mt-8">
                    <p className="text-gray-400 mb-4">No courses available</p>
                  </div>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Success message toast */}
      {saveSuccess && (
        <div className="fixed bottom-6 right-6 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-lg flex items-center">
          <Check size={20} className="mr-2" />
          Course updated successfully!
        </div>
      )}
    </div>
  );
};

export default AdminCourseView;