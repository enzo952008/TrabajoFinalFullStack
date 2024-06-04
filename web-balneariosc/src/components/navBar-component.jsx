// src/navbar/NavBar.js
import React from 'react';
import '../styles/navBar.css';
import logobalneario from '../home/navbar/img-navbar/logobalneario.png';
import profile from '../home/navbar/img-navbar/profile.png';
import Login from '../login/login';
import { NavLink } from 'react-router-dom';

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
                <img className="logobalneario" src={logobalneario} alt="Logo" />
                <div className="menu-links" id="menu-links">
                <NavLink to="/clima">Clima</NavLink>
                <NavLink to="/clima">Hospedaje</NavLink>
                <NavLink to="/clima">Gastronomnia</NavLink>
                <NavLink to="/clima">Aguas del Pinar</NavLink>
                <NavLink to="/clima">Contacto</NavLink>
                </div>
                <NavLink to={Login}>
                    <img className="logoprofile" src={profile} alt="Profile" />
                </NavLink>
                <div className="menu-toggle" id="menu-toggle">&#9776;</div>
            </div>
        );
    }
}

export default NavBar;

