import React, { useState } from 'react';

const AnimatedGooeyEffect = () => {
  const [circles, setCircles] = useState([]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    const newCircle = { x, y, id };
    setCircles((prev) => [...prev, newCircle]);
    // Remove circle after 1 second
    setTimeout(() => {
      setCircles((prev) => prev.filter((circle) => circle.id !== id));
    }, 1000);
  };

  return (
    <div 
      onMouseMove={handleMouseMove} 
      className="relative w-full h-full" 
      style={{ filter: "url(#goo)" }}
    >
      {circles.map((circle) => (
        <div
          key={circle.id}
          className="absolute rounded-full"
          style={{
            left: circle.x - 15, // center the circle (30px/2)
            top: circle.y - 15,
            width: "30px",
            height: "30px",
            backgroundColor: "rgba(255, 255, 255, 0.6)",
            pointerEvents: "none",
            animation: "fadeAndExpand 1s forwards"
          }}
        ></div>
      ))}
    </div>
  );
};

export default AnimatedGooeyEffect;
