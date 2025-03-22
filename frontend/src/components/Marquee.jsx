/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import React from 'react';

const Marquee = () => {
  return (
    <div 
      data-scroll 
      data-scroll-section 
      data-scroll-speed=".1" 
      className='w-full py-20 rounded-tl-3xl rounded-tr-3xl text-white bg-[#004D43]'
    >
      <div className='text border-t-2 border-b-2 flex border-zinc-300 overflow-hidden whitespace-nowrap'>

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
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            className='uppercase font-extrabold font-["Matter"] tracking-wide leading-none pr-10'
          >
            <span className='text-[22vw] md:text-[20vw] lg:text-[18vw] xl:text-[16vw] hover:text-green-300 transition-colors duration-300'>
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
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
            className='uppercase font-extrabold font-["Matter"] tracking-wide leading-none pr-10'
          >
            <span className='text-[22vw] md:text-[20vw] lg:text-[18vw] xl:text-[16vw] hover:text-green-300 transition-colors duration-300'>
              we are community of marketplace
            </span>
          </motion.h1>
        </motion.div>

      </div>
    </div>
  );
};

export default Marquee;
