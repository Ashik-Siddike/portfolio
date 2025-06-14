import React from 'react';
import type { ReactNode } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' | 'fadeDown';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fadeUp',
  delay = 0,
}) => {
  const [ref, isVisible] = useScrollAnimation(0.1) as [React.RefObject<HTMLDivElement>, boolean];

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-1000 ease-out';
    
    if (!isVisible) {
      switch (animation) {
        case 'fadeUp':
          return `${baseClasses} opacity-0 translate-y-16`;
        case 'fadeDown':
          return `${baseClasses} opacity-0 -translate-y-16`;
        case 'fadeLeft':
          return `${baseClasses} opacity-0 translate-x-16`;
        case 'fadeRight':
          return `${baseClasses} opacity-0 -translate-x-16`;
        case 'scale':
          return `${baseClasses} opacity-0 scale-75`;
        default:
          return `${baseClasses} opacity-0 translate-y-16`;
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;