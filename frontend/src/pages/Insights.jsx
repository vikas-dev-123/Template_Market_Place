import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';

const Insights = () => {
  const insights =  [
    {
      title: "Design Trends 2023",
      image: "https://static.canva.com/static/images/canva_templates_array.jpg",
      description: "Explore the latest design trends and emerging technologies shaping the industry.",
      link: "/insight/design-trends-2023",
      moreInfo: "In-depth analysis of design trends for 2023, including color schemes, typography, and layout techniques."
    },
    {
      title: "UX Best Practices",
      image: "https://blog-frontend.envato.com/cdn-cgi/image/width=2400,quality=75,format=auto/uploads/sites/2/2021/11/CON204-NovemberBlog-SocialMediaTemplates.jpg",
      description: "Discover key principles for creating intuitive and engaging user experiences.",
      link: "/insight/ux-best-practices",
      moreInfo: "Learn about user research, wireframing, prototyping, and usability testing to enhance user experience."
    },
    {
      title: "Case Study: Modern Templates",
      image: "https://www.computerhope.com/jargon/t/template.jpg",
      description: "Learn from our successful projects and gain insights into our design process.",
      link: "/insight/case-study-modern-templates",
      moreInfo: "Detailed case study of our modern templates, showcasing the design process, challenges, and solutions."
    },
    {
      title: "Future of Web Design",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUtgCuCtwUtWtjLI8eYILJ8-u_9Krrnbf__A&s",
      description: "A look into upcoming innovations and the future of web design.",
      link: "/insight/future-web-design",
      moreInfo: "Explore the future of web design with insights into new technologies, tools, and methodologies."
    },
    {
      title: "Responsive Design",
      image: "https://tint.creativemarket.com/p1dyZw6avvntmu6UooYq8eAdNnqJJhyQVkP7IgjudaU/width:440/height:292/gravity:nowe/rt:fill-down/el:1/czM6Ly9maWxlcy5jcmVhdGl2ZW1hcmtldC5jb20vaW1hZ2VzL3NjcmVlbnNob3RzL3Byb2R1Y3RzLzUzMzAvNTMzMDIvNTMzMDI4OTcvc2xpZGU1LW8uanBnIzE3NDU0Njc5OTQ?1745467994",
      description: "Best practices for creating responsive and adaptive web designs.",
      link: "/insight/responsive-design",
      moreInfo: "Learn how to create web designs that work seamlessly across different devices and screen sizes."
    },
    {
      title: "Accessibility in Web Design",
      image: "https://st2.depositphotos.com/1181438/5861/v/450/depositphotos_58618377-stock-illustration-set-of-flyer-design-web.jpg",
      description: "Ensuring your web designs are accessible to all users.",
      link: "/insight/accessibility-web-design",
      moreInfo: "Understand the importance of accessibility and how to implement it in your web designs."
    },
    {
      title: "SEO for Modern Websites",
      image: "https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/7642501b-1c52-4a92-b1b4-298a039be132/presentations_promo-showcase_012x.png",
      description: "Optimizing your website for search engines.",
      link: "/insight/seo-modern-websites",
      moreInfo: "Learn the latest SEO techniques to improve your website's visibility and ranking on search engines."
    },
    {
      title: "E-commerce Design Tips",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqqaq270TQL6EZwVs12eDp2EmFkuRPBw-Jw&s",
      description: "Designing effective and user-friendly e-commerce websites.",
      link: "/insight/ecommerce-design-tips",
      moreInfo: "Discover tips and best practices for creating successful e-commerce websites."
    },
  ];

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <>
      <Navbar />
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className="relative group bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="p-6">{insight.moreInfo}</p>
              </div>
              <img 
                src={insight.image} 
                alt={insight.title} 
                className="w-full h-64 object-cover" 
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold">{insight.title}</h2>
                <p className="mt-2 text-sm md:text-base">{insight.description}</p>
               
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default Insights;