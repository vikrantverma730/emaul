import "./ServiceCardsStyle.css";
import dell from "../assets/dell.jpg";
import { NavLink } from "react-router-dom";
import hp from "../assets/hp.jpg";
import op3 from "../assets/op3.jpg"
import op6 from "../assets/op6.jpg"
import camera from "../assets/camera.jpg"
import server from "../assets/server.jpg"

const ServiceCards = () => {
  return (
    <>
      <div className="work-container">
        <h1 className="project-heading">Services</h1>
        <div className="project-container">
          <div className="project-card">
            <img src={hp} alt="img" />
            <h4 className="project-title">HP Services</h4>
            <div className="pro-details">
              <p>
                Use IT resources correctly by purchasing correct type of
                equipment for the job that is going to be used for
                <br />
                <span>
                  Pcs, laptops, enterprise equipment, printers, tablets, all in
                  one pcs{" "}
                </span>
              </p>
              <div className="pro-btns">
                <NavLink to="www.google.com" className="btn">
                  Get Service
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-container">
        <div className="project-card">
          <img src={dell} alt="img" />
          <h4 className="project-title">Dell Services</h4>
          <div className="pro-details">
            <p>
              We Provide a wide range of support for Dell Servers, Workstation
              and Laptops. Our sales team is constantly being trained on the
              latest technology and capabilities.
            </p>
            <div className="pro-btns">
              <NavLink to="www.google.com" className="btn">
                Get Service
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="project-container">
        <div className="project-card">
          <img src={op3} alt="img" />
          <h4 className="project-title">Dell work station</h4>
          <div className="pro-details">
            <p>
            Business solutions for Healthcare, Education and retail are our specialties.  We assess clients’ needs to match correct equipment such as servers, network equipment, printers and other hardware and software.</p>
            <div className="pro-btns">
              <NavLink to="www.google.com" className="btn">
                Get 
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="project-container">
        <div className="project-card">
          <img src={op6} alt="img" />
          <h4 className="project-title">Mac station</h4>
          <div className="pro-details">
            <p>
            We have expertise in all types of systems including Apple Macs, tablets and cellphones.</p>
            <div className="pro-btns">
              <NavLink to="www.google.com" className="btn">
                Read
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="project-container">
        <div className="project-card">
          <img src={camera} alt="img" />
          <h4 className="project-title">Security Camera</h4>
          <div className="pro-details">
            <p>Stay connected to home and Office, enhance the security of your property.
                 Security cameras and installation</p>
            <div className="pro-btns">
              <NavLink to="www.google.com" className="btn">
                Read
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="project-container">
        <div className="project-card">
          <img src={server} alt="img" />
          <h4 className="project-title">Structured Cabling systems</h4>
          <div className="pro-details">
            <p>Entrance facilities contain the cables, network demarcation point(s), connecting hardware, protection devices and other equipment that connect to the access provider (AP) or private network cabling.</p>
            <div className="pro-btns">
              <NavLink to="www.google.com" className="btn">
                Read
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCards;
