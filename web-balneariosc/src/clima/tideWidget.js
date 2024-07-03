import React, { useEffect } from 'react';
import '../styles/tide.css';

const TideWidget = () => {
  useEffect(() => {
    // Crear un nuevo script solo si no existe
    if (!document.getElementById('wg_fwdg_171333_83_1719803883726')) {
      const script = document.createElement('script');
      script.id = 'wg_fwdg_171333_83_1719803883726';
      const arg = [
        "s=171333",
        "m=83",
        "uid=wg_fwdg_171333_83_1719803883726",
        "wj=knots",
        "tj=c",
        "waj=m",
        "tij=cm",
        "odh=0",
        "doh=24",
        "fhours=240",
        "hrsm=3",
        "vt=forecasts",
        "lng=es",
        "p=HTSGW,PERPW,DIRPW,SWELL1,SWPER1,SWDIR1,SWELL2,SWPER2,SWDIR2,WVHGT,WVPER,WVDIR"
      ];
      script.src = `https://www.windguru.cz/js/widget.php?${arg.join('&')}`;
      script.async = true;
      const widgetContainer = document.getElementById('tide_forecast');
      if (widgetContainer) {
        widgetContainer.appendChild(script);
      }
    }
  }, []);

  return (
    <div className="tide-widget-container">
      <h2 className="tide-title">MAREAS EN BALNEARIO SAN CAYETANO</h2>
      <div id="tide_forecast" className="tide-forecast">
        {/* El script de Windguru se insertará aquí */}
      </div>
    </div>
  );
};

export default TideWidget;
