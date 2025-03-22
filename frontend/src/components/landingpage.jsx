// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import React from 'react'
import { Link } from 'react-router-dom';
 


const LandingPage = () => {
  
  return (
    <div data-scroll data-scroll-speed="-0.3" className='w-full bg-black text-white h-screen pt-1'>
        <div className='textstructure mt-40 px-20'>
            {["Creating an", "Template", "MarketPlace"].map((item, index) => {
                return (  
                <div className='masker'>
                  <div className='w-fit flex items-end overflow-hidden'>
                  {index === 1 && (
                  <motion.div initial={{width: "0%"}} animate={{width: "9vw"}} transition={{ease:[0.45, 0, 0.55, 1], duration:1}} className='h-[5vw] rounded-md mr-[1vw] relative -top-[0.1vw] '></motion.div>
                  )} 
                  <h1 className='uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-["Roboto Flex"] font-medium'>
                  {item}
                  </h1>
                  </div>
                </div>
                )
            })}
    </div>
         
        <div className='border-t-2 border-zinc-800 mt-28 flex flex-col md:flex-row justify-between items-center py-5 px-20'>
    {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
        <p key={index} className='text-md font-light leading-none'>{item}</p>
    ))}
    <div className='start flex items-center gap-5'> 
    <Link to="/signup" className='px-5 py-1 border-[1px] uppercase border-zinc-500 font-light text-md rounded-full mt-4 md:mt-0'>Continue to Journey</Link>
    <div className='w-10 h-10 border-[1px] flex items-center justify-center rounded-full'>
        <span className=' '>
           ^
        </span>
    </div>
    </div>
    </div>     
    </div>
  )
}

export default LandingPage
