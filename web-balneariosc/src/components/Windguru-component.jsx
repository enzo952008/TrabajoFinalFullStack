// Windguru.js
import React from 'react';
import WindguruWidget from '../clima/windguruWidget.js';
import NavBar from './navBar-component.jsx';
import Footer from './footer-component.jsx';
import '../styles/windguruWidget.css';

const Windguru = () => {
  return (
    <div className="windguru-page">
      <NavBar />
      <div className="widget-container">
        <WindguruWidget />
      </div>
      <Footer />
    </div>
  );
};

export default Windguru;


