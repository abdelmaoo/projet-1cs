import React, { Component }  from 'react';

import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../../data";

import "./aboutville.css"
import Cadre from './Cadre';
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  background-color:red;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;




const Aboutville = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
<div className="aboutusContainer" >
<div className="heroAboutus">
<div className="about">
<div className="lfog" >About</div>
<div className="lta7t" >Oran</div>
</div>
<div className="villedesc" >
Oran, also called Wahrān, French Ouahran, city, northwestern Algeria.
 It lies along an open bay on the Mediterranean Sea coast, about midway between Tangier, Morocco, and Algiers, at the point where Algeria is closest to Spain. With the adjacent city of Mers el-Kebir, a fishing centre at the western end of the bay, Oran is the country’s second largest port, after Algiers. Pop. (2005) 724,000; (2010 est.) 770,000.
 Modern Oran is divided into a waterfront and old and new city sections occupying terraces above it that were formerly divided by a ravine (now built over). The old Spanish-Arab-Turkish city, called La Blanca, lies west of the ravine on a hill. The newer city, called La Ville Nouvelle and built by the French after 1831, occupies the terraces on the east bank of the ravine. La Blanca is crowned by the Turkish citadel of Santa Cruz, which was subsequently modified by the Spanish and the French. The Spanish quarter, with its narrow streets, contains the former Cathedral of Saint-Louis (rebuilt by the French in 1838), the Porte de Canastel (reconstructed in 1734), and the fountain in the Place Emerat (1789). In the Turkish part of the old town is the Great Mosque, built in 1796 with money obtained by ransoming Spanish captives. To the east lies the Château Neuf, former residence of the beys of Oran and later a French army headquarters. Near the Casbah, which surrounds the old Spanish castle, are the mosque of Sīdī el-Haowri, a 15th-century scholar and monk; the former barracks of the Janissaries; and the harem of the beys. The former French sector now spreads across the ravine and far outside the second city wall (built 1866; now largely demolished). This sector contains government and commercial offices and many mid-rise apartment buildings.
 </div>
 <div className="best" style={{marginTop: '40px' }} >
<div className="lfog1" >Best</div>
<div className="lta7t" >places to visit</div>
</div>
<div className="villedesc" >

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus quis scelerisque ultricies orci iaculis facilisis et. Felis dictum erat eget sit neque, a ut hendrerit. Tempus tellus pulvinar elit lobortis ut in. Eu nibh risus et massa a eget proin ut quis.
</div>
<div className='meryeem'>
  
<Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>

<Link to='/oran/santacruz' className="cadreContainer3" >

<div className="place" >Santa Cruz 
<div className='placa'>Chapel</div>
</div>


</Link>
<div className="cadreContainer1" >

<div className="place" >1st November
<div className='placa'>place</div>
</div>


</div>
<div className="cadreContainer2" >

<div className="place" >Canastel
<div className='placa'>Forest</div>
</div>


</div>


    <ArrowRightOutlined  direction="right" onClick={() => handleClick("left")}  className='ss'/>

</div>



<div className="best" style={{marginTop: '40px' }} >
<div className="lfog" >Consult</div>
<div className="lta7t" >new activities</div>
</div>
<div className="villedesc" >

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed cursus quis scelerisque ultricies orci iaculis facilisis et. Felis dictum erat eget sit neque, a ut hendrerit. Tempus tellus pulvinar elit lobortis ut in. Eu nibh risus et massa a eget proin ut quis.
</div>

</div>



</div>
  );
};

export default Aboutville;