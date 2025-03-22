import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const Insights = () => {
  const insights = [
    {
      title: "Design Trends 2023",
      image: "/insight1.png",
      description: "Explore the latest design trends and emerging technologies shaping the industry.",
      link: "/insight/design-trends-2023",
    },
    {
      title: "UX Best Practices",
      image: "/insight2.png",
      description: "Discover key principles for creating intuitive and engaging user experiences.",
      link: "/insight/ux-best-practices",
    },
    {
      title: "Case Study: Modern Templates",
      image: "/insight3.png",
      description: "Learn from our successful projects and gain insights into our design process.",
      link: "/insight/case-study-modern-templates",
    },
    {
      title: "Future of Web Design",
      image: "/insight4.png",
      description: "A look into upcoming innovations and the future of web design.",
      link: "/insight/future-web-design",
    },
  ];

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
    
        <Navbar/>
    <div className="min-h-screen bg-black text-white px-6 md:px-20 py-30">
      {/* Title & Intro */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1, ease: 'easeOut' }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold">Insights</h1>
        <p className="mt-4 text-lg md:text-xl">
          Gain valuable insights and knowledge from our in-depth articles and case studies.
        </p>
      </motion.div>

      {/* Insight Cards */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
      >
        {insights.map((insight, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl transition-all duration-300"
          >
            <img 
              src={insight.image} 
              alt={insight.title} 
              className="w-full h-64 object-cover" 
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold">{insight.title}</h2>
              <p className="mt-2 text-sm md:text-base">{insight.description}</p>
              <a 
                href={insight.link} 
                className="mt-4 inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300"
              >
                Read More
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
    </>
  );
};

export default Insights;
