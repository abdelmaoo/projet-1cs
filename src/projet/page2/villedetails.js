import React, { Component }  from 'react';

import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";

import "./villedetails.css"
import ReplayIcon from '@material-ui/icons/Replay';

import oran from "../assets/oran.jpeg"
import Navbar from "../page1/Navbar";
import Rotate90DegreesCcwIcon from '@material-ui/icons/Rotate90DegreesCcw';
import { Link } from 'react-router-dom';

const VilleDetails = () => {

  return (
<div className="VilleDetailsContainer" >
<img src={oran}  className="image2v" />
<div className="contentPage2v" >
    <Navbar />
    <div className="villeTextv">
        <div className="above">
      <div className="rightcote">
        <div className="textofhistory">
        <div className="history">History 
        <div className="santa">of Santa Cruz Chapel </div> </div>
            <div className="ktiba">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus quis scelerisque ultricies orci iaculis facilisis et. Felis dictum erat eget sit neque, a ut hendrerit.</div>

        </div>

      </div>
      <div className="leftcote">
<div className="leftcotefils">
<button className="virtual">
virtual visit 
<Rotate90DegreesCcwIcon className="degree" />
</button>
</div>
      </div>
        </div>
        <div className="foot">
        <div className="history1">Explore 
        <div className="santa">More about Santa Cruz</div> </div>
        <div className="villeContaine1">


<div className="imageville111"  >
</div>
<div className="imageville11">
</div>
<div className="imageville31">
</div>
<div className="imageville131">
</div>
<div className="imageville331">
</div>



</div>




        </div>
        <div className='story' >
            <Link to="/oran" className='styleit'>Back 
<ReplayIcon style={{marginLeft:'15px'}} />
            </Link>
        </div>
     
    </div>
</div>

</div>
  );
};

export default VilleDetails;