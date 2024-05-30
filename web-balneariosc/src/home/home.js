import React from 'react';
import NavBar from './navbar/navBar';
import Carousel from './carousel/Carousel-component';
import Footer from './footer/footer';

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