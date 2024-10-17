import React, { useState, useEffect } from 'react';
import TicketSelector from './ticket-selector-component'; // Asegúrate de importar tu componente de selección de tickets
import '../styles/ticket.css'; // Archivo CSS

const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const TicketBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [dates, setDates] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false); // Estado del modal

  useEffect(() => {
    const today = new Date();
    const currentDay = today.getDay();
    const dayMap = [2, 3, 4, 5, 6, 0]; // Mapeo de los días de la semana
    const daysToAdd = dayMap.map(day => (day - currentDay + 7) % 7);

    // Calcular las nuevas fechas
    const newDates = daysToAdd.map(days => {
      const date = new Date(today);
      date.setDate(today.getDate() + days);
      return date;
    });

    setDates(newDates); // Actualizar las fechas
  }, []);

  // Manejar clic en una fecha
  const handleDateClick = (date) => {
    setSelectedDate(date); 
  };

  // Manejar clic en "Comprar"
  const handleBuyTicketClick = (date) => {
    setSelectedDate(date); 
    setModalIsOpen(true); // Abrir el modal
  };

  // Formatear la fecha
  const formatShortDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2); 
    return `${day}/${month}/${year}`;
  };

  const closeModal = () => setModalIsOpen(false); // Función para cerrar el modal

  return (
    <div className="ticket-booking">
      <div className="content-container">
        <div className="background-section">
          <div className="header">
            <h1>Días y horarios:</h1>
            <p>Martes a Domingos de 11:00 a 19:00 hs</p>
          </div>
          <div className="compraTicket">
            <h2>SEGUÍ ESTOS PASOS PARA COMPRAR TU TICKET:</h2>
            <ol className="compraTabla">
              <li>Completa tus datos para identificarte.</li>
              <li>Selecciona la fecha, cantidad y tipo de entradas que deseas adquirir.</li>
              <li>Haz clic en siguiente y selecciona la forma de pago.</li>
              <li>
                Una vez que MercadoPago confirme tu compra, te llegará un mail notificando que la misma fue procesada satisfactoriamente, y luego se enviará el acceso al complejo.
              </li>
            </ol>
          </div>
          <div className="tariff-card">
            <h2>TARIFAS</h2>
            <table className="tariff-table">
              <tbody>
                <tr>
                  <td>Menores de 13 años</td>
                  <td>s/cargo</td>
                </tr>
                <tr>
                  <td>Personas con carnet CUD</td>
                  <td>s/cargo</td>
                </tr>
                <tr>
                  <td>Residentes</td>
                  <td>$500</td>
                </tr>
                <tr>
                  <td>Jubilados y pensionados</td>
                  <td>$500</td>
                </tr>
                <tr>
                  <td>No residentes</td>
                  <td>$2.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2 className="ticket-selection-title">Elegí el día y comprá tu entrada online</h2>

        <div className="cards-container">
          {dates.map((date, index) => (
            <div className="ticket-card" key={index}>
              <h2>Compra tu ticket</h2>
              <p>{formatShortDate(date)}</p>
              <img 
                src="/static/media/tickets.ec77a841237a2b5bc437.png" 
                alt="Imagen del ticket" 
                className="ticket-image" 
              />
              <button className="buy-ticket-button" onClick={() => handleBuyTicketClick(date)}>
                Comprar
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalIsOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            {selectedDate && <p>Fecha seleccionada: {formatShortDate(selectedDate)}</p>}
            <TicketSelector isOpen={modalIsOpen} closeModal={closeModal} selectedDate={selectedDate} />
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketBooking;

