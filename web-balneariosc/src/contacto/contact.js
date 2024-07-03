import React from "react";
import NavBar from "../components/navBar-component";
import FormContact from "../components/form-contact-component";
import Footer from "../components/footer-component";
import '../styles/contact.css' ;
import img from './img/centro-civico.jpg' ;



const Contact = () => {
    return (
        
        <div className="page-container-contact">
            <NavBar />
        <div className="content-wrap">
        <div className="left-column">
                    <img src= {img} alt="Contact" className="contact-image" />
                    <div className="contact-info">
                        <h3>HORARIO DE ATENCIÓN</h3>
                        <p>Lunes a Viernes: 8:00 a 18:00</p>
                        <h4>TELÉFONO: 02983-456789</h4>
                        <h4>EMAIL: brio.sancayetano@gmail.com</h4>
                        
                    </div>
        </div>        
                <div className="right-column">
            <FormContact />
            </div>        
        </div>    
            <Footer />
        </div>
    );
};
export default Contact;