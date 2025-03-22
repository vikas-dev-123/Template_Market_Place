import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="fixed z-[999] w-full px-20 bg-black text-white py-8 flex justify-between">
      <div className='logo text-xl border h-15 w-32 px-9 py-2 rounded'>
        <span className='text-[30px] font-bold text-zinc-500'>T</span>
        <span className='text-[30px] font-bold text-zinc-500'>M</span>
      </div>
      <div className='links flex gap-10'>
        {[
          { name: "Templates", path: "/templates" },
          { name: "Our work", path: "/our-work" },
          { name: "Insight", path: "/insight" }
        ].map((item, index) => (
          <Link key={index} to={item.path} className="relative text-md capitalize font-regular">
            {item.name}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
          </Link>
        ))}
        <Link to="/signup" className="relative text-md capitalize font-regular ml-32 transition-transform duration-300 hover:scale-105">
          <div className="px-4 py-2 border border-white rounded   hover:transition text-center">
            SignUp
          </div>
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100"></span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;