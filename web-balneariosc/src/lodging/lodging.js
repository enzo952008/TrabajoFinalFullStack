import React, { useState, useEffect } from 'react';
import CardLodging from '../components/card-lodging';

function Lodging() {
  //estado local para almacenar la data
  const [lodgings, setLodgings] = useState([]);

  useEffect(() => {
    const fetchLodgings = async () => {
      try {
        //solicitud http para obtener json
        const response = await fetch('/data/hospedajes.json'); // Ruta desde la carpeta public
        //verificacion de la respuesta y lanza error de ser necesario
        if (!response.ok) {
          throw new Error('Error en la respuesta del servidor');
        }
        //parseo de respuesta
        const lodgingsData = await response.json();
        //actualiza el [] con los datos obtenidos
        setLodgings(lodgingsData);
      } catch (error) {
        console.error('Error fetching lodgings:', error);
        alert('Hubo un error al cargar los hospedajes. Por favor, intenta de nuevo más tarde.');
      }
    };
    fetchLodgings();
  }, []);

  return (
    <div>
      <h2>Alojamientos</h2>
      <div className='card-container'>
        {/* se recorre el array se genera un componente card por cada hospedaje, usando el id como clave */}
        {lodgings.map(lodging => (
          <CardLodging key={lodging.id} hospedaje={lodging} />
        ))}
      </div>
    </div>
  );
}

export default Lodging;
