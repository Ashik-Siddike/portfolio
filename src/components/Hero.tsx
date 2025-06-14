import React from 'react';
import { ArrowDown, Download } from 'lucide-react';
import { useParallax } from '../hooks/useScrollAnimation';
import AnimatedSection from './AnimatedSection';
import TypingAnimation from './TypingAnimation';

const Hero = () => {
  const parallaxOffset = useParallax();

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const typingTexts = [
    'Web Developer',
    'JavaScript Expert', 
    'UI/UX Designer'
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-amber-500/10"></div>
      <div 
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"
        style={{ transform: `translateY(${parallaxOffset * 0.1}px)` }}
      ></div>
      <div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"
        style={{ transform: `translateY(${parallaxOffset * -0.15}px)` }}
      ></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection animation="fadeDown" delay={200}>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Ashik Siddik
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={400}>
            <div className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight min-h-[80px] flex items-center justify-center">
              <TypingAnimation 
                texts={typingTexts}
                speed={150}
                deleteSpeed={75}
                pauseTime={2000}
                className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
              />
            </div>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeUp" delay={600}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Crafting digital experiences with MongoDB, Express.js, React, and Node.js.
              <br className="hidden md:block" />
              Passionate about building scalable web applications that make a difference.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="scale" delay={800}>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <button
                onClick={scrollToAbout}
                data-cursor="pointer"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-cyan-500/25"
              >
                View My Work
              </button>
              
              <a
                href="/resume.pdf"
                download
                data-cursor="pointer"
                className="px-8 py-4 border border-gray-600 text-gray-300 font-semibold rounded-lg hover:bg-gray-800 hover:border-gray-500 transform hover:scale-105 transition-all duration-200 flex items-center space-x-2 hover:shadow-lg hover:shadow-purple-500/25"
              >
                <Download className="h-5 w-5" />
                <span>Download Resume</span>
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="fadeUp" delay={1000}>
            <div className="flex items-center justify-center space-x-8 text-gray-400">
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-white">5+</div>
                <div className="text-sm">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-sm">Projects Completed</div>
              </div>
              <div className="w-px h-12 bg-gray-600"></div>
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fadeUp" delay={1200}>
          <button
            onClick={scrollToAbout}
            data-cursor="pointer"
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors animate-bounce hover:scale-110"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Hero;