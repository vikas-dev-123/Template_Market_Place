// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='relative w-full min-h-screen bg-black text-white overflow-hidden'>

      {/* Animated Gradient Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-black animate-gradient"
      />

      {/* Floating Blurred Circles */}
      <motion.div 
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='absolute top-10 left-20 w-40 h-40 bg-purple-600 rounded-full blur-3xl opacity-30'
      />
      
      <motion.div 
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='absolute bottom-10 right-20 w-40 h-40   rounded-full blur-3xl opacity-30'
      />

      {/* Hero Section with Glassmorphism */}
      <div className='relative z-10 textstructure mt-32 px-6 md:px-20'>

        {["Creating an", "Template", "MarketPlace"].map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
            className={`masker ${
              index === 0 
                ? "bg-opacity-20 backdrop-blur-md border border-gray-700 rounded-xl p-6 hover:scale-105 transition-transform duration-500 shadow-xl"
                : ""
            }`}
          >
            <div className='w-fit flex items-end overflow-hidden'>
              {index === 1 && (
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "9vw" }}
                  transition={{ ease: [0.45, 0, 0.55, 1], duration: 1 }}
                  // className='h-[5vw] bg-gradient-to-r from-black to-white rounded-md mr-[1vw] relative -top-[0.1vw]'
                />
              )}
              <h1 className='uppercase text-[10vw] md:text-[7.5vw] leading-[8vw] md:leading-[6vw] tracking-tighter font-["Roboto Flex"] font-medium'>
                {item}
              </h1>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Info & CTA Section */}
      <div className='relative z-10 border-t-2 border-zinc-800 mt-20 md:mt-28 flex flex-col md:flex-row justify-between items-center py-10 px-6 md:px-20'>

        {/* Info Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='flex flex-col md:flex-row gap-6 md:gap-14 text-center md:text-left'
        >
          {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
            <p key={index} className='text-sm md:text-md font-light leading-none'>
              {item}
            </p>
          ))}
        </motion.div>

        {/* CTA Buttons with Neon Glow */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='start flex items-center gap-5 mt-6 md:mt-0'
        > 
          <Link 
            to="/signup" 
            className='px-6 py-2 border-[1px] uppercase border-zinc-500 font-light text-md rounded hover:scale-105 hover:shadow-neon-pink transition-all duration-300'
          >
            Continue to Journey
          </Link>

          <div className='w-12 h-12 border-[1px] flex items-center justify-center rounded-full hover:scale-110 hover:shadow-neon-blue transition-all duration-300'>
            <span className='text-lg font-bold'>↑</span>
          </div>
        </motion.div>
      </div>  
    </div>
  );
};

export default LandingPage;
