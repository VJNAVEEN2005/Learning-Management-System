import { useState } from 'react';
import { BookOpen, Star, Users, CheckCircle, ArrowRight } from 'lucide-react';

export default function Hero() {
  const [email, setEmail] = useState('');

  return (
    <div className="bg-gradient-to-br from-violet-50 to-purple-100 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-violet-200 opacity-40 blur-3xl"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 rounded-full bg-purple-200 opacity-30 blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="pt-16 pb-20 md:pt-24 md:pb-28 flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="md:w-1/2 z-10">
            <div className="flex items-center mb-4">
              <span className="bg-violet-200 text-violet-800 px-3 py-1 rounded-full text-sm font-medium">
                New curriculum available!
              </span>
              <div className="ml-3 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="text-violet-500 fill-violet-500" />
                ))}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Master English with <span className="text-violet-700">Confidence</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Personalized learning paths, interactive lessons, and live tutoring to help you become fluent faster than ever before.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-6 py-4 w-full sm:w-80 rounded-full border border-violet-200 focus:outline-none focus:ring-2 focus:ring-violet-500 shadow-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-4 rounded-full font-medium shadow-lg transition-all flex items-center justify-center gap-2 group">
                Start Learning Free
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-violet-600" />
                <span>7-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-violet-600" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-violet-600" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
          
          {/* Right Content - Feature Cards */}
          <div className="md:w-1/2 mt-12 md:mt-0 z-10">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-md border border-violet-100 transform transition-transform hover:-translate-y-1">
                <div className="bg-violet-100 p-3 rounded-lg inline-block mb-4">
                  <BookOpen size={24} className="text-violet-700" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Comprehensive Curriculum</h3>
                <p className="text-gray-600">Structured lessons covering speaking, reading, and writing</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-violet-100 transform transition-transform hover:-translate-y-1">
                <div className="bg-violet-100 p-3 rounded-lg inline-block mb-4">
                  <Users size={24} className="text-violet-700" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Native Tutors</h3>
                <p className="text-gray-600">Schedule 1-on-1 sessions with certified English teachers</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-violet-100 transform transition-transform hover:-translate-y-1 mt-4">
                <div className="bg-violet-100 p-3 rounded-lg inline-block mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-700">
                    <path d="M12 8V9"></path>
                    <path d="M12 12h.01"></path>
                    <path d="M3 8c0 3.5 2 5 9 5 7 0 9-1.5 9-5s-2-5-9-5c-7 0-9 1.5-9 5z"></path>
                    <path d="M19 12v4c0 1.5-1.5 2-6 2h-2c-4.5 0-6-.5-6-2v-4"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">AI-Powered Learning</h3>
                <p className="text-gray-600">Adaptive recommendations based on your performance</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-violet-100 transform transition-transform hover:-translate-y-1 mt-4">
                <div className="bg-violet-100 p-3 rounded-lg inline-block mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-violet-700">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 6v6l4 2"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-lg mb-2">Study Anywhere</h3>
                <p className="text-gray-600">Access your lessons on any device, anytime</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Bar */}
        <div className="bg-white py-6 px-8 rounded-2xl shadow-lg flex flex-wrap justify-around items-center mb-16 border border-violet-100">
          <div className="text-center px-4 py-2">
            <p className="text-2xl md:text-3xl font-bold text-violet-700">25K+</p>
            <p className="text-gray-600">Students</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-gray-200"></div>
          <div className="text-center px-4 py-2">
            <p className="text-2xl md:text-3xl font-bold text-violet-700">500+</p>
            <p className="text-gray-600">Lessons</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-gray-200"></div>
          <div className="text-center px-4 py-2">
            <p className="text-2xl md:text-3xl font-bold text-violet-700">98%</p>
            <p className="text-gray-600">Satisfaction</p>
          </div>
          <div className="hidden md:block w-px h-12 bg-gray-200"></div>
          <div className="text-center px-4 py-2">
            <p className="text-2xl md:text-3xl font-bold text-violet-700">187</p>
            <p className="text-gray-600">Countries</p>
          </div>
        </div>
      </div>
    </div>
  );
}