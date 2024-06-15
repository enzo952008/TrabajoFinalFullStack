import React from 'react';
import '../styles/TouristAttractions.css'; // Asegúrate de crear este archivo CSS
import imghome from '../home/atraccionesturisticas/imgAttractions/barco.JPG';

const TouristAttractions = () => {
    return (
        <div className="tourist-attractions">
            <h1>ATRACCIONES TURÍSTICAS</h1>
            <div className="cards-container">
                <div className="card">
                    <div className="card-content">
                        <p className="description">Pagrus</p>
                        <img src={imghome} alt="Imagen 1" />
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <p className="description">Descripción de la imagen 66</p>
                        <img src={imghome} alt="Imagen 2" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristAttractions;
