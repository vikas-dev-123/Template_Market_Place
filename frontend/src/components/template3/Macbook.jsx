import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei'
import MacContainer from './MacContainer'

const Macbook = () => {
  return (
    <div className='w-full bg-black h-screen'>
      <div className='navbar line flex gap-10 pt-10 pb-3 cursor-pointer absolute top-0 left-1/2 -translate-x-1/2'>
        {["iPhone", "iPad", 'Services', 'iOS', 'Mac', 'Products', "iPhone", "iPad", 'Services', 'iOS', 'Mac', 'Products'].map(e =>
          <a href='' className='text-white font-[400] capitalize text-md'>
            {e}
          </a>)}
      </div>
      <div className='absolute top-20 flex flex-col items-center left-1/2 text-white -translate-x-1/2'>
        <h3 className='masked text-4xl tracking-tighter font-[700]'>MacBook Pro.</h3>
        <p className='text-center w-3/4'>Experience the power and performance of the new MacBook Pro. Designed for professionals, it features the latest technology to help you achieve your best work.</p>
      </div>
      <div className='w-full h-screen py-20'>

      <Canvas camera={{ fov: 12, position: [0, -10, 220] }}>
        <Environment files={[
          "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"
        ]} />
        <ScrollControls>
          <MacContainer />
        </ScrollControls>
      </Canvas>
      </div>
      <style>
        {`.masked{
    position: relative;
    background: url('https://i.pinimg.com/originals/b5/79/63/b5796368b3e4ff1a9d595b24e3b8008c.jpg')
    no-repeat center center;
    -webkit-background-clip : text;
    background-clip: text;
    color: transparent;
    background-size: cover;
}

.masked::before{
    content: 'MacBook Pro.';
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
    height:100%;
    background: url('https://i.pinimg.com/originals/b5/79/63/b5796368b3e4ff1a9d595b24e3b8008c.jpg')
    no-repeat center center;
    -webkit-background-clip: text;
    background-clip:text;
    color:transparent;
    background-size: cover;
    filter: blur(40px);
    opacity: 0.8;
}
.masked::after{
    content: 'MacBook Pro.';
    position: absolute;
    top: 0;
    left: 0%;
    width: 100%;
    height:100%;
    background: url('https://i.pinimg.com/originals/b5/79/63/b5796368b3e4ff1a9d595b24e3b8008c.jpg')
    no-repeat center center;
    -webkit-background-clip: text;
    background-clip:text;
    color:transparent;
    background-size: cover;
    filter: blur(20px);
    opacity: 0.8;
}

.line{
    border-bottom: .4px solid #333;
     
}
::-webkit-scrollbar {
    display: none;
}
`}
      </style>
    </div>
  )
}

export default Macbook