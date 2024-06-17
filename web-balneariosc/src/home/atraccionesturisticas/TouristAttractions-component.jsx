import React from 'react';
import './TouristAttractions.css'; // Asegúrate de crear este archivo CSS
import imghome from './imgAttractions/barco.JPG'
import refugio from './imgAttractions/refugio.png'


const TouristAttractions = () => {
    return (
        <div className="tourist-attractions">
            <h1>Atracciones turisticas</h1>
            <div className="cards-container">
                <div className="card">
                    <div className="card-content">
                        <p className="description">Pagrus</p>
                        <img src={imghome} alt="Imagen 1" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <p className="description">El Refugio</p>
                        <img src={refugio} alt="Imagen 2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristAttractions;