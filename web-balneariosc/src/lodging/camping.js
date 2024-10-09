import React, { useState, useEffect } from 'react';
import CardLodging from '../components/card-lodging';
import '../styles/card-camping.css'

function Camping() {
  const [lodgings, setLodgings] = useState([]);

  useEffect(() => {
    const fetchLodgings = async () => {
      try {
        const response = await fetch('/data/campings.json'); // Ruta desde la carpeta public
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        const lodgingsData = await response.json();
        setLodgings(lodgingsData);
      } catch (error) {
        console.error('Error fetching lodgings:', error);
        alert('Hubo un error al cargar los hospedajes. Por favor, intenta de nuevo más tarde.');
      }
    };
    fetchLodgings();
  }, []);

  return (
    <div className='page-container-camping'>
      <h2 className='lodgingTitle'>Campings</h2>
      <div className='card-container-camping'>
        {lodgings.map(lodging => (
          <CardLodging key={lodging.id} hospedaje={lodging} />
        ))}
      </div>
    </div>
  );
}

export default Camping;