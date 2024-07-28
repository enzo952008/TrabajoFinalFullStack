import React from "react";
import NavBar from "../components/navBar-component";
import Footer from "../components/footer-component";
import CarouselAguasP from "../components/carouselAguas-component";
import '../styles/aguasDelPinar.css' ;
import logo from "./carouselAgua/img/logoaguas.png" ;
import ticketimg from "./carouselAgua/img/tickets.png"


const AguasDelPinar = () => {
    return (
        
            <div className="container-principal">
                <div className="navbar-size">
                <NavBar /> 
                </div>
                <div className="container-carousel"> 
                <CarouselAguasP/>
                </div>
                <div className="container-green">
                    <div className="logo-text">
                        <img src= {logo} alt="logo aguas del pinar" className="logo-img"/>
                        <p className="texto"> 
                            El complejo consta de un estacionamiento vehicular; un sector recreativo con <br/>
                            cancha de fútbol, beach vóley, juegos infantiles y circuito de salud; las piletas <br/>
                            con sus cascadas, tobogán e hidromasaje, y un amplio solárium parquizado.  
                        </p>
                    </div>

                    <div className="bottonForm">
                        <img src= {ticketimg} alt="Imagen ticket" className="ticket" />
                        <button>¡Compra tu entrada!</button>
                    </div>
                </div>
                <Footer /> 
           </div>


    );
};
export default AguasDelPinar;