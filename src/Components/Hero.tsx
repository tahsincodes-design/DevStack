import React from 'react';
import heroImg from '../assets/banner-stack.png'; // or '../assets/hero.png'

const Hero: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Heading, Subtext & Actions */}
        <div className="text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.15]">
            Build Your Ideal <br />
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="text-gray-500 text-base sm:text-lg max-w-xl leading-relaxed font-normal">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#technologies"
              className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 text-white text-sm md:text-base font-semibold px-6 py-3 rounded-lg shadow-md hover:brightness-110 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer inline-flex items-center justify-center"
            >
              Explore Technologies
            </a>
            
            <button
              type="button"
              className="bg-white border border-gray-200 text-gray-700 hover:text-gray-900 hover:bg-gray-50 hover:border-gray-300 text-sm md:text-base font-medium px-6 py-3 rounded-lg transition-all duration-200 cursor-pointer inline-flex items-center justify-center"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Column: 3D Stack Illustration */}
        <div className="flex justify-center md:justify-end">
          <img
            src={heroImg}
            alt="Development Stack Illustration"
            className="w-full max-w-lg object-contain drop-shadow-sm transition-transform duration-300 hover:scale-[1.01]"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;