import React from 'react';
import { Star, Quote } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const Reviews = () => {
  const testimonials = [
    {
      text: "Ashik is an exceptional developer! His attention to detail and ability to deliver high-quality work on time is remarkable. The MERN stack expertise really shows in the final product. Will definitely hire again!",
      author: "Sarah Johnson",
      source: "via Upwork",
      rating: 5
    },
    {
      text: "Outstanding work on our React application. Ashik's expertise in the MERN stack helped us launch our product ahead of schedule. Professional communication throughout the project. Highly recommended!",
      author: "Mike Chen",
      source: "via Fiverr",
      rating: 5
    },
    {
      text: "Professional, skilled, and communicative. Ashik transformed our outdated website into a modern, responsive masterpiece using React and Node.js. Exceeded all expectations!",
      author: "Emily Rodriguez",
      source: "via Freelancer",
      rating: 5
    },
    {
      text: "Incredible developer with deep knowledge of modern web technologies. Ashik delivered a complex full-stack application flawlessly. His MongoDB and Express.js skills are top-notch. A true professional!",
      author: "David Thompson",
      source: "via LinkedIn",
      rating: 5
    },
    {
      text: "Working with Ashik was a game-changer for our startup. His technical skills in React and Node.js, combined with problem-solving abilities, are exceptional. Will work with him again!",
      author: "Lisa Park",
      source: "via Upwork",
      rating: 5
    },
    {
      text: "Ashik's code quality is exceptional. Clean, well-documented, and scalable solutions using the full MERN stack. He's not just a developer, he's a true software architect!",
      author: "James Wilson",
      source: "via GitHub",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-gray-100 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSection animation="fadeUp" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Client Reviews
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            What clients say about working with Ashik Siddik
          </p>
        </AnimatedSection>

        {/* Vertical testimonial cards */}
        <div className="max-w-4xl mx-auto space-y-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection
              key={index}
              animation="fadeUp"
              delay={index * 150}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-gray-300 group">
                {/* Quote icon */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <Quote className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    {/* Rating stars */}
                    <div className="flex space-x-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="h-5 w-5 text-amber-400 fill-current"
                        />
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Author info */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-gray-900 text-lg">
                          {testimonial.author}
                        </div>
                        <div className="text-gray-500 text-sm">
                          {testimonial.source}
                        </div>
                      </div>
                      
                      {/* Decorative element */}
                      <div className="hidden sm:block w-16 h-px bg-gradient-to-r from-cyan-500 to-purple-600 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Call to action */}
        <AnimatedSection animation="fadeUp" delay={900} className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Work Together?
            </h3>
            <p className="text-gray-600 mb-6">
              Join these satisfied clients and let's build something amazing together with Ashik Siddik!
            </p>
            <a
              href="#contact"
              data-cursor="pointer"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 hover:scale-105 hover:shadow-lg shadow-md"
            >
              Start Your Project
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Reviews;