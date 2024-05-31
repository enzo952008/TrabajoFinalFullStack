import React from 'react';
import NavBar from './navbar/navBar';
import Carousel from './carousel/Carousel-component';
import Footer from './footer/footer';
import './home.css'

class Home extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Carousel />
                <Footer />
            </div>
        );
    }
}

export default Home;