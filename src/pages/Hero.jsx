import { useState } from "react";
import { Book, GraduationCap, Globe, Search, ArrowRight } from "lucide-react";
const Hero = () => {
  const [email, setEmail] = useState("");
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Background decoration */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-violet-100 blur-3xl opacity-70"></div>
      <div className="absolute top-40 -left-24 w-72 h-72 rounded-full bg-violet-200 blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left side content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <span className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-violet-100 text-violet-800 font-medium text-sm">
                <span className="mr-1">✨</span> The Modern Way to Master
                English
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Elevate Your <span className="text-violet-600">English</span>{" "}
              Skills with Confidence
            </h1>

            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0">
              Personalized learning paths, interactive lessons, and expert
              guidance to help you become fluent in English faster than ever
              before.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="w-full sm:w-auto relative">
                <input
                  type="email"
                  className="w-full sm:w-72 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button className="w-full sm:w-auto px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition duration-200 flex items-center justify-center">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-2 text-sm text-gray-500">
              <div className="flex -space-x-2">
                <img
                  className="h-8 w-8 rounded-full border-2 border-white"
                  src="/api/placeholder/32/32"
                  alt="User"
                />
                <img
                  className="h-8 w-8 rounded-full border-2 border-white"
                  src="/api/placeholder/32/32"
                  alt="User"
                />
                <img
                  className="h-8 w-8 rounded-full border-2 border-white"
                  src="/api/placeholder/32/32"
                  alt="User"
                />
              </div>
              <span>Joined by 25,000+ students</span>
            </div>
          </div>

          {/* Right side image and features */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 bg-white rounded-xl shadow-xl p-2 max-w-md mx-auto">
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="/api/placeholder/600/400"
                  alt="English Learning Platform"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold">
                    Interactive Learning Experience
                  </h3>
                  <p className="text-white/80 text-sm">
                    Engage with native speakers and improve your skills
                  </p>
                </div>
              </div>

              <div className="bg-white p-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-violet-50 p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-violet-600 mb-2" />
                    <h4 className="font-medium text-gray-800">Expert Tutors</h4>
                    <p className="text-xs text-gray-500">
                      Learn from certified professionals
                    </p>
                  </div>
                  <div className="bg-violet-50 p-3 rounded-lg">
                    <Globe className="h-6 w-6 text-violet-600 mb-2" />
                    <h4 className="font-medium text-gray-800">
                      Global Community
                    </h4>
                    <p className="text-xs text-gray-500">
                      Practice with peers worldwide
                    </p>
                  </div>
                  <div className="bg-violet-50 p-3 rounded-lg">
                    <Book className="h-6 w-6 text-violet-600 mb-2" />
                    <h4 className="font-medium text-gray-800">
                      Rich Resources
                    </h4>
                    <p className="text-xs text-gray-500">
                      Access to premium materials
                    </p>
                  </div>
                  <div className="bg-violet-50 p-3 rounded-lg">
                    <Search className="h-6 w-6 text-violet-600 mb-2" />
                    <h4 className="font-medium text-gray-800">
                      Smart Analytics
                    </h4>
                    <p className="text-xs text-gray-500">
                      Track your progress easily
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute top-5 -right-20 bg-white rounded-lg shadow-lg p-3 hidden lg:block">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-lg">✓</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-800">
                    Certification Ready
                  </p>
                  <p className="text-xs text-gray-500">IELTS & TOEFL</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -left-4 bg-white rounded-lg shadow-lg p-3 hidden lg:block ">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 bg-violet-100 rounded-full flex items-center justify-center">
                  <span className="text-violet-600 text-lg">🎯</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-gray-800">
                    AI-Powered
                  </p>
                  <p className="text-xs text-gray-500">Personalized Learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
