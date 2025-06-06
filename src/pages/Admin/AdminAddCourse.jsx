import React, { useEffect, useState } from "react";
import {
  Plus,
  Trash2,
  Save,
  ChevronDown,
  ChevronUp,
  FileText,
  Video,
  BookOpen,
  Check,
  Layout,
  ExternalLink,
  Play,
} from "lucide-react";
import axios from "axios";
import api from "../../api/api";

const AdminAddCourse = () => {
  const [course, setCourse] = useState({
    title: "",
    description: "",
    thumbnailUrl: "",
    price: 0,
    instructor: "Admin",
    isPublished: false,
    modules: [
      {
        id: 1,
        title: "",
        lessons: [
          {
            id: 101,
            title: "",
            videoUrl: "",
            notes: "",
            pdfUrl: "",
            completed: false,
          },
        ],
      },
    ],
  });

  const [expandedModules, setExpandedModules] = useState([1]);
  const [expandedLessons, setExpandedLessons] = useState([]);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [selectedModule, setSelectedModule] = useState(1);
  const [selectedLesson, setSelectedLesson] = useState(101);
  const [videoPreview, setVideoPreview] = useState(null);

  useEffect(() => {
    console.log("Course data initialized:", course);
  }, [course]);

  // Helper to get display thumbnail for a lesson
  const getDisplayThumbnail = (lesson) => {
    // Prefer custom thumbnail if valid
    if (lesson.thumbnailUrl && isValidImageUrl(lesson.thumbnailUrl)) {
      return lesson.thumbnailUrl;
    }

    // Fall back to YouTube thumbnail if available
    if (lesson.videoUrl && isValidYouTubeUrl(lesson.videoUrl)) {
      return getYouTubeThumbnail(lesson.videoUrl);
    }

    return null;
  };

  // Extract YouTube video ID from URL
  const getYouTubeVideoId = (url) => {
    if (!url) return null;
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  // Generate YouTube embed URL
  const getYouTubeEmbedUrl = (url) => {
    const videoId = getYouTubeVideoId(url);
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  // Generate YouTube thumbnail URL
  const getYouTubeThumbnail = (url) => {
    const videoId = getYouTubeVideoId(url);
    return videoId
      ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
      : null;
  };

  // Validate YouTube URL
  const isValidYouTubeUrl = (url) => {
    return getYouTubeVideoId(url) !== null;
  };

  // Convert Google Drive share link to direct view link
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

  // Validate image URL
  const isValidImageUrl = (url) => {
    if (!url) return false;
    return (
      /\.(jpg|jpeg|png|gif|webp|svg)(\?.*)?$/i.test(url) ||
      url.includes("imgur.com") ||
      url.includes("unsplash.com") ||
      url.includes("pexels.com") ||
      url.includes("drive.google.com")
    );
  };

  // Validate Google Drive URL
  const isValidDriveUrl = (url) => {
    return url.includes("drive.google.com") || url.includes("docs.google.com");
  };

  // Handle course field changes
  const handleCourseChange = (e) => {
    const { name, value, type, checked } = e.target;

    setCourse({
      ...course,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // Handle module title changes
  const handleModuleChange = (moduleId, e) => {
    setCourse((prevCourse) => {
      const updatedModules = prevCourse.modules.map((module) => {
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
    setCourse((prevCourse) => {
      const updatedModules = prevCourse.modules.map((module) => {
        if (module.id === moduleId) {
          const updatedLessons = module.lessons.map((lesson) => {
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

    // Update video preview if changing video URL
    if (field === "videoUrl" && lessonId === selectedLesson) {
      setVideoPreview(value);
    }
  };

  // Add a new module
  const addModule = () => {
    const newModuleId = Math.max(...course.modules.map((m) => m.id), 0) + 1;
    const newLessonId = newModuleId * 100 + 1;
    const newModule = {
      id: newModuleId,
      title: "",
      lessons: [
        {
          id: newLessonId,
          title: "",
          videoUrl: "",
          thumbnailUrl: "",
          notes: "",
          pdfUrl: "",
          completed: false,
        },
      ],
    };

    setCourse((prevCourse) => ({
      ...prevCourse,
      modules: [...prevCourse.modules, newModule],
    }));

    setExpandedModules((prev) => [...prev, newModuleId]);
    setSelectedModule(newModuleId);
    setSelectedLesson(newLessonId);
  };

  // Remove a module
  const removeModule = (moduleId) => {
    setCourse((prevCourse) => {
      const filteredModules = prevCourse.modules.filter(
        (module) => module.id !== moduleId
      );

      // If we're removing the currently selected module, select another one
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
        modules: filteredModules,
      };
    });

    setExpandedModules((prev) => prev.filter((id) => id !== moduleId));
  };

  // Add a new lesson to a module
  const addLesson = (moduleId) => {
    setCourse((prevCourse) => {
      const updatedModules = prevCourse.modules.map((module) => {
        if (module.id === moduleId) {
          const newLessonId =
            module.lessons.length > 0
              ? Math.max(...module.lessons.map((l) => l.id)) + 1
              : moduleId * 100 + 1;

          const newLesson = {
            id: newLessonId,
            title: "",
            videoUrl: "",
            notes: "",
            pdfUrl: "",
            completed: false,
          };

          setSelectedLesson(newLessonId);

          return {
            ...module,
            lessons: [...module.lessons, newLesson],
          };
        }
        return module;
      });

      return {
        ...prevCourse,
        modules: updatedModules,
      };
    });
  };

  // Remove a lesson
  const removeLesson = (moduleId, lessonId) => {
    setCourse((prevCourse) => {
      const updatedModules = prevCourse.modules.map((module) => {
        if (module.id === moduleId) {
          const updatedLessons = module.lessons.filter(
            (lesson) => lesson.id !== lessonId
          );

          // If we're removing the currently selected lesson, select another one
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

    setExpandedLessons((prev) => prev.filter((id) => id !== lessonId));
  };

  // Toggle module expansion
  const toggleModule = (moduleId) => {
    setExpandedModules((prev) => {
      if (prev.includes(moduleId)) {
        return prev.filter((id) => id !== moduleId);
      } else {
        return [...prev, moduleId];
      }
    });
  };

  // Select a module and its first lesson
  const selectModule = (moduleId) => {
    setSelectedModule(moduleId);

    // Find the module
    const module = course.modules.find((m) => m.id === moduleId);

    // If the module has lessons, select the first one
    if (module && module.lessons.length > 0) {
      setSelectedLesson(module.lessons[0].id);
      setVideoPreview(module.lessons[0].videoUrl);
    } else {
      setSelectedLesson(null);
      setVideoPreview(null);
    }
  };

  // Select a lesson
  const selectLesson = (moduleId, lessonId) => {
    setSelectedModule(moduleId);
    setSelectedLesson(lessonId);

    // Update video preview
    const module = course.modules.find((m) => m.id === moduleId);
    if (module) {
      const lesson = module.lessons.find((l) => l.id === lessonId);
      if (lesson) {
        setVideoPreview(lesson.videoUrl);
      }
    }
  };

  // Save the course
  const saveCourse = async () => {
    setSaving(true);

    try {
      // Prepare course data
      const courseData = {
        title: course.title,
        description: course.description,
        thumbnailUrl: course.thumbnailUrl,
        price: course.price,
        instructor: course.instructor,
        isPublished: course.isPublished,
        modules: course.modules,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };

      // In a real app, you would send this to your backend
      console.log("Saving course:", courseData);

      // Simulate API call
      //new Promise((resolve) => setTimeout(resolve, 1000));
      await axios
        .post(`${api.current}api/courses/`, courseData)
        .then((response) => {
          console.log("Course saved successfully:", response.data);
          setSaveSuccess(true);
          console.log("Course saved successfully");

          // Reset success message after 3 seconds
          setTimeout(() => setSaveSuccess(false), 3000);
        })
        .catch((error) => {
          console.error("Error saving course:", error);
        });
    } catch (error) {
      console.error("Error saving course:", error);
    } finally {
      setSaving(false);
    }
  };

  // Get the currently selected lesson
  const getCurrentLesson = () => {
    const module = course.modules.find((m) => m.id === selectedModule);
    if (module) {
      return module.lessons.find((l) => l.id === selectedLesson);
    }
    return null;
  };

  const selectedLessonData = getCurrentLesson();

  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Top Header Bar */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 flex justify-between items-center shadow-md">
        <div>
          <h1 className="text-2xl font-bold">Course Creator</h1>
          <p className="text-indigo-100 text-sm">
            Design curriculum for online learning
          </p>
        </div>

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
              Save Course
            </>
          )}
        </button>
      </div>

      {/* Main content area */}
      <div className="flex flex-1 h-full overflow-y-scroll">
        {/* Left Sidebar - Course Structure */}
        <div className="w-1/4 bg-white border-r  h-full overflow-y-scroll border-gray-200 flex flex-col ">
          {/* Course Details */}
          <div className="p-4 border-b border-gray-200">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Course Title
              </label>
              <input
                type="text"
                name="title"
                value={course.title}
                onChange={handleCourseChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter course title"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Course Description
              </label>
              <textarea
                name="description"
                value={course.description}
                onChange={handleCourseChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter course description"
                rows="2"
              ></textarea>
            </div>

            {/* Instructor Name */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Instructor Name
              </label>
              <input
                type="text"
                name="instructor"
                value={course.instructor}
                onChange={handleCourseChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter instructor name"
              />
            </div>

            {/* NEW: Price Field */}
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Course Price (INR)
              </label>
              <input
                type="number"
                name="price"
                value={course.price}
                onChange={handleCourseChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="0.00"
                min="0"
                step="0.01"
              />
            </div>

            {/* NEW: Publish Toggle */}
            <div className="mt-4 flex items-center">
              <input
                type="checkbox"
                id="isPublished"
                name="isPublished"
                checked={course.isPublished}
                onChange={handleCourseChange}
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="isPublished"
                className="ml-2 block text-sm text-gray-900"
              >
                Publish this course
              </label>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Course Thumbnail (Google Drive)
              </label>
              <input
                type="url"
                name="thumbnailUrl"
                value={course.thumbnailUrl}
                onChange={handleCourseChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="https://example.com/image.jpg"
              />

              {course.thumbnailUrl && (
                <div className="mt-3">
                  {isValidDriveUrl(course.thumbnailUrl) ? (
                    <div className="space-y-2">
                      <div className="bg-gray-100 rounded-lg overflow-hidden aspect-video flex items-center justify-center">
                        <iframe
                          src={convertDriveLink(course.thumbnailUrl)}
                          className="w-full h-full"
                          frameBorder="0"
                          title="PDF preview"
                        ></iframe>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-green-600 flex items-center text-sm">
                          <Check size={16} className="mr-1" />
                          Valid image URL
                        </span>
                        <a
                          href={course.thumbnailUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center"
                        >
                          <ExternalLink size={14} className="mr-1" />
                          Open image
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                      <span className="text-red-600 text-sm">
                        Please enter a valid image URL
                      </span>
                    </div>
                  )}
                </div>
              )}

              <div className="text-xs text-gray-500 mt-1">
                <p>
                  <strong>Tip:</strong> This will be the main thumbnail for the
                  entire course.
                </p>
                <p>
                  Share your image on Google Drive and paste the link here. Make
                  sure the file is set to "Anyone with the link can view"
                </p>
              </div>
            </div>
          </div>

          {/* Module Navigation */}
          <div className="flex-1 p-4">
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
              {course.modules.map((module) => (
                <div
                  key={module.id}
                  className={`border rounded-lg overflow-hidden ${
                    selectedModule === module.id
                      ? "border-indigo-500 shadow-sm"
                      : "border-gray-200"
                  }`}
                >
                  {/* Module header */}
                  <div
                    className={`p-3 flex items-center justify-between cursor-pointer ${
                      selectedModule === module.id ? "bg-indigo-50" : "bg-white"
                    }`}
                    onClick={() => selectModule(module.id)}
                  >
                    <div className="flex items-center flex-1 mr-2">
                      <input
                        type="text"
                        value={module.title}
                        onChange={(e) => handleModuleChange(module.id, e)}
                        className={`w-full border-none bg-transparent p-0 focus:outline-none focus:ring-0 ${
                          module.title ? "" : "text-gray-400"
                        }`}
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
                        {expandedModules.includes(module.id) ? (
                          <ChevronUp size={16} />
                        ) : (
                          <ChevronDown size={16} />
                        )}
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

                  {/* Module lessons */}
                  {expandedModules.includes(module.id) && (
                    <div className="pl-3 pr-1 py-2 border-t border-gray-100 bg-gray-50">
                      <div className="space-y-1">
                        {module.lessons.map((lesson) => (
                          <div
                            key={lesson.id}
                            className={`px-3 py-2 text-sm rounded-md flex items-center justify-between cursor-pointer ${
                              selectedLesson === lesson.id
                                ? "bg-indigo-100 text-indigo-800"
                                : "hover:bg-gray-100"
                            }`}
                            onClick={() => selectLesson(module.id, lesson.id)}
                          >
                            <div className="flex items-center flex-1 truncate">
                              <div className="flex items-center mr-2">
                                {getDisplayThumbnail(lesson) && (
                                  <img
                                    src={getDisplayThumbnail(lesson)}
                                    alt="Lesson thumbnail"
                                    className="w-6 h-4 object-cover rounded mr-1"
                                    onError={(e) => {
                                      e.target.style.display = "none";
                                    }}
                                  />
                                )}
                                {lesson.videoUrl &&
                                  isValidYouTubeUrl(lesson.videoUrl) && (
                                    <Play size={12} className="text-red-500" />
                                  )}
                              </div>
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

                        {/* Add lesson button */}
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

        {/* Right Content Area - Lesson Editor */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {selectedLessonData ? (
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <input
                  type="text"
                  value={selectedLessonData.title}
                  onChange={(e) =>
                    handleLessonChange(
                      selectedModule,
                      selectedLesson,
                      "title",
                      e.target.value
                    )
                  }
                  className=" text-xl font-medium px-2 py-1 rounded-lg focus:border-purple-900 border-violet-700 border-2 border-solid mb-4 "
                  placeholder="Lesson Title"
                />

                {/* Lesson Content */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div className="space-y-6">
                    {/* YouTube Video */}
                    <div className="border border-gray-200 rounded-lg p-4">
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                        <Video size={18} className="mr-2" />
                        YouTube Video
                      </label>

                      <div className="space-y-3">
                        <input
                          type="url"
                          value={selectedLessonData.videoUrl}
                          onChange={(e) =>
                            handleLessonChange(
                              selectedModule,
                              selectedLesson,
                              "videoUrl",
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="https://www.youtube.com/watch?v=..."
                        />

                        {selectedLessonData.videoUrl && (
                          <div className="mt-3">
                            {isValidYouTubeUrl(selectedLessonData.videoUrl) ? (
                              <div className="space-y-2">
                                <div className="bg-black rounded-lg overflow-hidden aspect-video">
                                  <iframe
                                    src={getYouTubeEmbedUrl(
                                      selectedLessonData.videoUrl
                                    )}
                                    className="w-full h-full"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    title="YouTube video preview"
                                  ></iframe>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-green-600 flex items-center text-sm">
                                    <Check size={16} className="mr-1" />
                                    Valid YouTube URL
                                  </span>
                                  <a
                                    href={selectedLessonData.videoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center"
                                  >
                                    <ExternalLink size={14} className="mr-1" />
                                    Open in YouTube
                                  </a>
                                </div>
                              </div>
                            ) : (
                              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                                <span className="text-red-600 text-sm">
                                  Please enter a valid YouTube URL
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* PDF Resources */}
                    <div className="border border-gray-200 rounded-lg p-4">
                      <label className="flex items-center text-sm font-medium text-gray-700 mb-3">
                        <FileText size={18} className="mr-2" />
                        PDF Resources (Google Drive)
                      </label>

                      <div className="space-y-3">
                        <input
                          type="url"
                          value={selectedLessonData.pdfUrl}
                          onChange={(e) =>
                            handleLessonChange(
                              selectedModule,
                              selectedLesson,
                              "pdfUrl",
                              e.target.value
                            )
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="https://drive.google.com/file/d/..."
                        />

                        {selectedLessonData.pdfUrl && (
                          <div className="mt-3">
                            {isValidDriveUrl(selectedLessonData.pdfUrl) ? (
                              <div className="space-y-2">
                                <div className="p-3 bg-green-50 border border-green-200 rounded-lg flex items-center justify-between">
                                  <span className="text-green-600 flex items-center text-sm">
                                    <Check size={16} className="mr-1" />
                                    Valid Google Drive URL
                                  </span>
                                  <div className="flex space-x-2">
                                    <a
                                      href={convertDriveLink(
                                        selectedLessonData.pdfUrl
                                      )}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center"
                                    >
                                      <ExternalLink
                                        size={14}
                                        className="mr-1"
                                      />
                                      Preview
                                    </a>
                                    <a
                                      href={selectedLessonData.pdfUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-sm text-indigo-600 hover:text-indigo-800 flex items-center"
                                    >
                                      <ExternalLink
                                        size={14}
                                        className="mr-1"
                                      />
                                      Open
                                    </a>
                                  </div>
                                </div>
                                {/* PDF Preview */}
                                <div
                                  className="bg-gray-100 rounded-lg overflow-hidden"
                                  style={{ height: "200px" }}
                                >
                                  <iframe
                                    src={convertDriveLink(
                                      selectedLessonData.pdfUrl
                                    )}
                                    className="w-full h-full"
                                    frameBorder="0"
                                    title="PDF preview"
                                  ></iframe>
                                </div>
                              </div>
                            ) : (
                              <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                                <span className="text-red-600 text-sm">
                                  Please enter a valid Google Drive URL
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="mt-3 text-xs text-gray-500">
                        <p>
                          <strong>Tip:</strong> Share your PDF on Google Drive
                          and paste the link here.
                        </p>
                        <p>
                          Make sure the file is set to "Anyone with the link can
                          view"
                        </p>
                      </div>
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
                      onChange={(e) =>
                        handleLessonChange(
                          selectedModule,
                          selectedLesson,
                          "notes",
                          e.target.value
                        )
                      }
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
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                No Lesson Selected
              </h3>
              <p className="text-gray-500 mb-6">
                Select a lesson from the sidebar or create a new one to get
                started
              </p>
              <button
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg inline-flex items-center"
                onClick={() => {
                  if (course.modules.length === 0) {
                    addModule();
                  } else {
                    selectModule(course.modules[0].id);
                  }
                }}
              >
                <Plus size={18} className="mr-1" />
                {course.modules.length === 0
                  ? "Create First Module"
                  : "Select a Lesson"}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Success message toast */}
      {saveSuccess && (
        <div className="fixed bottom-6 right-6 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-lg flex items-center">
          <Check size={20} className="mr-2" />
          Course saved successfully!
        </div>
      )}
    </div>
  );
};

export default AdminAddCourse;
