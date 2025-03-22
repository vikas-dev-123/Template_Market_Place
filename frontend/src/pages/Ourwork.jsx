import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const Ourwork = () => {
  return (

    <>
    <Navbar/>
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-30">

      {/* Page Title and Intro */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold">Our Work</h1>
        <p className="mt-4 text-lg md:text-xl">
          Discover our portfolio of innovative projects and cutting-edge designs.
        </p>
      </motion.div>

      {/* Project Cards */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        {/* Project Card 1 */}
        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img 
            src="/project1.png" 
            alt="Project One" 
            className="w-full h-64 object-cover" 
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold">Project One</h2>
            <p className="mt-2 text-sm md:text-base">
              A brief description highlighting innovative features and modern design.
            </p>
          </div>
        </motion.div>

        {/* Project Card 2 */}
        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <img 
            src="/project2.png" 
            alt="Project Two" 
            className="w-full h-64 object-cover" 
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold">Project Two</h2>
            <p className="mt-2 text-sm md:text-base">
              A creative project that redefines aesthetics and user engagement.
            </p>
          </div>
        </motion.div>

        {/* Add more project cards as needed */}
        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <img 
            src="/project3.png" 
            alt="Project Three" 
            className="w-full h-64 object-cover" 
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold">Project Three</h2>
            <p className="mt-2 text-sm md:text-base">
              An engaging design that combines functionality with visual flair.
            </p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ scale: 1.03 }}
          className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <img 
            src="/project4.png" 
            alt="Project Four" 
            className="w-full h-64 object-cover" 
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold">Project Four</h2>
            <p className="mt-2 text-sm md:text-base">
              A testament to innovation, pushing boundaries in design and execution.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
    </>
  );
};

export default Ourwork;
