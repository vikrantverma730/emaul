import React from "react";
import "./FooterStyle.css";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <h4>
              <FaHome
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              New York | New Jersey
            </h4>
            <div></div>
            <br />
          </div>
          <div className="phone">
            <h4>
              {" "}
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +1(201)-(638)-(2096)
            </h4>
          </div>
          <br />
          <div className="sms">
            <h4>
              {" "}
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              eemmanuel@emmanuelpc.com{" "}
            </h4>
          </div>
          <br />
        </div>
        <div className="right">
          <h4>About the company</h4>
          <br />
          <p>
            Embert has over 30 years of experience working with small and medium
            size companies as well as It solution options for new, star-up
            businesses and fortune 500 companies, in the Tri-state area
          </p>
          <br />
          <div className="social">
            <FaFacebook
              className="icon"
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaTwitter
              className="icon"
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
            <FaLinkedin
              className="icon"
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>

        <div className="right">
          <div className="helo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#ffd700"
                fill-opacity="7"
                d="M0,288L34.3,282.7C68.6,277,137,267,206,240C274.3,213,343,171,411,170.7C480,171,549,213,617,234.7C685.7,256,754,256,823,229.3C891.4,203,960,149,1029,149.3C1097.1,149,1166,203,1234,224C1302.9,245,1371,235,1406,229.3L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
              ></path>
            </svg>
            <br />
            <br />
            <h4>Emmanual Computer System</h4>
            <h4>© 2019 Emmanuel Computer Systems, LLC</h4>

            <br />
            <h4> Design By Fabvance solutions</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
