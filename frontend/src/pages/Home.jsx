import React from 'react';
import Navbar from '../components/Navbar';
import LandingPage from '../components/landingpage';
import Marquee from '../components/Marquee';
import About from '../components/about';

const Home = () => {
  return (
    <>
      <Navbar />
      <LandingPage />
      <Marquee />
      <About/> 
    </>
  );
};

export default Home;