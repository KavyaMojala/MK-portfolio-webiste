import React from 'react';
import { Code2, Palette, Rocket, Heart } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend', icon: Code2, items: ['React', 'JavaScript', 'Tailwind CSS'] },
    { name: 'Backend', icon: Rocket, items: ['Node.js', 'Python', 'Express'] },
    { name: 'Design', icon: Palette, items: ['Figma', 'Adobe XD', 'UI/UX', 'Responsive Design'] },
    { name: 'Other', icon: Heart, items: ['Git', 'AWS', 'MongoDB'] }
  ];

  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-6 py-20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a passionate developer who loves creating digital experiences that make a difference
          </p>
        </div>

        {/* My Story */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-16">
          <div className="lg:w-1/2 animate-fade-in-left text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white mb-6">My Story</h3>
            <div className="space-y-4 text-gray-400">
              <p>
                As a final-year B.Tech student at KL University, I turned my curiosity about how websites work into a drive to craft meaningful digital experiences. 
                From academic projects to real-world internships, I’ve been building sleek, responsive web applications that blend functionality with thoughtful design.
              </p>
              <p>
                I believe in the power of clean code, thoughtful design, and continuous learning. 
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or enjoying a good cup of coffee while sketching out new ideas.
              </p>
              <p>
                I'm always excited to take on new challenges and collaborate with like-minded 
                individuals who share a passion for innovation and excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Skills - Original Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg mr-4">
                  <skill.icon size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-white">{skill.name}</h4>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="text-gray-400 text-sm">• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
