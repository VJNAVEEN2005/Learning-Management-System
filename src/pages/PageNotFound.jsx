import React, { useState, useEffect } from 'react';
import { BookOpen, Search, Home, ArrowLeft, Compass, Coffee } from 'lucide-react';

const PageNotFound = () => {
  const [timeSpent, setTimeSpent] = useState(0);
  const [showReward, setShowReward] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  // Track time spent on page
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Show reward after 60 seconds
  useEffect(() => {
    if (timeSpent >= 60 && !showReward) {
      setShowReward(true);
    }
  }, [timeSpent]);

  // Animated text effect for "searching"
  const [searchDots, setSearchDots] = useState('');
  useEffect(() => {
    const dotsInterval = setInterval(() => {
      setSearchDots(prev => {
        if (prev.length >= 3) return '';
        return prev + '.';
      });
    }, 500);

    return () => clearInterval(dotsInterval);
  }, []);

  // Floating book animation - random movement
  const [books, setBooks] = useState([
    { id: 1, x: 10, y: 20, rotation: 10, speed: 1.2 },
    { id: 2, x: 70, y: 40, rotation: -15, speed: 0.8 },
    { id: 3, x: 30, y: 70, rotation: 25, speed: 1.5 },
    { id: 4, x: 60, y: 10, rotation: -5, speed: 1 }
  ]);

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setBooks(books => books.map(book => {
        let newY = book.y + book.speed;
        if (newY > 100) newY = -20;
        return { ...book, y: newY, rotation: book.rotation + (book.speed / 2) };
      }));
    }, 100);

    return () => clearInterval(moveInterval);
  }, []);

  const handleInputFocus = () => setIsTyping(true);
  const handleInputBlur = () => setIsTyping(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated floating books */}
      {books.map(book => (
        <div 
          key={book.id} 
          className="absolute opacity-30 text-indigo-400"
          style={{
            left: `${book.x}%`,
            top: `${book.y}%`,
            transform: `rotate(${book.rotation}deg)`,
            transition: 'top 0.5s ease, transform 1s ease'
          }}
        >
          <BookOpen size={48} />
        </div>
      ))}
      
      {/* 404 content */}
      <div className="z-10 max-w-3xl w-full bg-white rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-102">
        <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
        
        <div className="p-8 text-center">
          <div className="relative mb-8 inline-block">
            <div className="absolute inset-0 animate-ping rounded-full bg-indigo-100 opacity-75"></div>
            <div className="relative text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse">
              404
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Oops! Learning Path Not Found
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            It seems the educational content you're looking for has gone on a knowledge quest of its own!
          </p>
          
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
            <a href="/" className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium transition-all hover:shadow-lg">
              <Home size={20} />
              Back to Learning Dashboard
            </a>
            
            <a href="/courses" className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg border-2 border-indigo-300 text-indigo-700 font-medium transition-all hover:bg-indigo-50">
              <BookOpen size={20} />
              Browse Courses
            </a>
          </div>
          
          {/* Search box with animation */}
          <div className="mt-8 mb-4 max-w-md mx-auto">
            <div className={`flex items-center border-2 ${isTyping ? 'border-indigo-500' : 'border-gray-300'} rounded-lg overflow-hidden transition-all duration-300`}>
              <input
                type="text"
                className="w-full px-4 py-2 outline-none"
                placeholder="Search for courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <button className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-2">
                <Search size={20} />
              </button>
            </div>
          </div>
          
         
          
        </div>
        
        <div className="bg-indigo-50 p-4 text-center">
          <p className="text-indigo-800">
            Still need help? <a href="/contact" className="font-medium text-purple-600 underline">Contact our learning specialists</a>
          </p>
        </div>
      </div>
      
   
    </div>
  );
};

export default PageNotFound;