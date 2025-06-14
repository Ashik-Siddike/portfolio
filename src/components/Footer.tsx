import React from 'react';
import { Code2, Github, Linkedin, Mail, Heart } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      href: 'https://github.com',
      name: 'GitHub'
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: 'https://linkedin.com',
      name: 'LinkedIn'
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: 'mailto:ashik.siddik@example.com',
      name: 'Email'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-500/5 to-amber-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <AnimatedSection animation="fadeUp" delay={100}>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Code2 className="h-8 w-8 text-cyan-400" />
                <span className="text-xl font-bold text-white">Ashik Siddik</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Full Stack MERN Developer passionate about creating innovative web solutions 
                that combine technical excellence with exceptional user experiences.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="pointer"
                    className="text-gray-400 hover:text-cyan-400 transition-all duration-200 hover:scale-110"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Quick Links */}
          <AnimatedSection animation="fadeUp" delay={200}>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Quick Links</h3>
              <nav className="grid grid-cols-2 gap-2">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    data-cursor="pointer"
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-left hover:scale-105"
                  >
                    {link.name}
                  </button>
                ))}
              </nav>
            </div>
          </AnimatedSection>

          {/* Contact Info */}
          <AnimatedSection animation="fadeUp" delay={300}>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Get In Touch</h3>
              <div className="space-y-2 text-gray-400">
                <p className="hover:text-cyan-400 transition-colors">📧 ashik.siddik@example.com</p>
                <p className="hover:text-cyan-400 transition-colors">📱 +1 (555) 123-4567</p>
                <p className="hover:text-cyan-400 transition-colors">📍 San Francisco, CA</p>
              </div>
              <div className="mt-4">
                <p className="text-sm text-gray-500">
                  Available for freelance opportunities and full-time positions.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Bottom Section */}
        <AnimatedSection animation="fadeUp" delay={400}>
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-400">
                <span>© {currentYear} Ashik Siddik. Made with</span>
                <Heart className="h-4 w-4 text-red-500 animate-pulse" />
                <span>using React & Tailwind CSS</span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <button
                  onClick={() => scrollToSection('#home')}
                  data-cursor="pointer"
                  className="hover:text-cyan-400 transition-colors hover:scale-105"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => scrollToSection('#home')}
                  data-cursor="pointer"
                  className="hover:text-cyan-400 transition-colors hover:scale-105"
                >
                  Terms of Service
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;