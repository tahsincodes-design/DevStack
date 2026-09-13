import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-8 pb-12">
          
          {/* Column 1: Brand Info (Spans 2 columns on desktop) */}
          <div className="md:col-span-2 space-y-4">
            {/* Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold shadow-sm">
                DS
              </div>
              <span className="font-bold text-gray-900 text-xl tracking-tight">Dev Stack</span>
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4 text-sm font-medium text-gray-600 pt-2">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors">
                GitHub
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Column 2: PRODUCT */}
          <div>
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
              PRODUCT
            </h3>
            <ul className="space-y-3 text-sm text-gray-500 font-medium">
              <li><a href="#home" className="hover:text-gray-900 transition-colors">Home</a></li>
              <li><a href="#technologies" className="hover:text-gray-900 transition-colors">Technologies</a></li>
              <li><a href="#projects" className="hover:text-gray-900 transition-colors">Projects</a></li>
            </ul>
          </div>

          {/* Column 3: COMPANY */}
          <div>
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
              COMPANY
            </h3>
            <ul className="space-y-3 text-sm text-gray-500 font-medium">
              <li><a href="#about" className="hover:text-gray-900 transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a></li>
              <li><a href="#careers" className="hover:text-gray-900 transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Column 4: LEGAL */}
          <div>
            <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
              LEGAL
            </h3>
            <ul className="space-y-3 text-sm text-gray-500 font-medium">
              <li><a href="#privacy-policy" className="hover:text-gray-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#terms-of-service" className="hover:text-gray-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar Divider */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-gray-600 transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-gray-600 transition-colors">Terms</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;