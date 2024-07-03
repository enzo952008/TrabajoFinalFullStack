import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/cardGastronomy.css';


function CardGastronomy({ gastronomia }) {
    const [showModal, setShowModal] = useState(false);
  
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
  
    // Dividir la información en líneas individuales
    const lines = gastronomia.informacion.split('\n').map((line, index) => (
      <p key={index}>{line}</p>
    ));
  
    return (
      <div className="card">
        <img src={gastronomia.imagen} alt={gastronomia.nombre} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{gastronomia.nombre}</h5>
          <Button variant="primary" onClick={openModal} className="custom-button">
            Ver detalles
          </Button>
  
          <Modal show={showModal} onHide={closeModal} centered>
            <Modal.Header closeButton>
              <Modal.Title>{gastronomia.nombre}</Modal.Title>
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
  
  export default CardGastronomy;
  