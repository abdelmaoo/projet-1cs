import React, { Component }  from 'react';

import { ArrowLeftOutlined, ArrowRightOutlined, Face } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../../data";
import PlaceIcon from '@material-ui/icons/Place';
import "./Footer1.css"
import logo from "../assets/logocolors.png"
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
import { Link } from 'react-scroll';






const Footer1 = () => {

  return (
<div className="FooterContainer" id="contactlta7t" >
<Link className="onelogo" to="navbar" spy={true} smooth={true} duration={1000}>
   
    <img src={logo} className="editlogo" />

    


</Link>
<div className="]">
    <div className="titleservice">Our services</div>
<div className="unservice">Carte numerique</div>
<div className="unservice">Itineraires</div>
<div className="unservice"><a href='/'>Visites guidees</a></div>
<div className="unservice">Login</div>

</div>
<div className="services">
<div className="titleservice">About us</div>
<div className="unservice">Contact us</div>
<div className="unservice">FAQ</div>
{/* <div className="unservice">About us</div>
<div className="unservice">About us</div> */}
</div>
<div className="services">
<div className="titleservice">Contact us</div>
<div className="un">
    <PlaceIcon fontSize="16px" />
    <div>Didouche Mourad street, Algiers.</div>
</div>
<div className="un">
    <PhoneAndroidIcon fontSize="16px" />
    <div>+213 (0)21 61 45 45..</div>
</div>
<div className="sm">
<Facebook />
<Instagram />
<MailOutline />
<Twitter />
</div>

</div>

</div>
  );
};

export default Footer1;