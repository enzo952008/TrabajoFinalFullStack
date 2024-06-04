import React from 'react';
import NavBar from './navbar/navBar';
import Carousel from './carousel/Carousel-component';
import Footer from './footer/footer';
import DescriptionTourist from './description/description-component';
import TouristAttractions from './atraccionesturisticas/TouristAttractions-component';
import './home.css'

class Home extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Carousel />
                <DescriptionTourist/>
                <TouristAttractions/>
                <Footer />
                
            </div>
        );
    }
}

export default Home;