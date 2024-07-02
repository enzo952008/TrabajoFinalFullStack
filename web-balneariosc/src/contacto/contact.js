import React from "react";
import NavBar from "../components/navBar-component";
import FormContact from "../components/form-contact-component";
import Footer from "../components/footer-component";
import '../styles/form-contact.css';
import '../styles/contact.css' ;


const Contact = () => {
    return (
        <div className="page-container">
            <NavBar />
            
            <div className="content-wrap">

                 <FormContact />
            </div>
            <Footer />
        </div>
    );
};
export default Contact;