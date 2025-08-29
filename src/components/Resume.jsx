import React from 'react';
import { Download, Briefcase, Award, Calendar } from 'lucide-react';
import MyResume from '../assets/Resume.pdf';  // ✅ Import PDF from assets

const Resume = () => {
  const experiences = [
    {
      title: 'Frontend Developer – Code for Good Hackathon 2025',
      company: 'JPMorgan Chase & Co.',
      period: 'Jun 2025',
      description:
        'Collaborated with a cross-functional team in a 24-hour innovation sprint to build a centralized digital platform (AVASakhi) supporting grassroots artisans and coordinators in rural Assam.',
      achievements: [
        'Developed responsive frontend modules using React for inventory tracking, dashboards, and chatbot integration',
        'Built income visualization dashboards and real-time disaster alert UI with weather APIs',
        'Worked with a diverse team of 6 members, delivering a scalable solution for social impact',
      ],
    },
    {
      title: 'Data Engineering Virtual Internship',
      company: 'AICTE EduSkills Foundation (Virtual)',
      period: 'Apr 2024 – Jun 2024',
      description:
        'Built and optimized data pipelines using AWS services (S3, RDS, Lambda, Redshift), ensuring smooth and scalable data operations.',
      achievements: [
        'Gained experience in scalable, serverless cloud-based data workflows',
        'Worked with AWS services for ETL and pipeline optimization',
      ],
    },
  ];

  const skills = [
    { category: 'Languages', items: ['Python', 'SQL'] },
    {
      category: 'Web Development',
      items: ['HTML', 'CSS', 'React', 'Tailwind CSS', 'Figma', 'Adobe XD'],
    },
    { category: 'Tools & Platforms', items: ['AWS', 'Git', 'VS Code', 'Netlify'] },
    { category: 'Currently Learning', items: ['Prompt Engineering', 'AI-assisted Development'] },
  ];

  return (
    <section id="resume" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
            A comprehensive overview of my professional journey, hackathon experience, and technical
            expertise
          </p>

          {/* ✅ View Resume button opens PDF from assets */}
          <a
            href={MyResume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto w-fit"
          >
            <Download size={20} />
            View Resume
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience */}
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
                <Briefcase className="mr-3 text-purple-400" size={24} />
                Work Experience
              </h3>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                        <p className="text-purple-400 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex items-center text-gray-400 mt-2 md:mt-0">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                    </div>
                    <p className="text-gray-400 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-300 text-sm flex items-start">
                          <span className="text-purple-400 mr-2">▸</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Award className="mr-3 text-green-400" size={24} />
              Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div
                  key={skillGroup.category}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${(index + 2) * 150}ms` }}
                >
                  <h4 className="text-lg font-bold text-white mb-4">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium hover:bg-green-500/30 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
