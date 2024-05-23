import React from 'react';
import './footer.css';
import logo1 from './img-footer/facebook.png'; // Asegúrate de tener los archivos de imagen
import logo2 from './img-footer/instagram.png'; // en el directorio correcto

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <p className="footer-text">TODOS LOS DERECHOS RESERVADOS | MUNICIPALIDAD SC.</p>
                <div className="footer-logos">
                    <img src={logo1} alt="Logo 1" />  {/* Usa la imagen importada */}
                    <img src={logo2} alt="Logo 2" />  {/* Usa la imagen importada */}
                </div>
            </div>
        );
    }
}

export default Footer;