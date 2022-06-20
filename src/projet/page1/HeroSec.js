import React, { Component }  from 'react';

import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import logocolors from "./../assets/logocolors.png";
import "./HeroSec.css"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import { Link } from 'react-router-dom';



const HeroSec = () => {


  return (
<div className="HeroSecContainer">
<div className="hero">
<div className="heroLeft" >
<div className="heroLeftTop">
    <div className="visit">
Visit
    </div>
    <div className="algeria">
Algeria
    </div>
</div>
<button className="heroLeftBottom">

    <select className="explore">
        <option class="opt" value="Explore" disabled selected>Explore</option>
        <option class="opt" value="volvo"><a href='./oran'>Oran</a></option>
        <option class="opt" value="saab">Sidi Bel Abbes</option>
        <option class="opt" value="opel">Setif</option>
        <option class="opt" value="audi">Bejaia</option>
    </select>

<ArrowRightOutlined className="icon" />
</button>
</div>
<div className="heroRight">
    <div className="villeContaine">


    <Link  className="imageville1"  to="/oran" >
<div className="ville" >Oran</div>
</Link>
<div className="imageville2">
<div className="ville" >Setif</div>
</div>
<div className="imageville3">
<div className="ville" >Bejaia</div>
</div>


    </div>
    <div className="slider">
        <div className="sliderhero">
        <ArrowLeftOutlined  className="arrow"/>
        <div className="point"></div>
        <div className="point"></div>
        <div className="point"></div>

        <ArrowRightOutlined className="arrow" />
        </div>


    </div>

</div>
</div>

</div>
  );
};

export default HeroSec;