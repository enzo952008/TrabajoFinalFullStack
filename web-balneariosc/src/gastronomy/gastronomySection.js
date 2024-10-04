import React from "react";
import NavBar from "../components/navBar-component";
import Gastronomy from "./gastronomy";
import Footer from "../components/footer-component";
import '../styles/gastronomySection.css';

const GastronomySection = () => {
    return (
        <div className="page-container-gastronomy">
            <NavBar />
            <div className="page-background">
                <div className="overlay"></div> {/* Overlay negro */}
                <div className="content-wrap-gastronomy">
                    <Gastronomy />
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default GastronomySection;
