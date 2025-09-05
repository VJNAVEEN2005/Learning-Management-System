export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100 overflow-hidden min-h-screen">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full opacity-20 animate-pulse blur-2xl"></div>
        <div className="absolute top-32 right-20 w-32 h-32 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full opacity-30 animate-bounce blur-xl"></div>
        <div className="absolute bottom-20 left-16 w-24 h-24 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full opacity-25 animate-pulse blur-lg"></div>
        <div className="absolute bottom-40 right-10 w-36 h-36 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full opacity-20 animate-bounce blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full opacity-40 animate-pulse blur-md"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-violet-500 rounded-full animate-ping opacity-70"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping opacity-50"></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 py-16">
        {/* Animated header tagline */}
        <div className="flex justify-center items-center mb-16 animate-fade-in-up">
          <div className="group bg-white/90 backdrop-blur-lg px-8 py-4 rounded-full shadow-2xl border border-purple-200 hover:shadow-purple-200/50 transition-all duration-500 hover:scale-105">
            <span className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent group-hover:from-purple-700 group-hover:to-violet-700">
              ✨ Speak with Grace. Shine with Glow. ✨
            </span>
          </div>
        </div>

        {/* Hero content with staggered animations */}
        <div className="text-center space-y-12">
          {/* Main headings */}
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight animate-fade-in-up">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-violet-700 to-indigo-700 drop-shadow-sm">
                Grace Glow
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 mt-2">
                English Academy
              </span>
            </h1>
            
            <div className="relative">
              <h2 className="text-2xl md:text-4xl font-bold text-purple-800 animate-fade-in-up animation-delay-200">
                Speak with Grace. Shine with Glow.
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full animate-pulse"></div>
            </div>

            <div className="max-w-4xl mx-auto animate-fade-in-up animation-delay-400">
              <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium">
                Transform your communication with our <span className="text-purple-700 font-bold">2-month Spoken English program</span> — available both <span className="text-violet-700 font-bold">online and offline</span>. Learn how to express fluently, speak confidently, and unlock opportunities with English that works in the real world.
              </p>
            </div>
          </div>

          {/* Enhanced feature showcase */}
          <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fade-in-up animation-delay-600">
            <div className="group relative bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-purple-100 hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 hover:scale-110 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">💬</div>
                <h3 className="text-xl font-bold text-purple-900 mb-3">Real-life Speaking</h3>
                <p className="text-gray-600">Practice conversations that matter in your daily life and career</p>
              </div>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-purple-100 hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 hover:scale-110 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🎓</div>
                <h3 className="text-xl font-bold text-purple-900 mb-3">Corporate-trained Mentors</h3>
                <p className="text-gray-600">Learn from experienced professionals who understand business communication</p>
              </div>
            </div>

            <div className="group relative bg-white/80 backdrop-blur-lg p-8 rounded-3xl shadow-xl border border-purple-100 hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 hover:scale-110 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">🧑‍🏫</div>
                <h3 className="text-xl font-bold text-purple-900 mb-3">Online & Offline Modes</h3>
                <p className="text-gray-600">Choose the learning style that fits your schedule and preferences</p>
              </div>
            </div>
          </div>

          {/* Spectacular CTA section */}
          <div className="relative animate-fade-in-up animation-delay-800">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-violet-200 to-indigo-200 rounded-full blur-3xl opacity-30 scale-150"></div>
            <div className="relative flex flex-col sm:flex-row gap-8 justify-center items-center">
              {/* <button className="group relative bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white font-bold py-6 px-12 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-110 hover:shadow-purple-500/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-violet-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative flex items-center justify-center text-xl">
                  Join Now
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button> */}
              
              {/* <button className="group bg-white/95 backdrop-blur-lg border-3 border-purple-600 text-purple-700 font-bold py-6 px-12 rounded-full shadow-2xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-violet-50 hover:border-purple-700 hover:shadow-purple-300/50 transition-all duration-500 transform hover:scale-110">
                <span className="text-xl group-hover:text-purple-800 transition-colors duration-300">Explore Courses</span>
              </button> */}
            </div>
          </div>
        </div>

        {/* Bottom decorative wave */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-purple-100/50 to-transparent"></div>
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
}