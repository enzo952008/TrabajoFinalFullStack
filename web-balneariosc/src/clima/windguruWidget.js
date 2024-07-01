import React, { useEffect } from 'react';
import '../styles/windguruWidget.css';

const WindguruWidget = () => {
  useEffect(() => {
    // Crear un nuevo script solo si no existe
    if (!document.getElementById('wg_fwdg_900301_100_1718834220507')) {
      const script = document.createElement('script');
      script.id = 'wg_fwdg_900301_100_1718834220507';
      const arg = [
        "s=900301",
        "m=100",
        "uid=wg_fwdg_900301_100_1718834220507",
        "wj=knots",
        "tj=c",
        "waj=m",
        "tij=cm",
        "odh=0",
        "doh=24",
        "fhours=240",
        "hrsm=2",
        "vt=forecasts",
        "lng=es",
        "idbs=1",
        "p=WINDSPD,GUST,SMER,TMPE,FLHGT,CDC,APCP1s,RATING"
      ];
      script.src = `https://www.windguru.cz/js/widget.php?${arg.join('&')}`;
      script.async = true;
      const widgetContainer = document.getElementById('windguru_forecast');
      if (widgetContainer) {
        widgetContainer.appendChild(script);
      }
    }
  }, []);

  return (
    <div className="windguru-widget-container">
      <h2 className="windguru-title">EL CLIMA EN BALNEARIO SAN CAYETANO</h2>
      <div id="windguru_forecast" className="windguru-forecast">
        {/* El script de Windguru se insertará aquí */}
      </div>
    </div>
  );
};

export default WindguruWidget;
