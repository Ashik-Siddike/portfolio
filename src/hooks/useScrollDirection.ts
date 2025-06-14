import { useEffect, useRef, useState } from 'react';

export function useScrollDirection() {
  const [direction, setDirection] = useState<'up' | 'down'>('down');
  const lastScrollY = useRef(typeof window !== 'undefined' ? window.scrollY : 0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setDirection(currentY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return direction;
} 