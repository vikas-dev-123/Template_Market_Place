import React, { useState } from "react";
import {  AnimatePresence } from "framer-motion";

const GooeySwitch = () => {
  const [index, setIndex] = useState(0);

  const divs = [
    { id: 1, color: "bg-red-500", text: "Welcome to Template Market", content: "Find the best templates for your projects." },
    { id: 2, color: "bg-blue-500", text: "Our Templates", content: "Explore a wide range of templates for various needs." },
    { id: 3, color: "bg-green-500", text: "Pricing Plans", content: "Choose a pricing plan that suits your budget." },
    { id: 4, color: "bg-yellow-500", text: "Contact Us", content: "Get in touch with us for any queries or support." }
  ];

  const handleClick = () => {
    setIndex((prev) => (prev + 1) % divs.length);
  };

  return (
    <div className="relative w-screen h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute w-full h-screen">
        <svg viewBox="0 0 100 100" className="w-full h-full absolute">
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  
                      0 1 0 0 0  
                      0 0 1 0 0  
                      0 0 0 20 -10"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
        </svg>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className={`w-full h-full flex flex-col items-center justify-center text-white text-3xl font-bold cursor-pointer ${divs[index].color}`}
            style={{ filter: "url(#gooey)" }}
            initial={{ x: "-100%" , opacity: 0 }}
            animate={{ x:0, opacity: 1 }}
            exit={{  x:"100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            onClick={handleClick}
          >
            <h1>{divs[index].text}</h1>
            <p className="text-lg mt-4">{divs[index].content}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GooeySwitch;
