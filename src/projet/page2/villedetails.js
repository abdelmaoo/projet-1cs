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
        <br/>
        <br/>
        <br/>
            <div className="ktiba">
            Le fort de Santa-Cruz est un fort situé à Oran, en Algérie. Érigé par les Espagnols entre 1577 et 1604. Le fort a été théâtre de combats sanglants opposant Ottomans et Maures vassaux aux Espagnols. Ce fort se situe sur la crête du massif de l'Aïdour. Sa situation en faisait alors un point stratégique. 
            </div>

        </div>

        </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="leftcote">
<div className="leftcotefils">

    <button className="virtual" onClick={()=>{document.getElementById('cadre').style.visibility="visible"}}>
    Virtual visit 
    <Rotate90DegreesCcwIcon className="degree" />
    </button>

    <div id="cadre">
      <div class="frame">
        <button class="exitbtn" onClick={()=>{document.getElementById('cadre').style.visibility="hidden"}}>x</button>
        <iframe src="https://www.google.com/maps/embed?pb=!4v1655701791736!6m8!1m7!1sCAoSLEFGMVFpcFBWSnNiYmFFNGZiRVR1N2V2LXE2RzQ3eEdveXoyN1I0bWdRZEhD!2m2!1d35.70981778808101!2d-0.6634518012558356!3f173.27754306753454!4f5.67468394119382!5f0.7820865974627469" allowfullscreen="" loading="lazy" class="google" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>
    </div>
    
    
</div>
      </div>
        </div>
        <div className="foot">
        <div className="history1">Explore 
        <div className="santa">More about Santa Cruz</div> </div>
        <div className="villeContaine1">

            <a href='/assets/800px-Fort_Santa_Cruz_Oran1.jpg'><img src="/assets/800px-Fort_Santa_Cruz_Oran1.jpg" class="pic"></img></a>
            <a href='/assets/Oran_fort_santa_cruz_ON067.jpg'><img src="/assets/Oran_fort_santa_cruz_ON067.jpg" class="pic"></img></a>
            <a href='/assets/Fort_Santa_Cruz.jpg'><img src="/assets/Fort_Santa_Cruz.jpg" class="pic"></img></a>
            <a href='/assets/800px-Fort_Santa_Cruz_Oran1.jpg'><img src="/assets/800px-Fort_Santa_Cruz_Oran1.jpg" class="pic"></img></a>
            <a href='/assets/1.jpg'><img src="/assets/1.jpg" class="pic"></img></a>
            <a href='/assets/2.jpg'><img src="/assets/2.jpg" class="pic"></img></a>
            <a href='/assets/3.jpg'><img src="/assets/3.jpg" class="pic"></img></a>
            <a href='/assets/4.jpg'><img src="/assets/4.jpg" class="pic"></img></a>
            <a href='/assets/5.jpg'><img src="/assets/5.jpg" class="pic"></img></a>
            <a href='/assets/6.jpg'><img src="/assets/6.jpg" class="pic"></img></a>
          {/* <div className="imageville111"  >
          </div>
          <div className="imageville11">
          </div>
          <div className="imageville31">
          </div>
          <div className="imageville131">
          </div>
          <div className="imageville331">
          </div> */}



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