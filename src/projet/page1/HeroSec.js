import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import logocolors from "./../assets/logocolors.png";
import "./HeroSec.css"
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';



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
<div className="explore">
    Explore
</div>
<ArrowRightOutlined className="icon" />
</button>
</div>
<div className="heroRight">
    <div className="villeContaine">


    <div className="imageville1"  >
<div className="ville" >Oran</div>
</div>
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