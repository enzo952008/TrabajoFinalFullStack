import React from 'react';
import DescriptionTourist from '../components/description-component';
import NavBar from '../components/navBar-component';
import Carousel from '../components/Carousel-component';
import Footer from '../components/footer-component';
import '../styles/home.css'

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