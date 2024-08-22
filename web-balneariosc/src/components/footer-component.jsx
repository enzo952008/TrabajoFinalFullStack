import React from 'react';
import '../styles/footer.css';
import logo1 from '../home/footer/img-footer/facebook.png'; // Asegúrate de tener los archivos de imagen
import logo2 from '../home/footer/img-footer/instagram.png'; // en el directorio correcto

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <p className="footer-text">TODOS LOS DERECHOS RESERVADOS | MUNICIPALIDAD SC.</p>
                <div className="footer-logos">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src={logo1} alt="Facebook Logo" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={logo2} alt="Instagram Logo" />
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer;
