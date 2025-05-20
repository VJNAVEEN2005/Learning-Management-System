import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Check, PlayCircle, BookOpen, ChevronRight, Loader, Download, FileText } from 'lucide-react';

const CourseView = () => {
  // Sample course data - in a real app this would come from an API or props
  const [course, setCourse] = useState({
    title: "Introduction to Web Development",
    description: "Learn the fundamentals of web development including HTML, CSS, and JavaScript.",
    modules: [
      {
        id: 1,
        title: "Getting Started with HTML",
        lessons: [
          {
            id: 101,
            title: "HTML Basics",
            videoUrl: "/api/placeholder/640/360",
            notes: "HTML (HyperText Markup Language) is the standard markup language for documents designed to be displayed in a web browser. It defines the structure of web content using elements and tags.",
            pdfUrl: "#/sample-pdf.pdf",
            completed: false
          },
          {
            id: 102,
            title: "HTML Forms and Inputs",
            videoUrl: "/api/placeholder/640/360",
            notes: "HTML forms are used to collect user input. Various input types include text fields, checkboxes, radio buttons, submit buttons, and more.",
            pdfUrl: "#/sample-pdf.pdf",
            completed: false
          }
        ]
      },
      {
        id: 2,
        title: "CSS Fundamentals",
        lessons: [
          {
            id: 201,
            title: "CSS Selectors",
            videoUrl: "/api/placeholder/640/360",
            notes: "CSS selectors define which elements you want to style. They can target elements by tag name, class, ID, and more.",
            pdfUrl: "#/sample-pdf.pdf",
            completed: false
          },
          {
            id: 202,
            title: "Box Model",
            videoUrl: "/api/placeholder/640/360",
            notes: "The CSS box model describes the rectangular boxes that are generated for elements in the document tree and laid out according to the visual formatting model.",
            pdfUrl: "#/sample-pdf.pdf",
            completed: false
          }
        ]
      }
    ]
  });

  const [activeModule, setActiveModule] = useState(1);
  const [activeLesson, setActiveLesson] = useState(101);
  const [view, setView] = useState('video'); // 'video', 'notes', or 'resources'
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  // Find current lesson
  const currentModule = course.modules.find(module => module.id === activeModule);
  const currentLesson = currentModule?.lessons.find(lesson => lesson.id === activeLesson);

  // Handle lesson completion
  const handleComplete = () => {
    setCourse(prevCourse => {
      const updatedCourse = { ...prevCourse };
      const moduleIndex = updatedCourse.modules.findIndex(m => m.id === activeModule);
      const lessonIndex = updatedCourse.modules[moduleIndex].lessons.findIndex(l => l.id === activeLesson);
      
      updatedCourse.modules[moduleIndex].lessons[lessonIndex].completed = true;
      return updatedCourse;
    });
  };

  // Toggle module expansion
  const toggleModule = (moduleId) => {
    if (activeModule === moduleId) {
      setActiveModule(null);
    } else {
      setActiveModule(moduleId);
      // Set active lesson to first lesson in module
      const firstLessonId = course.modules.find(m => m.id === moduleId)?.lessons[0]?.id;
      if (firstLessonId) setActiveLesson(firstLessonId);
    }
  };

  // Select a lesson
  const selectLesson = (moduleId, lessonId) => {
    setActiveModule(moduleId);
    setActiveLesson(lessonId);
    
    // Simulate loading content
    setLoading(true);
    setProgress(0);
    
    // Simulate progressive loading with multiple steps
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 25;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setTimeout(() => {
            setLoading(false);
          }, 300);
          return 100;
        }
        return newProgress;
      });
    }, 500);
  };

  // Simulate downloading a PDF
  const handleDownloadPDF = () => {
    // In a real application, this would trigger an actual download
    alert(`Downloading PDF for ${currentLesson.title}`);
  };

  // Calculate overall course progress
  const calculateProgress = () => {
    if (!course || !course.modules) return 0;
    
    let totalLessons = 0;
    let completedLessons = 0;
    
    course.modules.forEach(module => {
      totalLessons += module.lessons.length;
      completedLessons += module.lessons.filter(lesson => lesson.completed).length;
    });
    
    return totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
  };
  
  const courseProgress = calculateProgress();

  return (
    <div className="flex flex-col md:flex-row w-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Sidebar */}
      <div className="w-full md:w-80 bg-white border-r border-gray-200 overflow-y-auto">
        <div className="p-4 bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
          <h1 className="text-xl font-bold">{course.title}</h1>
          <div className="mt-2">
            <div className="w-full bg-indigo-200 rounded-full h-1.5">
              <div 
                className="bg-white h-1.5 rounded-full" 
                style={{ width: `${courseProgress}%` }}
              ></div>
            </div>
            <div className="text-xs text-white mt-1">{courseProgress}% Complete</div>
          </div>
        </div>
        
        <div className="p-2">
          {course.modules.map(module => (
            <div key={module.id} className="mb-2 border border-gray-100 rounded-lg overflow-hidden">
              <button 
                className="w-full flex items-center justify-between cursor-pointer p-3 text-left bg-gray-50 hover:bg-gray-100"
                onClick={() => toggleModule(module.id)}
              >
                <span className="font-medium">{module.title}</span>
                {activeModule === module.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {activeModule === module.id && (
                <div className="bg-white">
                  {module.lessons.map(lesson => (
                    <button
                      key={lesson.id}
                      className={`w-full flex items-center p-3 text-left cursor-pointer border-t border-gray-100 hover:bg-gray-50 ${activeLesson === lesson.id ? 'bg-indigo-50 text-indigo-700' : ''}`}
                      onClick={() => selectLesson(module.id, lesson.id)}
                    >
                      <div className="flex items-center">
                        {lesson.completed ? (
                          <div className="mr-2 rounded-full bg-green-100 p-1">
                            <Check size={16} className="text-green-600" />
                          </div>
                        ) : (
                          <ChevronRight size={16} className="mr-2 text-gray-400" />
                        )}
                        <span>{lesson.title}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Content header */}
        <div className="bg-white border-b border-gray-200 p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold">{currentLesson?.title}</h2>
            <div className="flex space-x-2">
              <button 
                className={`px-4 py-2 rounded-lg flex cursor-pointer items-center ${view === 'video' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700'}`}
                onClick={() => setView('video')}
              >
                <PlayCircle size={18} className="mr-1" />
                Video
              </button>
              <button 
                className={`px-4 py-2 rounded-lg flex cursor-pointer items-center ${view === 'notes' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700'}`}
                onClick={() => setView('notes')}
              >
                <BookOpen size={18} className="mr-1" />
                Notes
              </button>
              <button 
                className={`px-4 py-2 rounded-lg flex cursor-pointer items-center ${view === 'resources' ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-700'}`}
                onClick={() => setView('resources')}
              >
                <FileText size={18} className="mr-1" />
                Resources
              </button>
            </div>
          </div>
        </div>
        
        {/* Content area */}
        <div className="flex-1 p-6 overflow-y-auto">
          {loading ? (
            <div className="flex flex-col items-center justify-center h-full">
              <div className="mb-4">
                <Loader size={40} className="text-indigo-500 animate-spin" />
              </div>
              <div className="w-64 bg-gray-200 rounded-full h-2.5 mb-2">
                <div 
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2.5 rounded-full transition-all duration-300" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-gray-500">Loading lesson content... {progress}%</p>
            </div>
          ) : currentLesson ? (
            <div className="max-w-4xl mx-auto">
              {view === 'video' && (
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="aspect-w-16 aspect-h-9 bg-black">
                    <img 
                      src={currentLesson.videoUrl}
                      alt="Video placeholder"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{currentLesson.title}</h3>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">
                        {currentModule?.title}
                      </div>
                      <button
                        className={`px-4 py-2 rounded-lg cursor-pointer flex items-center ${currentLesson.completed ? 'bg-green-500 text-white' : 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white'}`}
                        onClick={handleComplete}
                        disabled={currentLesson.completed}
                      >
                        {currentLesson.completed ? (
                          <>
                            <Check size={18} className="mr-1" />
                            Completed
                          </>
                        ) : (
                          'Mark as Complete'
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              {view === 'notes' && (
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold mb-4">{currentLesson.title} - Notes</h3>
                  <div className="prose max-w-none">
                    <p>{currentLesson.notes}</p>
                  </div>
                  
                </div>
              )}
              
              {view === 'resources' && (
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-semibold mb-4">{currentLesson.title} - Resources</h3>
                  
                  <div className="border border-gray-200 rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-indigo-100 p-3 rounded-lg">
                          <FileText size={24} className="text-indigo-600" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium">{currentLesson.title} - Lecture Notes</h4>
                          <p className="text-sm text-gray-500">PDF Document • 2.4 MB</p>
                        </div>
                      </div>
                      <button 
                        className="flex items-center cursor-pointer text-indigo-600 hover:text-indigo-800"
                        onClick={handleDownloadPDF}
                      >
                        <Download size={18} className="mr-1" />
                        Download
                      </button>
                    </div>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="bg-indigo-100 p-3 rounded-lg">
                          <FileText size={24} className="text-indigo-600" />
                        </div>
                        <div className="ml-3">
                          <h4 className="font-medium">Supplementary Reading</h4>
                          <p className="text-sm text-gray-500">PDF Document • 1.8 MB</p>
                        </div>
                      </div>
                      <button 
                        className="flex items-center cursor-pointer text-indigo-600 hover:text-indigo-800"
                        onClick={handleDownloadPDF}
                      >
                        <Download size={18} className="mr-1" />
                        Download
                      </button>
                    </div>
                  </div>
                  
                 
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Select a lesson to begin</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseView;