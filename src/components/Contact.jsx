import React from 'react'

import Navbar from './Navbar';
import Footer from './Footer';
import HeroImg2 from './HeroImg2';
import Forms from './Forms';

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2  heading="CONTACT." text="Get in touch with us"/>
      <Forms/>
      <Footer/>
    </div>
  )
}

export default Contact;