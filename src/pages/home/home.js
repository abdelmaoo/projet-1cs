import React, { Component }  from 'react';



import './home.css';

import Pageone from '../../projet/page1/Pageone';
import Pagetwo from '../../projet/page2/Ville';
import Aboutville from '../../projet/page2/aboutville';
import Activities from '../../projet/page2/activities';
import Footer1 from '../../projet/page2/Footer';
import VilleDetails from '../../projet/page2/villedetails';


function Home() {
  return (
<div className='homeContainer'>


  <Pagetwo />
  <Aboutville />
  <Activities />

</div>
  );
}

export default Home;
