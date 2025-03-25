import React from 'react';
import LandingPage from '../components/landingpage';
import Marquee from '../components/Marquee';
import About from '../components/about';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Start = () => {
  return (
    <>
     <Navbar/>
      <LandingPage />
      <Marquee />
      <About/> 
      <Footer/>
    </>
  );
};

export default Start;