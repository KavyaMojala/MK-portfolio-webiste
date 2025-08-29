import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle, Zap } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'May 27, 2024 – May 27, 2027',
      credentialId: 'da4e4e0481a941d4a81133d1bff9e7f2',
      verifyUrl: 'https://aws.amazon.com/verification',
      status: 'Active',
      description: 'Validated expertise in AWS fundamentals, cloud concepts, and best practices.',
      skills: ['Cloud Computing', 'AWS Services', 'Security', 'Scalability']
    },
    {
      title: 'Microsoft Certified: Azure AI Fundamentals (AI-900)',
      issuer: 'Microsoft',
      date: 'June 20, 2024',
      credentialId: '5D9441AD3B9A6939',
      verifyUrl: 'https://learn.microsoft.com/en-us/users/mojalakavya-6686/credentials/certification/azure-ai-fundamentals?tab=credentials-tab',
      status: 'Active',
      description: 'Demonstrates foundational knowledge of AI concepts and Azure AI services.',
      skills: ['AI Concepts', 'Azure AI Services', 'ML Basics', 'Responsible AI']
    },
    {
      title: 'Salesforce AI Associate',
      issuer: 'Salesforce',
      date: 'October 19, 2024',
      credentialId: '5081455',
      verifyUrl: 'https://sforce.co/verifycerts',
      status: 'Active',
      description: 'Validates knowledge of AI concepts and Salesforce AI applications.',
      skills: ['AI in CRM', 'Salesforce Platform', 'Automation', 'Data Insights']
    },
  ];

  const achievements = [
    {
      title: 'Code for Good 2025',
      issuer: 'JPMorgan Chase & Co.',
      date: 'Jun 2025',
      description: 'Worked as Frontend Developer.Built a centralized digital platform (AVASakhi) for rural artisans in Assam, featuring disaster alert UI, chatbot, and income dashboards.',
      skills: ['React', 'APIs', 'Team Collaboration', 'Social Impact']
    },
    {
      title: 'Hackvega 2025 Participant',
      issuer: 'KL University',
      date: 'Jun 2025',
      description: 'Participated in Hackvega, contributing to innovative solutions through frontend development and teamwork.',
      skills: ['Frontend Development', 'Problem Solving', 'Teamwork']
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="container mx-auto">
        
        {/* Certifications Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Professional certifications that validate my expertise in cloud, AI, RPA, and enterprise application development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {certifications.map((cert, index) => (
            <div 
              key={cert.credentialId}
              className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
                  <Award size={24} className="text-white" />
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={16} className="text-green-400" />
                  <span className="text-green-400 text-sm font-medium">{cert.status}</span>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                {cert.title}
              </h3>
              
              <p className="text-purple-400 font-medium mb-2">{cert.issuer}</p>
              
              <div className="flex items-center text-gray-400 text-sm mb-3">
                <Calendar size={14} className="mr-2" />
                {cert.date}
              </div>
              
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{cert.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">ID: {cert.credentialId}</span>
                {cert.verifyUrl !== '#' && (
                  <a 
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors duration-300 font-medium"
                  >
                    <ExternalLink size={14} />
                    Verify
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 flex items-center justify-center gap-3">
            <Zap className="text-yellow-400" /> Achievements
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hackathons and notable achievements that highlight my passion for innovation and problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, index) => (
            <div 
              key={index}
              className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:scale-105 animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                  {ach.title}
                </h3>
                <span className="text-gray-400 text-sm flex items-center">
                  <Calendar size={14} className="mr-1" /> {ach.date}
                </span>
              </div>
              <p className="text-purple-400 font-medium mb-2">{ach.issuer}</p>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{ach.description}</p>
              <div className="flex flex-wrap gap-2">
                {ach.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-2 py-1 bg-yellow-500/20 text-yellow-300 rounded text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
