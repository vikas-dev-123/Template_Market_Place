import React from 'react';
 
import LandingPage from '../components/landingpage';
import Marquee from '../components/Marquee';
import About from '../components/About';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
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

export default Home;