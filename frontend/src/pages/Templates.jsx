import React from 'react';
import { Link } from 'react-router-dom';

const Templates = () => {
   
  const templates = [
    { name: 'Cyber Punk', image: '/cyberpunk.png', link: '/cyber-punk', bgColor: 'bg-red-500' },
    { name: 'Neon Wave', image: '/temp1.png', link: '/studio', bgColor: 'bg-green-500' },
    { name: 'Futuristic', image: '/futuristic.png', link: '/futuristic', bgColor: 'bg-blue-500' },
    { name: 'Dark Mode', image: '/darkmode.png', link: '/dark-mode', bgColor: 'bg-gray-700' },
    { name: 'Abstract', image: '/abstract.png', link: '/abstract', bgColor: 'bg-purple-500' },
    { name: 'Minimalist', image: '/minimalist.png', link: '/minimalist', bgColor: 'bg-teal-500' },
    { name: 'Vintage', image: '/vintage.png', link: '/vintage', bgColor: 'bg-orange-500' },
    { name: 'Elegant', image: '/elegant.png', link: '/elegant', bgColor: 'bg-pink-500' },
  ];

  return (
    <div className="bg-black min-h-screen px-20 py-10">
      <h1 className="text-white text-3xl font-bold mb-8">Explore Templates</h1>
      
      <div className="grid grid-cols-4 gap-6">
        {templates.map((template, index) => (
          <Link 
            key={index} 
            to={template.link} 
            className={`h-[200px] w-[300px] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ${template.bgColor}`}
          >
            <div 
              className="h-full w-full  flex items-center justify-center" 
              style={{ backgroundImage: `url(${templates.image})` }}
            >
              <div className="bg-black bg-opacity-60 w-full h-full flex items-center justify-center">
                <span className="text-white text-xl font-semibold">{template.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Templates;
