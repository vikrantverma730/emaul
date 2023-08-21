import React from 'react'
import "./ProductCardsStyle.css";




const ProductCards = () => {
  return (
    <div className="products">
        <div className="card-container">
            <div className="card">
                <h4>Apple and PC Support</h4>
                <span className='bar'></span>
                <p>We have expertise in all types of systems including Apple Macs, tablets and cellphones.</p>
                
            </div>

            <div className="card">
                <h4>E-Mail spam product</h4>
                <span className='bar'></span>
                <p>Protect your email systems with anti-spam such as Barracuda Email Security Gateways.  Antivirus filters help protect systems from inbound malware, unsolicited and junk email that fills up your inboxes.</p>
                
            </div>

            <div className="card">
                <h4>IT Service</h4>
                <span className='bar'></span>
                <p>The company motto is to provide great and flexible solutions that will provide returns today and in the near future even though technology is constantly changing.</p>
                
            </div>

            <div className="card">
                <h4>Desktop & Laptop Repair</h4>              
                <span className='bar'></span>
                <p>Physical hardware repairs, ram upgrades, monitor repairs.  Quick ram upgrades can make your computers run faster without spending too much money.</p>
                
            </div>

            <div className="card">
                <h4>Servers & Network Setup</h4>
                <span className='bar'></span>
                <p>The latest in server systems such as Azure windows virtualization “in the cloud”.  Other server systems are kept patched and up to date.</p>
                
            </div>

            <div className="card">
                <h4>Back up data recovery experts</h4>
                <span className='bar'></span>
                <p>We remove viruses and malware from systems.  When hardware is damaged, data is recuperated from drives by creating backups and restoring to new hardware.</p>
            </div>

            <div className="card">
                <h4>Virtualization</h4>
                <span className='bar'></span>
                <p>The startup of Emmanuel Computer Systems., He beginning of our commitment to providing solutions and service for the personal computer user both at home and in small businesses in the New York and New Jersey area. In 2000, The company business philosophy of providing solutions and service continued to govern our way of doing business.</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCards;