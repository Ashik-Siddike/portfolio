import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { useParallax } from '../hooks/useScrollAnimation';
import AnimatedSection from './AnimatedSection';

const Experience = () => {
  const parallaxOffset = useParallax();

  const experiences = [
    {
      company: 'TechCorp Solutions',
      role: 'Senior Full Stack Developer',
      duration: '2022 - Present',
      location: 'San Francisco, CA',
      description: 'Lead developer for multiple high-traffic web applications serving 100K+ users. Architected and implemented scalable MERN stack solutions, optimized database performance by 40%, and mentored junior developers.',
      achievements: [
        'Led development of microservices architecture reducing system latency by 35%',
        'Implemented CI/CD pipelines reducing deployment time from hours to minutes',
        'Collaborated with cross-functional teams to deliver 15+ successful projects'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'GraphQL'],
      website: 'https://techcorp.com'
    },
    {
      company: 'Digital Innovations Inc.',
      role: 'Full Stack Developer',
      duration: '2020 - 2022',
      location: 'Austin, TX',
      description: 'Developed and maintained multiple client-facing web applications using the MERN stack. Collaborated with design and product teams to create responsive, user-friendly interfaces and robust backend APIs.',
      achievements: [
        'Built 8+ full-stack applications from concept to deployment',
        'Improved application performance by 50% through code optimization',
        'Integrated third-party APIs and payment gateways for e-commerce solutions'
      ],
      technologies: ['React', 'Express.js', 'MongoDB', 'PostgreSQL', 'Redux', 'Stripe'],
      website: 'https://digitalinnovations.com'
    },
    {
      company: 'StartupXYZ',
      role: 'Frontend Developer',
      duration: '2019 - 2020',
      location: 'Remote',
      description: 'Focused on frontend development for a fast-growing startup. Created responsive web applications, improved user experience, and worked closely with the backend team to integrate APIs.',
      achievements: [
        'Developed responsive interfaces increasing mobile user engagement by 60%',
        'Implemented state management solutions improving app performance',
        'Contributed to growing user base from 1K to 10K users'
      ],
      technologies: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Redux', 'REST APIs'],
      website: 'https://startupxyz.com'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/10 to-cyan-500/10 rounded-full blur-3xl"
        style={{ transform: `translateY(${parallaxOffset * 0.08}px)` }}
      />
      <div 
        className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-amber-500/10 to-purple-500/10 rounded-full blur-3xl"
        style={{ transform: `translateY(${parallaxOffset * -0.05}px)` }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300">
              My professional journey in full-stack development
            </p>
          </AnimatedSection>

          <div className="relative">
            {/* Animated timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-purple-500 to-amber-500 opacity-50">
              <div 
                className="absolute top-0 w-full bg-gradient-to-b from-cyan-400 via-purple-500 to-amber-500 transition-all duration-1000"
                style={{ height: `${Math.min(100, (parallaxOffset / 10))}%` }}
              />
            </div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <AnimatedSection
                  key={index}
                  animation="fadeLeft"
                  delay={index * 200}
                  className="relative pl-20"
                >
                  {/* Animated timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full border-4 border-black animate-pulse"></div>

                  <div className="bg-gray-900/50 p-8 rounded-xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300 hover:transform hover:scale-105 group">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center space-x-2 mb-2">
                          <h4 className="text-xl text-cyan-400 font-semibold">
                            {exp.company}
                          </h4>
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-cursor="pointer"
                            className="text-gray-400 hover:text-cyan-400 transition-colors hover:scale-110"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                      
                      <div className="text-gray-400 space-y-1">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h5 className="text-lg font-semibold text-white mb-3">
                        Key Achievements:
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-300 flex items-start space-x-2">
                            <span className="text-cyan-400 animate-pulse">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="text-lg font-semibold text-white mb-3">
                        Technologies Used:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm border border-gray-700 hover:border-cyan-400/50 hover:scale-105 transition-all duration-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          <AnimatedSection animation="scale" delay={800} className="mt-16 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-8 rounded-xl border border-gray-800/50 hover:border-gray-700/50 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready for New Opportunities
              </h3>
              <p className="text-gray-300 mb-6">
                I'm always interested in discussing new projects and opportunities. 
                Let's connect and see how we can work together!
              </p>
              <a
                href="#contact"
                data-cursor="pointer"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get In Touch
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Experience;