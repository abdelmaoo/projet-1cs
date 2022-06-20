import React, { Component }  from 'react';

import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../../data";

import "./Ville.css"
import oran from "../assets/oran.jpeg"
import Navbar from "../page1/Navbar";



const Pagetwo = () => {

  return (
<div className="pageTwoContainer" >

<img src={oran}  className="image2" />
<div className="contentPage2" >
    <Navbar />
    <div className="villeText">
        <div className="oran">Oran</div>
        <div className="explore2" >Explore the second paris</div>
    </div>
</div>

</div>
  );
};

export default Pagetwo;