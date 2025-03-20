import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed z-[999] w-full px-6 md:px-20 py-4 md:py-8 flex justify-between bg-black">
    <div className="logo h-10 mb-2 border rounded border-white flex items-center justify-center px-4">
      <div className="text-white text-xl md:text-2xl font-bold">
        TEMPLATE
      </div>
    </div>
    <div className="links flex flex-col md:flex-row gap-4 md:gap-10 items-center">
      {["Home", "Templates", "Pricing", "Blog", "Contact"].map((item, index) => (
        <a key={index} href={`#${item.toLowerCase()}`} className="text-md capitalize text-white font-regular relative">
          {item}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
        </a>
      ))}
    </div>
  </div>
  );
};

export default Navbar;