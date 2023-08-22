import React, { useState } from 'react';
import "./NavbarStyle.css";
import Img from "../assests/123.png"


import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);


    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 1) {
            setColor(true);
        } else {
            setColor(false);
        }
    };


    window.addEventListener("scroll", changeColor);




    return (
        <>
            <div className={color ? "header header-bg" : "header"}>
                <img src={Img} alt="" />


                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li>
                        <a href="/Home">Home</a>
                    </li>
                    <li>
                        <a href="/About">About</a>
                    </li>
                    <li>
                        <a href="/Service">Service</a>
                    </li>
                    <li>
                        <a href="/Product">Product</a>
                    </li>
                    <li>
                        <a href="/Contact">Contact</a>
                    </li>
                </ul>
                <br />

                

                <div className="hamburger" onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{ color: "#fff" }} />)
                        : (
                            <FaBars size={20} style={{ color: "#fff" }} />)}

                </div>


            </div>
        </>
    )
}

export default Navbar;
