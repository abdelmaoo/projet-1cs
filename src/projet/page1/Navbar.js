import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import logocolors from "./../assets/logocolors.png";
import "./Navbar.css"



const Navbar = () => {


  return (
<div className="navbarContainer">
    <div className="leftsideNavbar">
<img src={logocolors} className="logoStyling" />
<div className="logoName" >
   
    Douwerni
   
</div>
    </div>
<div className="left">
<ul>
    <li style={{borderBottom: "1.5px solid #fff" }}>
Home
    </li>
    <li>
Contact us
    </li>
    <li>
About us
    </li>
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