import React, { useState } from "react";
import '../styles/ticketSelector.css';

const TicketSelector = ({ isOpen, closeModal, selectedDate }) => {
    const [tickets, setTickets] = useState({
        menores: 0,
        residentes: 0,
        noResidentes: 0,
        jubiladosYPensionados: 0,
        personasConCarnetCud: 0,
    });

    const handleIncrementTickets = (type) => {
        setTickets((prevTickets) => ({
            ...prevTickets,
            [type]: prevTickets[type] + 1,
        }));
    };

    const handleDecrementTickets = (type) => {
        setTickets((prevTickets) => {
            if (prevTickets[type] > 0) {
             return {
                 ...prevTickets,
                 [type]: prevTickets[type] - 1,
            };
        }
        return prevTickets;
        });
    };

    const formatDate = (date) => {
        const dayName = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'][date.getDay()];
        return `${dayName}, ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    };

    return (
        <div>
            {isOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h1>¡Seleccioná tus entradas!</h1>
                        {selectedDate && <h5>Fecha seleccionada: {formatDate(selectedDate)}</h5>}
                        <h6>Ingresá la cantidad de entradas</h6>
                        <div className="ticket-category-container">
                            {Object.entries(tickets).map(([key, value]) => (
                                <div className="ticket-category" key={key}>
                                    <div className="ticket-group-name">
                                        <h5>{key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}</h5>
                                    </div>
                                    <div className="ticket-control">
                                        <button onClick={() => handleDecrementTickets(key)}>-</button>
                                        <span>{value}</span>
                                        <button onClick={() => handleIncrementTickets(key)}>+</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="modal-buttons">
                            <button onClick={closeModal} className="cancel-button">Cancelar</button>
                            <button className="next-button">Siguiente</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TicketSelector;
