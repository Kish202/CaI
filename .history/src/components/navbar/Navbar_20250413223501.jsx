import { useState, useEffect } from 'react';
import { User, LogIn } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Mock login function
  const handleLogin = () => {
    // Simulate API call
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 800);
  };

  // Handle scroll effect for transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full py-4 px-6 flex items-center justify-between transition-all duration-300 z-50 ${
      isScrolled 
        ? 'bg-transparent backdrop-blur-sm' 
        : 'bg-gradient-to-r from-gray-900 to-purple-900 shadow-lg'
    }`}>
      {/* Logo */}
      <div className="flex items-center">
        <div className="group transition-all duration-300 cursor-pointer">
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            className="text-purple-400 group-hover:text-purple-300 transform group-hover:scale-110 transition-all duration-300 group-hover:drop-shadow-lg group-hover:shadow-purple-500"
          >
            <path 
              fill="currentColor" 
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" 
            />
          </svg>
          <span className="ml-2 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-500 group-hover:from-purple-200 group-hover:to-purple-400">NeoNav</span>
        </div>
      </div>

      {/* Center Menu Items */}
      <div className="flex justify-center mx-4">
        <div className="bg-gray-800 bg-opacity-50 rounded-full px-4 py-2 flex gap-6 shadow-inner">
          {['Home', 'About', 'Contact'].map((item) => (
            <div 
              key={item} 
              className="relative group"
            >
              <button className="text-gray-200 px-3 py-1 rounded-lg group-hover:text-purple-300 group-hover:scale-110 transition-all duration-300">
                {item}
              </button>
              <div className="absolute inset-0 rounded-md group-hover:shadow-md group-hover:// App.jsx
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neugray-900 to-neugray-800">
      <Navbar />
      
      {/* Example content to demonstrate scroll effect */}
      <div className="pt-24 px-8">
        <div className="max-w-4xl mx-auto text-gray-300">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-500 mb-6">
            Welcome to Neumorphic Design
          </h1>
          
          <div className="space-y-24">
            {Array(10).fill(0).map((_, i) => (
              <div key={i} className="p-6 rounded-xl bg-gray-800 bg-opacity-50 shadow-neumorphic">
                <h2 className="text-2xl font-semibold text-purple-300 mb-4">
                  Section {i + 1}
                </h2>
                <p className="text-gray-400">
                  Scroll down to see the navbar transparency effect in action. 
                  This neumorphic design combines dark themes with subtle purple 
                  accents for a modern, glowy aesthetic.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Sign In/Sign Up Button */}
      <div className="flex items-center gap-2">
        {isLoggedIn ? (
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 bg-opacity-50 border border-purple-500/30 shadow-sm text-purple-300">
            <User size={18} />
            <span>User</span>
          </div>
        ) : (
          <button 
            onClick={handleLogin}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 bg-opacity-50 border border-purple-500/30 shadow-sm hover:shadow-purple-500/30 hover:border-purple-400 transition-all duration-300 text-gray-200 hover:text-purple-300 group"
          >
            <LogIn size={18} className="group-hover:rotate-12 transition-all duration-300" />
            <span>Sign In</span>
          </button>
        )}
      </div>
    </nav>
  );
}