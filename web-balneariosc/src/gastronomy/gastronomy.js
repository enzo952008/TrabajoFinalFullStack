import React from "react";
import NavBar from "../components/navBar-component";
import CardGastronomy from "../components/card-gastronomy-component";
import Footer from "../components/footer-component";
import '../styles/card-gastronomy.css';

const Gastronomy = () => {
    return (
        <div>
            <NavBar />
            <div>
                <CardGastronomy />
            </div>
            <Footer />
        </div>
    );
};
export default Gastronomy;
