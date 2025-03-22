import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
return (
    <div className='w-full p-20 bg-amber-950 rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className='font-["Matter"] leading-[3.5vw] tracking-tight text-[4.5vw]'>
                Welcome to Template Market Place, your go-to destination for high-quality website templates.
        </h1>
         <div className='w-full border-t-[1px] pt-8 flex gap-5 border-amber-800 mt-10'>
            <div className='w-1/2'>
                <h1 className='text-6xl'>Our Templates:</h1>
             <Link to='/signup'>
               <button className='px-8 flex gap-8 items-center py-4 bg-zinc-900 mt-10 rounded-full text-white'>Explore Now
                    <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
                </button>
             </Link> 
            </div>
            <div className='w-1/2 h-[70vh]   object-cover overflow-hidden bg-[url("/temp1.png")] bg-center rounded-3xl'>
            </div>
         </div>
    </div>
)
}

export default About
