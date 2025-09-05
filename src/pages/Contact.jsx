import React from 'react';

const Contact = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-violet-100 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-12 w-36 h-36 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full opacity-20 animate-pulse blur-2xl"></div>
        <div className="absolute top-48 right-16 w-28 h-28 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full opacity-25 animate-bounce blur-xl"></div>
        <div className="absolute bottom-24 left-20 w-32 h-32 bg-gradient-to-r from-violet-400 to-pink-400 rounded-full opacity-30 animate-pulse blur-lg"></div>
        <div className="absolute bottom-56 right-12 w-24 h-24 bg-gradient-to-r from-purple-300 to-indigo-300 rounded-full opacity-20 animate-bounce blur-2xl"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-violet-500 rounded-full animate-ping opacity-70"></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping opacity-50"></div>
      </div>

      <div className="relative p-6">
        <div className="max-w-5xl mx-auto">
          {/* Main contact card */}
          <div className="relative bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl border border-purple-100 overflow-hidden">
            {/* Decorative header gradient */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600"></div>
            
            <div className="p-10 md:p-16 text-center space-y-12">
              {/* Header section */}
              <div className="space-y-6 animate-fade-in-up">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 via-violet-700 to-indigo-700">
                    Contact Us
                  </span>
                </h1>
                
                <div className="relative animate-fade-in-up animation-delay-200">
                  <h2 className="text-2xl md:text-3xl font-bold text-purple-700">
                    Grace Glow Academy
                  </h2>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-400 to-violet-400 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Contact information grid */}
              <div className="grid md:grid-cols-2 gap-8 animate-fade-in-up animation-delay-400">
                {/* Address card */}
                <div className="group relative bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-3xl border border-purple-100 shadow-xl hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-100/50 to-violet-100/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">🏫</div>
                    <h3 className="text-xl font-bold text-purple-900 mb-4">Visit Our Campus</h3>
                    <p className="text-gray-700 leading-relaxed">
                      KSM Emporium, 1, 2, 3 Sri Dhanalakshmi Nagar,<br/>
                      Valudareddi Post, Villuppuram – 605401
                    </p>
                  </div>
                </div>

                {/* Contact details card */}
                <div className="group relative bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-3xl border border-indigo-100 shadow-xl hover:shadow-2xl hover:shadow-indigo-200/50 transition-all duration-500 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/50 to-purple-100/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">📱</div>
                    <h3 className="text-xl font-bold text-purple-900 mb-4">Get In Touch</h3>
                    <div className="space-y-3 text-gray-700">
                      <div className="flex items-center justify-center">
                        <span className="text-2xl mr-3">📞</span>
                        <a href="tel:+919360426415" className="text-purple-700 font-semibold hover:text-purple-900 transition-colors">
                          +91 93604 26415
                        </a>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className="text-2xl mr-3">📧</span>
                        <a href="mailto:support@graceglowacademy.org" className="text-purple-700 font-semibold hover:text-purple-900 transition-colors">
                          support@graceglowacademy.org
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Learning modes section */}
              <div className="relative animate-fade-in-up animation-delay-600">
                <div className="bg-gradient-to-r from-violet-50 via-purple-50 to-indigo-50 p-8 rounded-3xl border border-violet-100 shadow-xl">
                  <div className="flex items-center justify-center mb-6">
                    <div className="text-6xl">🌐</div>
                  </div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-violet-700 mb-4">
                    Learning Modes Available
                  </h3>
                  <p className="text-lg text-gray-700">
                    <span className="font-bold text-purple-700">Online Classes</span> (Zoom/Google Meet) & 
                    <span className="font-bold text-violet-700"> Offline Classes</span> (On-Campus)
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="grid md:grid-cols-3 gap-6 animate-fade-in-up animation-delay-800">
                <a href="#" className="group relative bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-purple-100 hover:shadow-2xl hover:shadow-purple-200/50 transition-all duration-500 hover:scale-110 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🗺️</div>
                    <h4 className="font-bold text-purple-900 mb-2">Google Map Link</h4>
                    <p className="text-sm text-gray-600">Find us easily</p>
                  </div>
                </a>

                <a href="#" className="group relative bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-green-100 hover:shadow-2xl hover:shadow-green-200/50 transition-all duration-500 hover:scale-110 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">💬</div>
                    <h4 className="font-bold text-green-700 mb-2">Join WhatsApp Group</h4>
                    <p className="text-sm text-gray-600">Instant updates</p>
                  </div>
                </a>

                <a href="#" className="group relative bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-blue-100 hover:shadow-2xl hover:shadow-blue-200/50 transition-all duration-500 hover:scale-110 hover:-translate-y-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="relative">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📝</div>
                    <h4 className="font-bold text-blue-700 mb-2">Contact Form</h4>
                    <p className="text-sm text-gray-600">Send us a message</p>
                  </div>
                </a>
              </div>

              {/* Call to action */}
              <div className="relative mt-16 animate-fade-in-up animation-delay-1000">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-violet-200 to-indigo-200 rounded-3xl blur-2xl opacity-30 scale-105"></div>
                <div className="relative bg-white/90 backdrop-blur-lg p-8 rounded-3xl border-2 border-purple-200 shadow-xl">
                  <div className="flex items-center justify-center mb-4">
                    <div className="text-5xl">✨</div>
                  </div>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-violet-700 mb-4">
                    Ready to Start Your Journey?
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">
                    Contact us today and take the first step towards speaking with grace and shining with glow!
                  </p>
                  {/* <button className="group relative bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-full shadow-xl overflow-hidden transition-all duration-500 transform hover:scale-110 hover:shadow-purple-500/50">
                
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-500/20 via-transparent to-indigo-500/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-500/10 via-violet-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pulse-animation"></span>
                    
            
                    <span className="relative flex items-center justify-center">
                      Get Started Today
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform duration-300 ease-in-out" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </button> */}
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
        @keyframes pulse-glow {
          0% {
            box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.5);
          }
          70% {
            box-shadow: 0 0 0 15px rgba(139, 92, 246, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(139, 92, 246, 0);
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -100% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .pulse-animation {
          animation: pulse-glow 2s infinite;
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
        .animation-delay-1000 {
          animation-delay: 1.0s;
        }
      `}</style>
    </div>
  );
};

export default Contact;