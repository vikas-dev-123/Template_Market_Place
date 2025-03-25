/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';

const Marquee = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Adjust animation duration based on screen size
  const getAnimationDuration = () => {
    if (screenWidth < 640) return 15; // Mobile
    if (screenWidth < 1024) return 20; // Tablet
    return 25; // Desktop
  };

  return (
    <div 
      data-scroll 
      data-scroll-section 
      data-scroll-speed=".1" 
      className='w-full py-8 sm:py-12 md:py-16 lg:py-20 rounded-tl-2xl rounded-tr-2xl sm:rounded-tl-3xl sm:rounded-tr-3xl text-white bg-[#004D43]'
    >
      <div className='text border-t-[1px] sm:border-t-2 border-b-[1px] sm:border-b-2 flex border-zinc-300/70 overflow-hidden whitespace-nowrap'>
        {/* First Marquee with Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className='flex items-center'
        >
          <motion.h1 
            initial={{ x: "0" }} 
            animate={{ x: "-100%" }} 
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: getAnimationDuration() 
            }}
            className='uppercase font-extrabold font-["Matter"] tracking-tight sm:tracking-wide leading-none pr-4 sm:pr-6 md:pr-8 lg:pr-10'
          >
            <span className='text-[16vw] xs:text-[18vw] sm:text-[20vw] md:text-[18vw] lg:text-[16vw] xl:text-[14vw] 
              hover:text-green-300 transition-colors duration-300
              text-shadow-sm sm:text-shadow-md'
            >
              we are community of marketplace
            </span>
          </motion.h1>
        </motion.div>

        {/* Second Marquee with Scale Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
          className='flex items-center'
        >
          <motion.h1 
            initial={{ x: "0" }} 
            animate={{ x: "-100%" }} 
            transition={{ 
              repeat: Infinity, 
              ease: "linear", 
              duration: getAnimationDuration() 
            }}
            className='uppercase font-extrabold font-["Matter"] tracking-tight sm:tracking-wide leading-none pr-4 sm:pr-6 md:pr-8 lg:pr-10'
          >
            <span className='text-[16vw] xs:text-[18vw] sm:text-[20vw] md:text-[18vw] lg:text-[16vw] xl:text-[14vw] 
              hover:text-green-300 transition-colors duration-300
              text-shadow-sm sm:text-shadow-md'
            >
              we are community of marketplace
            </span>
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;