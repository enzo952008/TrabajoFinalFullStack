import React, { useState, useEffect } from 'react';
import CardGastronomy from '../components/card-gastronomy-component';

function Gastronomy() {
  const [gastronomys, setGastronomys] = useState([]);

  useEffect(() => {
    const fetchgastronomys = async () => {
      try {
        const response = await fetch('/data/gastronomia.json'); // Ruta desde la carpeta public
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        const gastronomyData = await response.json();
        setGastronomys(gastronomyData);
      } catch (error) {
        console.error('Error fetching lodgings:', error);
        alert('Hubo un error al cargar los hospedajes. Por favor, intenta de nuevo más tarde.');
      }
    };
    fetchgastronomys();
  }, []);

  return (
    <div>
      <h2 className='titleGastronomy'>Gastronomia</h2>
      <div className='card-container'>
        {gastronomys.map(gastronomy => (
          <CardGastronomy key={gastronomy.id} gastronomia={gastronomy} />
        ))}
      </div>
    </div>
  );
}

export default Gastronomy;