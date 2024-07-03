// Windguru.js
import React from 'react';
import WindguruWidget from '../clima/windguruWidget.js';
import NavBar from './navBar-component.jsx';
import Footer from './footer-component.jsx';
import TideWidget from '../clima/tideWidget.js';


const Windguru = () => {
  return (
    <div className="windguru-page">
      <NavBar />
      <div className="widget-container">
        <WindguruWidget />
      </div>
      <div>
        <TideWidget/>
      </div>
      <Footer />
    </div>
  );
};

export default Windguru;


