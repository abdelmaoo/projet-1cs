import React, { Component }  from 'react';

import { BrowserRouter as Router ,Link , Routes , Route} from 'react-router-dom';

import './App.css';

import Home from './pages/home/home';
import Pageone from './projet/page1/Pageone';
import Cadre from './projet/page2/Cadre';
import Footer1 from './projet/page2/Footer';
import Pagetwo from './projet/page2/Ville';
import VilleDetails from './projet/page2/villedetails';


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Pageone/>}/>
          <Route exact path="/oran" element={<Home/>}/>
          <Route exact path="/oran/santacruz" element={<VilleDetails />}/>
         



        </Routes>
        <Footer1 />
   </Router>
  );
}

export default App;
