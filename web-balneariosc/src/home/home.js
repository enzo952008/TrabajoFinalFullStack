import React from 'react';
import NavBar from '../components/navBar-component';
import Carousel from '../components/Carousel-component';
import Footer from '../components/footer-component';
import DescriptionTourist from '../components/description-component';
import './home.css'

class Home extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Carousel />
                <DescriptionTourist/>
                <Footer />
                
            </div>
        );
    }
}

export default Home;