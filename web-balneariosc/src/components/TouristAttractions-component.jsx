import React from 'react';
import '../styles/TouristAttractions.css'; // Asegúrate de crear este archivo CSS
import imghome from '../home/atraccionesturisticas/imgAttractions/barco.JPG';
import refugio from '../home/atraccionesturisticas/imgAttractions/refugio.png';

const TouristAttractions = () => {
    return (
        <div className="tourist-attractions">
            <h1>ATRACCIONES TURÍSTICAS</h1>
            <div className="cards-container">
                <div className="card">
                    <div className="card-content">
                        <p className="description">Pagrus</p>
                        <img src={imghome} alt="Pagrus" className="card-image" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <p className="description">El Refugio</p>
                        <img src={refugio} alt="El Refugio" className="card-image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristAttractions;