import React, { useState } from "react";

function CardLodging({ hospedaje }) {
  const [showDetails, setShowDetails] = useState(false);

  // Función para alternar la visibilidad de los detalles
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="card">
      <img src={hospedaje.imagen} alt={hospedaje.Nombre} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{hospedaje.Nombre}</h5>
        {/* Mostrar detalles solo si showDetails es true */}
        {showDetails && (
          <div>
            <p><strong>Descripción:</strong> {hospedaje.informacion}</p>
          </div>
        )}
        <button onClick={toggleDetails} className="btn btn-primary">
          {showDetails ? 'Menos info' : 'Más info'}
        </button>
      </div>
    </div>
  );
}

export default CardLodging;
