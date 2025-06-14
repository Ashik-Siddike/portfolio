import React from 'react';
import { Code, Database, Server, Globe } from 'lucide-react';
import { useParallax } from '../hooks/useScrollAnimation';
import AnimatedSection from './AnimatedSection';

const About = () => {
  const parallaxOffset = useParallax();

  const highlights = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Frontend Development',
      description: 'Expert in React, TypeScript, and modern CSS frameworks'
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: 'Backend Development',
      description: 'Proficient in Node.js, Express.js, and API development'
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: 'Database Design',
      description: 'Experienced with MongoDB, PostgreSQL, and data modeling'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Full Stack Solutions',
      description: 'End-to-end application development and deployment'
    }
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>
        <div 
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${parallaxOffset * 0.05}px) rotate(${parallaxOffset * 0.1}deg)` }}
        />
        <div 
          className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-amber-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse"
          style={{ 
            transform: `translateY(${parallaxOffset * -0.03}px) rotate(${-parallaxOffset * 0.08}deg)`,
            animationDelay: '1.5s'
          }}
        />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <div className="glass-dark rounded-2xl p-8 hover-glow">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-glow">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8 shimmer"></div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <AnimatedSection animation="fadeRight" delay={200}>
                <div className="glass rounded-xl p-6 hover-glow">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I'm <span className="text-cyan-400 font-semibold text-glow">Ashik Siddik</span>, a passionate Full Stack MERN Developer with over 5 years of experience 
                    building scalable web applications. My journey in software development started 
                    with a curiosity about how websites work, and it has evolved into a deep 
                    expertise in the entire web development stack.
                  </p>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fadeRight" delay={400}>
                <div className="glass rounded-xl p-6 hover-glow">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I specialize in creating responsive, user-friendly applications using the 
                    MERN stack (MongoDB, Express.js, React, Node.js). My approach combines 
                    technical excellence with creative problem-solving to deliver solutions 
                    that not only meet requirements but exceed expectations.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fadeRight" delay={600}>
                <div className="glass rounded-xl p-6 hover-glow">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    When I'm not coding, you'll find me exploring new technologies, contributing 
                    to open-source projects, or sharing knowledge with the developer community. 
                    I believe in continuous learning and staying updated with the latest industry trends.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fadeLeft" delay={300}>
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full p-1 hover:scale-105 transition-transform duration-500 glow-cyan">
                  <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center overflow-hidden glass">
                    <img
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
                      alt="Ashik Siddik - Full Stack Developer"
                      className="w-72 h-72 object-cover rounded-full hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
                
                {/* Enhanced floating elements around the image */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full animate-bounce glow-cyan"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce glow-purple" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 -left-8 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full animate-pulse glow-amber"></div>
                <div className="absolute top-1/4 -right-6 w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <AnimatedSection 
                key={index} 
                animation="fadeUp" 
                delay={index * 100}
                className="glass rounded-lg p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105 hover-glow"
              >
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300 glow-cyan">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-glow">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;