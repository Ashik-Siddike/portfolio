import { ExternalLink, Github, Calendar } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce solution with user authentication, payment processing, inventory management, and admin dashboard. Built with React, Node.js, MongoDB, and Stripe integration.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'JWT'],
      liveUrl: 'https://example-ecommerce.com',
      githubUrl: 'https://github.com/username/ecommerce',
      date: '2024',
      featured: true
    },
    {
      title: 'Real-Time Chat Application',
      description: 'A modern chat application with real-time messaging, file sharing, user presence indicators, and group chat functionality. Features include message encryption and push notifications.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'Redis', 'JWT'],
      liveUrl: 'https://example-chat.com',
      githubUrl: 'https://github.com/username/chat-app',
      date: '2023',
      featured: true
    },
    {
      title: 'Project Management Dashboard',
      description: 'A comprehensive project management tool with task tracking, team collaboration, time tracking, and reporting features. Includes drag-and-drop functionality and real-time updates.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'GraphQL'],
      liveUrl: 'https://example-pm.com',
      githubUrl: 'https://github.com/username/project-manager',
      date: '2023',
      featured: true
    },
    {
      title: 'Social Media Analytics',
      description: 'A powerful analytics dashboard for social media management with data visualization, sentiment analysis, and automated reporting features.',
      image: 'https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: 'https://example-analytics.com',
      githubUrl: 'https://github.com/username/social-analytics',
      date: '2023',
      featured: false
    },
    {
      title: 'Recipe Sharing Platform',
      description: 'A community-driven recipe sharing platform with user-generated content, ratings, reviews, and meal planning features.',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Cloudinary', 'Express'],
      liveUrl: 'https://example-recipes.com',
      githubUrl: 'https://github.com/username/recipe-platform',
      date: '2022',
      featured: false
    },
    {
      title: 'Learning Management System',
      description: 'An educational platform with course creation, video streaming, progress tracking, and certificate generation capabilities.',
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS S3', 'Stripe'],
      liveUrl: 'https://example-lms.com',
      githubUrl: 'https://github.com/username/lms-platform',
      date: '2022',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-500/10 to-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fadeUp" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A showcase of my recent work spanning full-stack web applications, 
              from e-commerce platforms to real-time applications
            </p>
          </AnimatedSection>

          {/* Featured Projects */}
          <div className="space-y-16 mb-20">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <AnimatedSection 
                  animation={index % 2 === 0 ? "fadeRight" : "fadeLeft"}
                  delay={200}
                  className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
                >
                  <div className="relative group overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <div className="flex space-x-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="pointer"
                          className="px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors flex items-center space-x-2 hover:scale-105"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span>Live Demo</span>
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-cursor="pointer"
                          className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2 hover:scale-105"
                        >
                          <Github className="h-4 w-4" />
                          <span>Code</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection 
                  animation={index % 2 === 0 ? "fadeLeft" : "fadeRight"}
                  delay={400}
                  className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}
                >
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span>{project.date}</span>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-800 text-cyan-400 rounded-full text-sm border border-gray-700 hover:border-cyan-400/50 hover:scale-105 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="pointer"
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
                    >
                      <ExternalLink className="h-5 w-5" />
                      <span>View Project</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor="pointer"
                      className="inline-flex items-center space-x-2 px-6 py-3 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 hover:border-gray-500 transition-all duration-200 hover:scale-105"
                    >
                      <Github className="h-5 w-5" />
                      <span>Source Code</span>
                    </a>
                  </div>
                </AnimatedSection>
              </div>
            ))}
          </div>

          {/* Other Projects */}
          <AnimatedSection animation="fadeUp" delay={600}>
            <h3 className="text-3xl font-bold text-white mb-8 text-center">
              Other Notable Projects
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((project, index) => (
                <AnimatedSection
                  key={index}
                  animation="fadeUp"
                  delay={index * 100}
                  className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 group hover:transform hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-gray-900/80 text-gray-300 text-xs rounded-full">
                        {project.date}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h4 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h4>
                    
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs hover:bg-gray-600 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    <div className="flex space-x-3 pt-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="pointer"
                        className="text-cyan-400 hover:text-cyan-300 transition-colors hover:scale-110"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="pointer"
                        className="text-gray-400 hover:text-white transition-colors hover:scale-110"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Projects;