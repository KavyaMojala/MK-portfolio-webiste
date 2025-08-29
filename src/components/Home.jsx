import React from 'react';
import { Github, Linkedin, Mail, Eye } from 'lucide-react';
import profileImg from '../assets/kavyaimage.jpg'; // correct import
import MyResume from '../assets/Resume.pdf';       // ✅ Import Resume from assets

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                MOJALA KAVYA
              </span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-300 mb-8">
              <span className="typing-animation">Full Stack Developer</span>
            </div>
            
            <p className="text-lg text-gray-400 mb-8 max-w-2xl">
              Passionate about creating beautiful, functional, and user-centered digital experiences. 
              I specialize in modern web technologies and love bringing ideas to life through code.
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              {/* ✅ View Resume */}
              <a 
                href={MyResume}       // Imported asset works in Vite/CRA
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Eye size={20} />
                View Resume
              </a>
              
              {/* Email Button */}
              <a 
                href="mailto:2200032173cseh@gmail.com" 
                className="px-8 py-3 border border-purple-400 text-purple-400 rounded-full font-medium hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Get In Touch
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <a 
                href="https://github.com/KavyaMojala?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              
              <a 
                href="https://www.linkedin.com/in/kavya-mojala-52027a260/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              
              <a 
                href="mailto:mojalakavya@example.com" 
                className="text-gray-400 hover:text-purple-400 transition-colors duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          {/* Right Content - Profile Picture */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up animation-delay-300">
            <div className="relative">
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-purple-400/30 shadow-2xl hover:scale-105 transition-transform duration-500">
                <img 
                  src={profileImg}
                  alt="Mojala Kavya Profile" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-purple-400/20 animate-pulse"></div>
              <div className="absolute -inset-4 rounded-full border border-blue-400/10 animate-spin-slow"></div>
              <div className="absolute -inset-8 rounded-full border border-pink-400/10 animate-ping"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
