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

  const contactLodging = () => {
    window.open(hospedaje.contactUrl, '_blank');
  };

  return (
    <div className="card">
      <img src={hospedaje.imagen} alt={hospedaje.Nombre} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{hospedaje.Nombre}</h5>
        <Button variant="primary" onClick={openModal} className="custom-button">
          Ver detalles
        </Button>

        <Modal show={showModal} onHide={closeModal} centered
          dialogClassName='modal-centered'
          className='custom-modal'>
          <div style={{ position: 'relative' }}>
            <img
              src={hospedaje.imagen}
              alt={hospedaje.nombre}
              className="modal-image-header"
              style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
            />
            <div className="overlay"></div>
            <Button variant="close" onClick={closeModal} className="close-button"/>
            <h5 className="modal-title">{hospedaje.Nombre} </h5>
          </div>
          <Modal.Body className="modal-body-content">
            <h6>Descripción</h6>
            {lines}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={contactLodging} className="custom-button">
              Contactar
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}


export default CardLodging;