import React from 'react';
import NavBar from '../components/navBar-component';
import Carousel from '../components/Carousel-component';
import DescriptionTourist from '../components/description-component';
import Footer from '../components/footer-component';
import Login from '../login/login';
import { Route, Routes,} from 'react-router-dom';

import '../styles/home.css'

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