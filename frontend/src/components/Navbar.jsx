/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed z-[999] text-white w-full px-6 md:px-20 py-4 md:py-6 flex justify-between items-center  backdrop-blur-md shadow-lg transition-all duration-300">

      {/* Premium Logo */}
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center"
      >
        <div className="relative flex items-center justify-center w-14 h-14 rounded-full  hover:scale-110 transition-transform duration-300">
          <span className="text-sm font-extrabold text-white tracking-wide">templatemarketplace</span>
        </div>
      </motion.div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.8 }}
          className={`links flex-col md:flex-row md:flex flex-wrap justify-center items-center gap-8 ${
            isOpen ? 'flex' : 'hidden'
          } md:flex`}
        >
          {[
            { name: "Home", path: "/" },
            { name: "Templates", path: "/templates" },
            { name: "Our work", path: "/our-work" },
            { name: "Insight", path: "/insight" },
            { name: "SignUp", path: "/signup" },
            { name: "Login", path: "/login" }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative group"
            >
              <Link 
                to={item.path} 
                className="relative text-md capitalize font-regular transition-transform duration-300 hover:scale-105"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
