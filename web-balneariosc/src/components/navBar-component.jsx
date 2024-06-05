// src/navbar/NavBar.js
import React from 'react';
import '../styles/navBar.css';
import logobalneario from '../home/navbar/img-navbar/logobalneario.png';
import profile from '../home/navbar/img-navbar/profile.png';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    componentDidMount() {
        const menuToggle = document.getElementById('menu-toggle');
        const menuLinks = document.getElementById('menu-links');

        menuToggle.addEventListener('click', function() {
            if (menuLinks.style.display === 'flex') {
                menuLinks.style.display = 'none';
            } else {
                menuLinks.style.display = 'flex';
            }
        });
    }

    render() {
        return (
            <div className="navbar">
                <Link to= "/">
                 <img className="logobalneario" src={logobalneario} alt="Logo" />
                </Link>    
                <div className="menu-links" id="menu-links">
                <Link to="/">Clima</Link>
                <Link to="/">Hospedaje</Link>
                <Link to="/">Gastronomía</Link>
                <Link to="/">Aguas del Pinar</Link>
                <Link to="/">Contacto</Link>
                </div>
                <Link to="/login">
                    <img className="logoprofile" src={profile} alt="Profile" />
                </Link>
                <div className="menu-toggle" id="menu-toggle">&#9776;</div>
            </div>
        );
    }
}

export default NavBar;

