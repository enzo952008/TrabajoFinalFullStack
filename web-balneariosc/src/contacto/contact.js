import React from "react";
import NavBar from "../components/navBar-component";
import FormContact from "../components/form-contact-component";
import Footer from "../components/footer-component";
import '../styles/contact.css' ;
import img from './img/imgcarousel.JPG' ;



const Contact = () => {
    return (
        
        <div className="page-container">
            <NavBar />
        <div className="content-wrap">
        <div className="left-column">
                    <img src= {img} alt="Contact" className="contact-image" />
                    <div className="contact-info">
                        <p>HORARIO DE ATENCIÓN</p>
                        <p>EMAIL@GMAIL.COM</p>
                        <p>TELÉFONO 12352561</p>
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