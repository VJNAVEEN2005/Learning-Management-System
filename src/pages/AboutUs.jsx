const AboutUs = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-16 w-32 h-32 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full opacity-20 animate-pulse blur-2xl"></div>
        <div className="absolute top-60 right-20 w-40 h-40 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full opacity-25 animate-bounce blur-xl"></div>
        <div className="absolute bottom-32 left-24 w-24 h-24 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full opacity-30 animate-pulse blur-lg"></div>
        <div className="absolute bottom-60 right-16 w-28 h-28 bg-gradient-to-r from-purple-300 to-indigo-300 rounded-full opacity-20 animate-bounce blur-2xl"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-violet-500 rounded-full animate-ping opacity-70"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping opacity-50"></div>
      </div>

      <div className="relative p-12">
        <div className="max-w-5xl mx-auto">
          {/* Main content card */}
          <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-purple-100 overflow-hidden">
            {/* Decorative header gradient */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600"></div>
            
            <div className="p-12 md:p-16 text-center space-y-10">
              {/* Main heading with animation */}
              <div className="space-y-6 animate-fade-in-up">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-violet-700 to-indigo-700">
                    Welcome to
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 mt-2">
                    Grace Glow English Academy
                  </span>
                </h1>
                
                <div className="relative animate-fade-in-up animation-delay-200">
                  <h2 className="text-2xl md:text-3xl font-bold text-purple-700">
                    A unit of GraceGlow Empowerment Trust
                  </h2>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Content sections with enhanced styling */}
              <div className="space-y-8 animate-fade-in-up animation-delay-400">
                <div className="relative bg-gradient-to-r from-purple-50 via-violet-50 to-indigo-50 p-8 rounded-2xl border border-purple-100 shadow-lg">
                  <div className="absolute top-4 left-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full opacity-20"></div>
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                    We are <span className="text-purple-700 font-bold">more than just a spoken English institute</span>. We are a platform to build your voice, confidence, and future. Our academy is committed to making English communication <span className="text-violet-700 font-bold">accessible, practical, and empowering</span> — regardless of your background.
                  </p>
                </div>

                <div className="relative bg-gradient-to-r from-indigo-50 via-purple-50 to-violet-50 p-8 rounded-2xl border border-violet-100 shadow-lg">
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-20"></div>
                  <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                    Whether you're a <span className="text-purple-700 font-bold">student</span>, <span className="text-violet-700 font-bold">professional</span>, or <span className="text-indigo-700 font-bold">entrepreneur</span>, we help you speak with grace and shine with glow.
                  </p>
                </div>
              </div>

              {/* Mission statement with visual emphasis */}
              <div className="relative mt-12 animate-fade-in-up animation-delay-600">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-violet-200 to-indigo-200 rounded-3xl blur-2xl opacity-30 scale-105"></div>
                <div className="relative bg-white/80 backdrop-blur-lg p-10 rounded-3xl border-2 border-purple-200 shadow-xl">
                  <div className="flex items-center justify-center mb-6">
                    <div className="text-6xl">✨</div>
                  </div>
                  <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-violet-700 mb-4">
                    Our Mission
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Empowering individuals through effective communication, building bridges between dreams and achievements, one conversation at a time.
                  </p>
                </div>
              </div>

              {/* Values showcase */}
              <div className="grid md:grid-cols-3 gap-8 mt-16 animate-fade-in-up animation-delay-800">
                <div className="group relative bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-purple-100 hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">🎯</div>
                    <h4 className="text-xl font-bold text-purple-900 mb-3">Accessible</h4>
                    <p className="text-gray-600">Learning for everyone, regardless of background</p>
                  </div>
                </div>

                <div className="group relative bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-purple-100 hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">💼</div>
                    <h4 className="text-xl font-bold text-purple-900 mb-3">Practical</h4>
                    <p className="text-gray-600">Real-world skills for immediate application</p>
                  </div>
                </div>

                <div className="group relative bg-white/70 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-purple-100 hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative">
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">⚡</div>
                    <h4 className="text-xl font-bold text-purple-900 mb-3">Empowering</h4>
                    <p className="text-gray-600">Building confidence and unlocking potential</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
        .animation-delay-400 {
          animation-delay: 0.4s;
        }
        .animation-delay-600 {
          animation-delay: 0.6s;
        }
        .animation-delay-800 {
          animation-delay: 0.8s;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;