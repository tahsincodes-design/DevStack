import React from 'react';

const NavBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* MOBILE VIEW (3 Parts: Hamburger | Logo | Buttons) */}
        <div className="flex items-center justify-between w-full md:hidden">
          {/* Left: Hamburger */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle btn-sm cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 `z-[1]` p-3 shadow-lg bg-white rounded-xl w-52 font-medium text-gray-600 gap-2">
              <li><a href="#home" className="text-pink-500 font-semibold">Home</a></li>
              <li><a href="#technologies">Technologies</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Center: Brand Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
              DS
            </div>
            <span className="font-bold text-gray-900 text-lg">Dev Stack</span>
          </a>

          {/* Right: Action Buttons */}
          <div className="flex items-center gap-2">
            <button className="text-xs font-semibold text-gray-600 hover:text-pink-500 hover:bg-pink-50 px-3 py-1.5 rounded-full transition-all duration-200 cursor-pointer">
              Sign In
            </button>
            <button className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 text-white text-xs font-medium px-4 py-1.5 rounded-full shadow-sm hover:brightness-110 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer">
              Sign Up
            </button>
          </div>
        </div>

        {/* DESKTOP VIEW */}
        {/* Left: Brand Logo */}
        <div className="hidden md:flex items-center gap-2">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-sm group-hover:scale-105 transition-transform">
              DS
            </div>
            <span className="font-bold text-gray-900 text-xl tracking-tight">Dev Stack</span>
          </a>
        </div>

        {/* Center: Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#home" className="text-pink-500 font-semibold transition-colors">Home</a>
          <a href="#technologies" className="text-gray-600 hover:text-pink-500 transition-colors">Technologies</a>
          <a href="#projects" className="text-gray-600 hover:text-pink-500 transition-colors">Projects</a>
          <a href="#about" className="text-gray-600 hover:text-pink-500 transition-colors">About</a>
          <a href="#contact" className="text-gray-600 hover:text-pink-500 transition-colors">Contact</a>
        </nav>

        {/* Right: Sign In & Sign Up */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm font-semibold text-gray-600 hover:text-pink-500 hover:bg-pink-50 px-4 py-2 rounded-full transition-all duration-200 cursor-pointer">
            Sign In
          </button>
          <button className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 text-white text-sm font-semibold px-6 py-2 rounded-full shadow-md hover:brightness-110 hover:scale-105 hover:shadow-lg active:scale-95 transition-all duration-200 cursor-pointer">
            Sign Up
          </button>
        </div>

      </div>
    </header>
  );
};

export default NavBar;