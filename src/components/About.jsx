import React from 'react'
import Footer from "../components/Footer";
import Navbar from './Navbar';
import HeroImg2 from './HeroImg2';
import AboutContent from './AboutContent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="ABOUT US" text=""/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About;