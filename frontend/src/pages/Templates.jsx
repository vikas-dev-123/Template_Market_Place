import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const Templates = () => {
  const templates = [
    { name: 'Cyber Punk', image: '/cyberpunk.png', link: '/cyber-punk', bgColor: 'bg-red-500', cost: '$49' },
    { name: 'Neon Wave', image: '/studio.png', link: '/studio', bgColor: 'bg-green-500', cost: '$39' },
    { name: 'Futuristic', image: '/futuristic.png', link: '/futuristic', bgColor: 'bg-blue-500', cost: '$59' },
    { name: 'Dark Mode', image: '/darkmode.png', link: '/dark-mode', bgColor: 'bg-gray-700', cost: '$29' },
    { name: 'Abstract', image: '/abstract.png', link: '/abstract', bgColor: 'bg-purple-500', cost: '$45' },
    { name: 'Minimalist', image: '/minimalist.png', link: '/minimalist', bgColor: 'bg-teal-500', cost: '$35' },
    { name: 'Vintage', image: '/vintage.png', link: '/vintage', bgColor: 'bg-orange-500', cost: '$40' },
    { name: 'Elegant', image: '/elegant.png', link: '/elegant', bgColor: 'bg-pink-500', cost: '$55' },
  ];

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
    <Navbar/>
    <div className="bg-black min-h-screen px-10 py-10">
      {/* Optionally, include <CursorCircle /> here if you want the custom cursor effect globally */}
      <h1 className="text-white text-3xl font-bold mb-8"> </h1>
      
      <motion.div 
         className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
         initial="hidden"
         animate="visible"
         transition={{ staggerChildren: 0.2 }}
      >
        {templates.map((template, index) => (
          <motion.div 
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="rounded-lg overflow-hidden shadow-lg transition-transform duration-300"
          >
            <Link to={template.link}>
              <div 
                className="h-[250px] w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${template.image})` }}
              ></div>
            </Link>
            <div className="p-4 bg-[#00000049]">
              <h2 className="text-xl font-semibold text-white">{template.name}</h2>
              <p className="text-white text-lg my-2">{template.cost}</p>
              <div className="flex gap-3">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2   text-white text-sm rounded-full transition-all duration-300"
                >
                  Preview
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2   text-white text-sm rounded-full transition-all duration-300"
                >
                  Add to Cart
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2   text-white text-sm rounded-full transition-all duration-300"
                >
                  Buy Now
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
    </>
  );
};

export default Templates;
