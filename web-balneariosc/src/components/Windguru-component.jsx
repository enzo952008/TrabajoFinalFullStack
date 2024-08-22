import React, { useEffect, useState } from 'react';
import WindguruWidget from '../clima/windguruWidget.js';
import NavBar from './navBar-component.jsx';
import Footer from './footer-component.jsx';
import TideWidget from '../clima/tideWidget.js';
import Loading from './loading-component.jsx';


const Windguru = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const timeoutId = setTimeout(() => {
          setLoading(false);
      }, 2000);
  
      return () => clearTimeout(timeoutId);
  }, []);
  
  return (
      <div className="windguru-page">
          <NavBar />
          {loading ? (
              <Loading />
          ) : (
              <>
                  <div className="widget-container">
                      <WindguruWidget />
                  </div>
                  <div>
                      <TideWidget />
                  </div>
              </>
          )}
          <Footer />
      </div>
  );
};

export default Windguru;


