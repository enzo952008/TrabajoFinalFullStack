import React from "react";
import Lodging from "./lodging";
import NavBar from "../components/navBar-component";
import Footer from "../components/footer-component";
import '../styles/login.css';

const LodgingSection = () => {
    return (
        <div className="page-container">
            <NavBar />
            <div className="content-wrap">
                <Lodging />
            </div>
            <Footer />
        </div>
    );
};

export default LodgingSection;