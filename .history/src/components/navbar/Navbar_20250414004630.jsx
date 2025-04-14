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
          
          <span className="ml-2 text-purple-  text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-neopurple-300 to-neopurple-500 group-hover:from-neopurple-200 group-hover:to-neopurple-400">CaI</span>
        </div>
      </div>

      {/* Center Menu Items */}
  
      <div className="flex justify-center mx-4">
  <div className="bg-violet/60 rounded-full px-4 py-2 flex gap-6 shadow-inner shadow-purple-700/90 hover:shadow-purple-500/70 transition-all duration-300">
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

<div className="flex items-center gap-2">
  {isLoggedIn ? (
    <Button 
      className="flex items-center gap-2 px-4 py-2 rounded-xl 
                 border border-violet-700/60 
                 text-violet-300 
                 bg-transparent backdrop-blur-sm 
                 shadow-[inset_1px_1px_3px_rgba(255,255,255,0.05),inset_-1px_-1px_4px_rgba(0,0,0,0.4)] 
                 hover:shadow-[4px_4px_12px_rgba(255,255,255,0.3)] 
                 hover:border-violet-400 hover:text-violet-200 
                 transition-all duration-300"
    >
      <User size={18} />
      <span>User</span>
    </Button>
  ) : (
    <Button 
      onClick={handleLogin}
      className="flex items-center text-sm gap-2 px-4 py-2 rounded-xl 
                 border border-violet-700/60 
                 text-slate-200/80 
                 bg-transparent backdrop-blur-sm 
                 shadow-[inset_1px_1px_3px_rgba(255,255,255,0.05),inset_-1px_-1px_4px_rgba(0,0,0,0.4)] 
                 hover:shadow-[4px_4px_12px_rgba(255,255,255,0.3)] 
                 hover:border-violet-700/30 hover:text-slate-200 
                  hover:bg-transparent
                 transition-all duration-300"
    >
      <LogIn size={20} className="group-hover:rotate-12 transition-all duration-300" />
      <span>Sign In</span>
    </Button>
  )}
</div>


    </nav>
  );
}