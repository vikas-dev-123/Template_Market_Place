import React from 'react';
import ThreeScene from './Template_1';


function Render() {
return (
    <div className="main  w-full h-screen bg-black">
        <nav className="fixed w-full top-0 left-0 px-10 py-3 flex justify-between items-center">
            <img className="w-[160px] mix-blend-lighten filter saturate-150 contrast-125" src="https://preview.redd.it/3d-rendered-the-cyberpunk-logo-using-blender-v0-khopj82wqee91.png?width=1080&crop=smart&auto=webp&s=0e62e74ba8b5ef6191228e855079491cfa56f57b" alt="Cyberpunk image" />
            <div className="flex gap-5 items-center">
                <a href="#" className="tracking-tight text-white hover:text-blue-600 hover:text-shadow transition-colors duration-300">Games</a>
                <a href="#" className="tracking-tight text-white hover:text-blue-600 hover:text-shadow transition-colors duration-300">News</a>
                <a href="#" className="tracking-tight text-white hover:text-blue-600 hover:text-shadow transition-colors duration-300">Community</a>
                <a href="#" className="tracking-tight text-white hover:text-blue-600 hover:text-shadow transition-colors duration-300">Store</a>
            </div>
        </nav>
        <div className="w-full  overflow-hidden">
            <img className="absolute w-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mix-blend-lighten filter saturate-150 contrast-125" src="https://preview.redd.it/3d-rendered-the-cyberpunk-logo-using-blender-v0-khopj82wqee91.png?width=1080&crop=smart&auto=webp&s=0e62e74ba8b5ef6191228e855079491cfa56f57b" alt="Cyberpunk image" />
            <div className="w-[20rem] h-[20rem] absolute rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 z-[-1] blur-[90px]"></div>
            <ThreeScene />
        </div>
        <div className="w-full h-screen flex justify-center items-center bg-black text-white">
            <div className="text-center">
                <h1 className="text-4xl font-md mb-4">The Cyber_Punk</h1>
                <p className="text-lg w-[50%] mb-4">
                    Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour, and body modification. You play as V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality.
                </p>
                <p className="text-lg w-[40%] ml-[50%]">
                    You can customize your character’s cyberware, skillset, and playstyle, and explore a vast city where the choices you make shape the story and the world around you.
                </p>
                <p className="text-lg w-[40%]  ">
                You can customize your character's cyberware, skillset, and playstyle to match your preferences. Explore a vast city where your choices shape the story and the world around you. Your decisions and challenges make your journey unique and unforgettable.
                </p>
            </div>
        </div>
    </div>
);
}

export default Render;