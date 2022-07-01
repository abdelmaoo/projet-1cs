import React, { Component }  from 'react';

import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import logocolors from "./../assets/logocolors.png";
import "./Navbar.css"
import { Link } from 'react-scroll';



const Navbar = () => {


  return (
<div id="navbar" className="navbarContainer">
    <div className="leftsideNavbar">
<img src={logocolors} className="logoStyling" />
<div className="logoName" >
   
    Douwerni
   
</div>
    </div>
<div className="left">
<ul>
    <a href="/" class="bruh" >
        <li style={{borderBottom: "1.5px solid #fff" }}>
Home
        </li>
    </a>
    <Link to="contactlta7t" spy={true} smooth={true} duration={1000}>
        <li>
            Contact us
        </li>
    </Link>
<Link to="contactlta7t" spy={true} smooth={true} duration={1000}>
    <li>
        About us
    </li>
</Link>

</ul>
</div>
<div className="right">
<div className="endContainer">
<div className="login" >Log In </div>
<button className="signup" >Sign Up</button>
</div>
</div>
</div>
  );
};

export default Navbar;