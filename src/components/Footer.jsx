import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-purple-500/20 bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Mojala Kavya
              </span>
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Full Stack Developer passionate about creating beautiful, functional, 
              and user-centered digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Resume', 'Certifications', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-gray-400 hover:text-purple-400 transition-colors duration-300 text-sm"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm">
              <p className="text-gray-400">Guntur,Andhra Pradesh</p>
              <p className="text-gray-400">2200032173cseh@gmail.com</p>
              <p className="text-gray-400">+91 8328132978</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-purple-500/10">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Mojala Kavya. All rights reserved.
            </p>
            
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;