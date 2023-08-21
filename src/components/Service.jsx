import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import HeroImg2 from './HeroImg2';
import ServiceCards from './ServiceCards';

const Service = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading="SERVICE." text="Here is Our Services"/>
      <ServiceCards/>
      <Footer/>
    </div>
  )
}

export default Service;