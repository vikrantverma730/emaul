import React from 'react'
import HeroImg from "../components/HeroImg";
import Navbar from './Navbar';
import Footer from './Footer';
import ProductCards from './ProductCards';
import ServiceCards from './ServiceCards';
import AboutContent from './AboutContent';




const Home = () => {
  return (
    <>
      <Navbar />
      <HeroImg />
      <div className="kite">
        <div className="home-about">
          <h1>Comprehensive Managed IT Services in New York and New Jersey for Small and Mid-Size Businesses</h1>
        </div>
        <div className="abiut">
          <p>Emmanuel Computer Systems, LLC is devoted to providing reliable Managed IT Services to small and mid-size businesses who want to improve productivity and profitability. Our comprehensive Managed Services can give you the peace of mind to stop worrying about your Information Technology and get back to achieving your business goals.
            With outsourced IT support services to Emmanuel Computer Systems, you’ll get fast, friendly, dependable support, from a local team of experienced professionals, at a predictable fixed monthly price. We can be your IT staff or we can supplement your internal IT staff in a number of ways. Whether you’re looking for computer network support, backup and disaster recovery services, help desk services, IT consulting, or IT security services, our team is here to help.</p>
        </div>


        <div className="home-about">
          <p>We are a Microsoft certified we specialize in providing up-to-date Microsoft technology-based customer solutions all over  NY and NJ.</p>
        </div>
        
        <div className="abiut">
          <h1>Connect with trusted Microsoft solution providers</h1>

        </div>
      </div>
      <AboutContent/>
      <ProductCards/>
      <ServiceCards/>
      <Footer/>
    </>
  )
}

export default Home;