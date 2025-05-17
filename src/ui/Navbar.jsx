
import { useState, useEffect } from 'react';
import { 
  Search, 
  Bell, 
  Calendar, 
  Book, 
  Compass, 
  Trophy, 
  Settings, 
  User, 
  LogOut,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

const Navbar = () => {
 const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('discover');
  const [searchFocused, setSearchFocused] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [notifications, setNotifications] = useState(3);
  
  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'discover', icon: <Compass />, label: 'Discover' },
    { id: 'courses', icon: <Book />, label: 'My Courses' },
    { id: 'calendar', icon: <Calendar />, label: 'Calendar' },
    { id: 'achievements', icon: <Trophy />, label: 'Achievements' },
  ];

  return (
    <div className={` top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between py-4 px-6">
          <div className="flex items-center gap-12">
            {/* Logo */}
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
              LearnHub
            </div>
            
            {/* Nav Items */}
            <div className="flex gap-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  className={`flex items-center gap-2 px-1 py-2 relative text-sm font-medium transition-colors ${
                    activeItem === item.id 
                      ? 'text-indigo-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span className={`transition-colors ${activeItem === item.id ? 'text-indigo-600' : 'text-gray-400'}`}>
                    {item.icon}
                  </span>
                  {item.label}
                  {activeItem === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            {/* Search Bar */}
            <div className={`relative transition-all duration-300 ${searchFocused ? 'w-64' : 'w-48'}`}>
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full bg-gray-100 text-gray-800 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
            </div>
            
            {/* Notifications */}
            <div className="relative">
              <button className="p-2 rounded-full hover:bg-indigo-50 transition-colors">
                <Bell size={22} className="text-gray-600" />
                {notifications > 0 && (
                  <div className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {notifications}
                  </div>
                )}
              </button>
            </div>
            
            {/* User Profile */}
            <div className="relative group">
              <button className="flex items-center gap-2 p-1 rounded-full hover:bg-gray-100 transition-colors">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium">
                  JD
                </div>
                <ChevronRight size={16} className="text-gray-400 transform transition-transform group-hover:rotate-90" />
              </button>
              
              <div className="absolute right-0 mt-2 hidden group-hover:block">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden w-48 py-1">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <div className="font-medium">John Doe</div>
                    <div className="text-xs text-gray-500">john.doe@example.com</div>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 transition-colors w-full text-left text-sm">
                    <User size={16} className="text-gray-500" />
                    Profile
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 transition-colors w-full text-left text-sm">
                    <Settings size={16} className="text-gray-500" />
                    Settings
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 hover:bg-red-50 text-red-500 transition-colors w-full text-left text-sm">
                    <LogOut size={16} />
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center justify-between py-4 px-4">
          <div className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
            LearnHub
          </div>
          
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Search size={20} className="text-gray-600" />
            </button>
            <div className="relative">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Bell size={20} className="text-gray-600" />
                {notifications > 0 && (
                  <div className="absolute top-0 right-0 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {notifications}
                  </div>
                )}
              </button>
            </div>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              {isOpen ? <X size={20} className="text-gray-600" /> : <Menu size={20} className="text-gray-600" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top">
            <div className="px-4 py-3">
              <div className="flex items-center gap-3 py-2 px-3 bg-gray-50 rounded-lg mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-medium">
                  JD
                </div>
                <div>
                  <div className="font-medium">John Doe</div>
                  <div className="text-xs text-gray-500">john.doe@example.com</div>
                </div>
              </div>
              
              <div className="space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveItem(item.id);
                      setIsOpen(false);
                    }}
                    className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg ${
                      activeItem === item.id
                        ? 'bg-indigo-50 text-indigo-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className={activeItem === item.id ? 'text-indigo-600' : 'text-gray-400'}>
                      {item.icon}
                    </span>
                    {item.label}
                  </button>
                ))}
                
                <div className="my-2 border-t border-gray-100"></div>
                
                <button className="flex items-center gap-3 w-full px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-lg">
                  <Settings size={20} className="text-gray-400" />
                  Settings
                </button>
                
                <button className="flex items-center gap-3 w-full px-3 py-2 text-red-500 hover:bg-red-50 rounded-lg">
                  <LogOut size={20} />
                  Sign out
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Progress Indicator */}
      <div className="h-1 w-full bg-gray-100">
        <div className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 w-1/4"></div>
      </div>
    </div>
  )
}

export default Navbar