import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/card.css';


function CardLodging({ hospedaje }) {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // Dividir la información en líneas individuales
  const lines = hospedaje.informacion.split('\n').map((line, index) => (
    <p key={index}>{line}</p>
  ));

  return (
    <div className="card">
      <img src={hospedaje.imagen} alt={hospedaje.Nombre} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{hospedaje.Nombre}</h5>
        <Button variant="primary" onClick={openModal} className="custom-button">
          Ver detalles
        </Button>

        <Modal show={showModal} onHide={closeModal} centered className='custom-modal'>
          <Modal.Header closeButton>
            <Modal.Title>{hospedaje.Nombre}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h6>Descripción</h6>
            {lines}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal} className="custom-button">
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}


export default CardLodging;