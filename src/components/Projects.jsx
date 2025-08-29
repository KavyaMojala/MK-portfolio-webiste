import React from 'react';
import { ExternalLink, Github, Zap } from 'lucide-react';

// ✅ Import images from assets
import lmsImg from '../assets/lms.jpg'; 
import famImg from '../assets/fam.jpg'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Skillnity - A Learning Management System',
      description: 'It is a user-friendly platform to explore courses, view subjects, and manage learning profiles securely. Builds secure login and profile features for personalized learning with a clean, responsive interface.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB'],
      image: lmsImg,   // ✅ Use imported image
      githubUrl: 'https://github.com/KavyaMojala/Skillnity.git',
      featured: true
    },
    {
      id: 2,
      title: 'WASH - Water, Sanitation, and Hygiene',
      description: 'Project WASH is a real-time platform focused on improving access to safe water, sanitation, and hygiene in schools and communities. It empowers people through interactive maps, impact tracking, and transparent donation opportunities to create healthier futures.',
      technologies: ['HTML', 'CSS', 'JS'],
      image: famImg ,
      githubUrl: 'https://github.com/praveenamirisetty/WASH.git',
      featured: true
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
            <Zap className="mr-3 text-yellow-400" size={24} />
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id}
                className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-white mb-3">{project.title}</h4>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    
                    <a 
                      href={project.githubUrl}
                      className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Other Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className="group bg-slate-800/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 2) * 150}ms` }}
                >
                  <h4 className="text-lg font-bold text-white mb-2">{project.title}</h4>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-2 py-1 bg-slate-700/50 text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={project.liveUrl}
                      className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors duration-300 text-sm"
                    >
                      <ExternalLink size={14} />
                      Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
