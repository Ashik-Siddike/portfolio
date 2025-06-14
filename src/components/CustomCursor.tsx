import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e: Event) => {
      const target = e.target;
      if (target instanceof Element && target.matches('a, button, [data-cursor="pointer"]')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target;
      if (target instanceof Element && target.matches('a, button, [data-cursor="pointer"]')) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {/* Main cursor */}
      <div
        className={`fixed top-0 left-0 w-6 h-6 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-150 ease-out ${
          isHovering ? 'scale-150' : 'scale-100'
        } ${isClicking ? 'scale-75' : ''}`}
        style={{
          transform: `translate(${position.x - 12}px, ${position.y - 12}px) scale(${
            isHovering ? 1.5 : isClicking ? 0.75 : 1
          })`,
        }}
      />
      
      {/* Cursor trail */}
      <div
        className="fixed top-0 left-0 w-12 h-12 border-2 border-cyan-400/30 rounded-full pointer-events-none z-40 transition-all duration-300 ease-out"
        style={{
          transform: `translate(${position.x - 24}px, ${position.y - 24}px) scale(${
            isHovering ? 2 : 1
          })`,
        }}
      />
    </>
  );
};

export default CustomCursor;