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
    <nav className={`nav-container fixed top-0 left-0 w-full py-4 px-6 flex items-center justify-between transition-all duration-300 z-50 ${
      isScrolled ? 'scrolled' : ''
    }`}>
      {/* Logo */}
      <div className="flex items-center">
        <div className="group transition-all duration-300 cursor-pointer">
          <span className="logo-text ml-2 text-2xl font-bold">CaI</span>
        </div>
      </div>

      {/* Center Menu Items */}
      <div className="flex justify-center mx-4">
        <div className="nav-menu-container px-4 py-2 flex gap-6 transition-all duration-300">
          {['Home', 'About', 'Contact'].map((item) => (
            <div key={item} className="inline-flex">
              <button className="text-slate-300/70 px-3 py-1 rounded-2xl border border-transparent transition-all duration-300 hover:scale-110 hover:text-slate-300/90 hover:border-violet-700/70 transform origin-center">
                {item}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Sign In/Sign Up Button */}
      <div className="flex items-center gap-2 bg-transparent">
        {isLoggedIn ? (
          <Button 
            className="btn-neumorphic flex items-center gap-2 px-4 py-2 rounded-xl"
          >
            <User size={18} />
            <span>User</span>
          </Button>
        ) : (
          <Button 
            onClick={handleLogin}
            className="btn-neumorphic flex items-center gap-2 px-4 py-2 rounded-xl"
          >
            <LogIn size={20} className="group-hover:rotate-12 transition-all duration-300" />
            <span>Sign In</span>
          </Button>
        )}
      </div>
    </nav>
  );
}