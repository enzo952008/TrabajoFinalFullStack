// src/navbar/NavBar.js
import React from 'react';
import './navBar.css';

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
                <img className="logobalneario" src="img-navbar/logobalneario.png" alt="Logo" />
                <div className="menu-links" id="menu-links">
                    <a href="#link1">Clima</a>
                    <a href="#link2">Hospedaje</a>
                    <a href="#link3">Gastronomia</a>
                    <a href="#link4">Aguas del Pinar</a>
                    <a href="#link5">Contacto</a>
                </div>
                <img className="logoprofile" src="img-navbar/profile.png" alt="Logo" />
                <div className="menu-toggle" id="menu-toggle">&#9776;</div>
            </div>
        );
    }
}

export default NavBar;

