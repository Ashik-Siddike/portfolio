import React, { useRef, useEffect, useState } from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: {
    text: string;
    author: string;
    source: string;
  };
  index: number;
  scrollDirection: 'up' | 'down';
}

const getAnimation = (
  inView: boolean,
  index: number,
  scrollDirection: 'up' | 'down'
) => {
  // Odd: right-in, left-out; Even: left-in, right-out
  const isOdd = index % 2 === 0;
  if (!inView) {
    if (scrollDirection === 'down') {
      return isOdd
        ? 'translate-x-full opacity-0'
        : '-translate-x-full opacity-0';
    } else {
      return isOdd
        ? '-translate-x-full opacity-0'
        : 'translate-x-full opacity-0';
    }
  }
  return 'translate-x-0 opacity-100';
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  index,
  scrollDirection,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
        else setInView(false);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-700 ease-out
        ${getAnimation(inView, index, scrollDirection)}
        bg-gradient-to-br from-white via-gray-50 to-gray-100
        rounded-3xl shadow-2xl border border-gray-200
        p-8 sm:p-10 mb-10
        max-w-2xl mx-auto
        group relative
        hover:shadow-[0_8px_32px_0_rgba(80,80,180,0.10)]
        hover:border-cyan-300
      `}
      style={{
        boxShadow: '0 8px 32px 0 rgba(80,80,180,0.10)',
      }}
    >
      {/* বড় কোটেশন আইকন */}
      <div className="absolute -top-8 left-8 sm:left-10 bg-cyan-500 rounded-full p-3 shadow-lg">
        <Quote className="h-8 w-8 text-white opacity-80" />
      </div>
      <blockquote className="text-gray-700 text-xl sm:text-2xl leading-relaxed mb-6 italic font-medium">
        “{testimonial.text}”
      </blockquote>
      <div className="flex items-center justify-between mt-4">
        <div>
          <div className="font-bold text-gray-900 text-lg sm:text-xl">
            {testimonial.author}
          </div>
          <div className="text-cyan-600 text-sm sm:text-base font-semibold mt-1">
            {testimonial.source}
          </div>
        </div>
        {/* ডেকোরেটিভ গ্র্যাডিয়েন্ট লাইন */}
        <div className="hidden sm:block w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
    </div>
  );
};

export default TestimonialCard; 