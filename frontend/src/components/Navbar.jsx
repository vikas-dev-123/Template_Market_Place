/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { UserDataContext } from '../context/UserContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const { user } = useContext(UserDataContext); // Access user context

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed z-[999] text-white w-full px-4 sm:px-6 md:px-20 py-3 sm:py-4 md:py-6">
      <div className="relative flex flex-wrap justify-between items-center backdrop-blur-md shadow-lg rounded-xl p-2 sm:p-3 md:p-4">
        {/* Logo Section */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center z-20"
        >
          <div className="relative flex items-center justify-center group">
            <span className="text-xs sm:text-sm md:text-base font-bold text-white tracking-wide group-hover:text-gray-300 transition-colors duration-300">
              templatemarketplace
            </span>
          </div>
        </motion.div>

        {/* Welcome Message */}
        {user && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-md px-3 md:px-6 py-1 md:py-2 rounded-full border border-white/10"
          >
            <span className="text-xs sm:text-sm md:text-base text-white font-medium truncate max-w-[120px] sm:max-w-[150px] md:max-w-none">
              Welcome, {user.fullname?.firstname || 'Guest'} 👋
            </span>
          </motion.div>
        )}

        {/* Mobile Menu Button */}
        <div className="md:hidden z-20">
          <button 
            onClick={toggleMenu} 
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <AnimatePresence>
          <motion.div
            initial={isMobile ? { opacity: 0, height: 0 } : { opacity: 0, x: 50 }}
            animate={isMobile ? 
              { opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 } : 
              { opacity: 1, x: 0, height: 'auto' }
            }
            exit={isMobile ? { opacity: 0, height: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.3 }}
            className={`${
              isOpen ? 'flex absolute top-full left-0 right-0 bg-black/90 backdrop-blur-md mt-2 rounded-xl p-4' : 'hidden'
            } md:relative md:flex md:top-auto md:bg-transparent md:p-0 md:mt-0
            flex-col md:flex-row items-center w-full md:w-auto gap-4 md:gap-8`}
          >
            {[
              { name: "Home", path: "/" },
              { name: "Templates", path: "/templates" },
              { name: "Our work", path: "/our-work" },
              { name: "Insight", path: "/insight" },
              ...(user
                ? [{ name: "Logout", path: "/user/logout" }] // Show Logout if user is logged in
                : [
                    { name: "SignUp", path: "/signup" }, // Show SignUp and Login if user is not logged in
                    { name: "Login", path: "/login" },
                  ]),
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group w-full md:w-auto"
              >
                <Link 
                  to={item.path} 
                  onClick={() => isMobile && setIsOpen(false)}
                  className="relative text-sm md:text-md capitalize font-medium block w-full md:w-auto text-center py-2 md:py-0 px-4 md:px-0
                    hover:text-gray-300 transition-colors duration-300"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"/>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;