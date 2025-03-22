import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedGooeyEffect from './AnimatedGooeyEffect'; // Adjust the import path as needed

const About = () => {
  return (
    <div className="w-full p-10 md:p-20 bg-amber-950 rounded-tl-3xl rounded-tr-3xl text-black">
      
      {/* SVG Filter Definition for Gooey Effect */}
      <svg width="0" height="0">
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix 
            in="blur" 
            mode="matrix" 
            values="
              1 0 0 0 0  
              0 1 0 0 0  
              0 0 1 0 0  
              0 0 0 18 -7" 
            result="goo" 
          />
          <feBlend in="SourceGraphic" in2="goo" />
        </filter>
      </svg>

      <h1 className='font-["Matter"] leading-[3.5vw] tracking-tight text-[4.5vw]'>
        Welcome to Template Market Place, your go-to destination for high-quality website templates.
      </h1>
      
      <div className="w-full border-t-[1px] pt-8 flex flex-col md:flex-row gap-5 border-amber-800 mt-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-6xl">Our Templates:</h1>
          <Link to='/signup'>
            <button className="px-8 flex gap-8 items-center py-4 bg-zinc-900 mt-10 rounded-full text-white">
              Explore Now
              <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
          </Link>
        </div>
       
      <div className="mt-16">
        <h2 className="text-4xl font-bold text-center mb-10">
          Experience Our 3D Templates
        </h2>
        <div className="scene mx-auto">
          <div className="cube">
            <div className="cube-face cube-face-front">Front</div>
            <div className="cube-face cube-face-back">Back</div>
            <div className="cube-face cube-face-right">Right</div>
            <div className="cube-face cube-face-left">Left</div>
            <div className="cube-face cube-face-top">Top</div>
            <div className="cube-face cube-face-bottom">Bottom</div>
          </div>
        </div>
      </div>

      {/* Embedded CSS for 3D Cube */}
      <style>{`
        .scene {
          width: 200px;
          height: 200px;
          perspective: 600px;
          margin: 0 auto;
        }
        .cube {
          width: 100%;
          height: 100%;
          position: relative;
          transform-style: preserve-3d;
          animation: rotateCube 8s infinite linear;
        }
        .cube-face {
          position: absolute;
          width: 200px;
          height: 200px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
        }
        .cube-face-front  { transform: translateZ(100px); }
        .cube-face-back   { transform: rotateY(180deg) translateZ(100px); }
        .cube-face-right  { transform: rotateY(90deg) translateZ(100px); }
        .cube-face-left   { transform: rotateY(-90deg) translateZ(100px); }
        .cube-face-top    { transform: rotateX(90deg) translateZ(100px); }
        .cube-face-bottom { transform: rotateX(-90deg) translateZ(100px); }
        @keyframes rotateCube {
          from { transform: rotateX(0deg) rotateY(0deg); }
          to { transform: rotateX(360deg) rotateY(360deg); }
        }
      `}</style>
      </div>

      {/* New Section: Animated 3D Template Preview */}
    </div>
  );
};

export default About;
