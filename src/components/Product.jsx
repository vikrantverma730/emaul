import React from 'react'
import Footer from './Footer';
import Navbar from './Navbar';
import HeroImg2 from './HeroImg2';
import ProductCards from './ProductCards';


const Product = () => {
  return (
    <div >
      <Navbar/>
      <HeroImg2 heading="PRODUCTS." text="This is our Products"/>
      <ProductCards/>
      <Footer/>
      
    </div>
  )
}

export default Product;