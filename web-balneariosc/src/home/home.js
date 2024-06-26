import React from 'react';
import Windguru from '../components/Windguru-component';
import NavBar from '../components/navBar-component';
import Carousel from '../components/Carousel-component';
import DescriptionTourist from '../components/description-component';
import TouristAttractions from '../components/TouristAttractions-component';
import Footer from '../components/footer-component'; 
import Login from '../login/login';
// import Clima from '../components/clima-component';
import { Route, Routes,} from 'react-router-dom';
import '../styles/home.css'
class Home extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Routes>
                    <Route path="/clima" component={Windguru} />
                    {/* <Route path="/hospedaje" component={Hospedaje} />
                    <Route path="/gastronomia" component={Gastronomia} />
                    <Route path="/aguasdelpinar" component={AguasDelPinar} />
                    <Route path="/contacto" component={Contacto} />
                    <Route path="/profile" component={Profile} /> */}
                    <Route path="/login" component={Login} /> 
                </Routes>
                <Carousel />
                <DescriptionTourist/>
                <TouristAttractions/>
                <Footer />
            </div>
        );
    }
}
export default Home;