import React, { useState, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const CursorCircle = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringText, setIsHoveringText] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Update mouse position
      setPosition({ x: e.clientX, y: e.clientY });
      // Check the element under the cursor for the "hover-text" class
      const element = document.elementFromPoint(e.clientX, e.clientY);
      if (element && element.classList.contains('hover-text')) {
        setIsHoveringText(true);
      } else {
        setIsHoveringText(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.span
      className="fixed pointer-events-none z-[1000] rounded-full"
      animate={{
        x: position.x - (isHoveringText ? 15 : 10),
        y: position.y - (isHoveringText ? 15 : 10),
        width: isHoveringText ? 30 : 20,
        height: isHoveringText ? 30 : 20,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    />
  );
};

export default CursorCircle;
