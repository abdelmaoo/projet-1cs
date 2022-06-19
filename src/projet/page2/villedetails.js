import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";

import "./villedetails.css"

import oran from "../assets/oran.jpeg"
import Navbar from "../page1/Navbar";
import Rotate90DegreesCcwIcon from '@material-ui/icons/Rotate90DegreesCcw';

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
<div className="ville" >Oran</div>
</div>
<div className="imageville11">
<div className="ville" >Setif</div>
</div>
<div className="imageville31">
<div className="ville" >Bejaia</div>
</div>
<div className="imageville131">
<div className="ville" >Bejaia</div>
</div>
<div className="imageville331">
<div className="ville" >Bejaia</div>
</div>



</div>




        </div>
     
    </div>
</div>

</div>
  );
};

export default VilleDetails;