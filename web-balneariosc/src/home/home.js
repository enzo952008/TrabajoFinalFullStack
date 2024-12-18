import React from 'react';
import Windguru from '../components/Windguru-component';
import NavBar from '../components/navBar-component';
import Carousel from '../components/Carousel-component';
import TouristAttractions from '../components/TouristAttractions-component';
import Footer from '../components/footer-component'; 
import Login from '../login/login';
import Contact from '../contacto/contact';
import { Route, Routes,} from 'react-router-dom';
import '../styles/home.css'
import LodgingSection from '../lodging/lodgingSection';
import GastronomySection from '../gastronomy/gastronomySection';
import Profile from '../profile/profile';
import AguasDelPinar from '../aguasPinar/aguasDelPinar';




class Home extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Routes>
                    <Route path="/clima" component={Windguru} />
                    <Route path="/hospedaje" component={LodgingSection} />
                    <Route path="/gastronomia" component={GastronomySection} />
                    <Route path="/aguasdelpinar" component={AguasDelPinar} />
                    <Route path="/contacto" component={Contact} />
                     <Route path="/perfil" component={Profile} />
                    <Route path="/login" component={Login} /> 
                </Routes>
                <Carousel />
                <TouristAttractions/>
                <Footer />
            </div>
        );
    }
}
export default Home;