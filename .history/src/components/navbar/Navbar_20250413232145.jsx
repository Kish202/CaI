import { useState, useEffect } from 'react';
import { User, LogIn } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
        ? 'bg-gradient-to-r from-slate-950/90 via-violet-900/90 to-purple-700/90 backdrop-blur-sm' 
        : 'bg-gradient-to-r from-slate-950 via-violet-900 to-purple-700 shadow-neumorphic'
    }`}>
      {/* Logo */}
      <div className="flex items-center">
        <div className="group transition-all duration-300 cursor-pointer">
          <svg 
            width="40" 
            height="40" 
            viewBox="0 0 24 24" 
            className="text-neopurple-400 group-hover:text-neopurple-300 transform group-hover:scale-110 transition-all duration-300 group-hover:drop-shadow-glow"
          >
            <path 
              fill="currentColor" 
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z" 
            />
          </svg>
          <span className="ml-2 text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-neopurple-300 to-neopurple-500 group-hover:from-neopurple-200 group-hover:to-neopurple-400">NeoNav</span>
        </div>
      </div>

      module.exports = {
        theme: {
          extend: {
            colors: {
              neopurple: {
                200: '#b69eff',
                300: '#9d7fff',
                400: '#8466ff',
                500: '#6b4dff',
              }
            },
            boxShadow: {
              'neumorphic': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              'neumorphic-sm': '0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.06)',
              'neumorphic-inset': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
              'neon': '0 0 5px rgba(157, 127, 255, 0.5), 0 0 20px rgba(157, 127, 255, 0.3)',
            }
          }
        }
      }}
      <div className="flex items-center gap-2">
        {isLoggedIn ? (
          <Button 
            variant="ghost" 
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black bg-opacity-70 border border-neopurple-500/50 shadow-neumorphic-sm text-neopurple-300"
          >
            <User size={18} />
            <span>User</span>
          </Button>
        ) : (
          <Button 
            onClick={handleLogin}
            variant="outline"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black bg-opacity-70 border border-neopurple-500/50 shadow-neumorphic-sm hover:shadow-neon hover:border-neopurple-400 transition-all duration-300 text-neopurple-300 hover:text-neopurple-200 group"
          >
            <LogIn size={18} className="group-hover:rotate-12 transition-all duration-300" />
            <span>Sign In</span>
          </Button>
        )}
      </div>
    </nav>
  );
}