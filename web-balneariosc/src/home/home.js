import React from 'react';
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
                <Footer />
                
            </div>
        );
    }
}

export default Home;