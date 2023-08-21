import { Link } from "react-router-dom";
import "./AboutContentStyle.css";
import dell from "../assets/dell.jpg";
import op9 from "../assets/op9.jpg"

import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1> Who we are</h1>
        <p>
          The beginning of our commitment to providing solutions and service for
          the personal computer user both at home and in small businesses in the
          New York and New Jersey area. In 2000, The company business philosophy
          of providing solutions and service continued to govern our way of
          doing business
        </p>
        <Link to="/Contact">
          <button className="btn">Contact</button>
        </Link>
      </div>

      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={dell} className="img" alt="true" />
          </div>
          <div className="img-stack bottom">
            <img src={op9} className="img" alt="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
