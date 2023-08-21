import "./HeroImg2Style.css";
import Introimg from "../assets/op112.jpg"


import React, { Component } from 'react'

class HeroImg2 extends Component {
  render(){
    
  return (<div className="hero-img">
  <div className="heading">
      <img className="intro-img" src={Introimg} alt="" />
  </div>

  <div className="content">
      <p>{this.props.text}</p>
      <h1>{this.props.heading}</h1>
  </div>
</div>);
  }
}

export default HeroImg2;