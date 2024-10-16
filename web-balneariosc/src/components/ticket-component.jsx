import React, { useState, useEffect } from 'react';
import TicketSelector from './ticket-selector-component';
import '../styles/ticket.css';

// Array con los nombres de los días de la semana en español
 const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

 const TicketBooking = () => {
   const [selectedDate, setSelectedDate] = useState(null);
   const [dates, setDates] = useState([]);
   const [modalIsOpen, setModalIsOpen] = useState(false); // Estado del modal

   useEffect(() => {
     const today = new Date();
     const currentDay = today.getDay();
     const dayMap = [2, 3, 4, 5, 6, 0]; // Mapeo de los días de la semana: Martes = 2, Miércoles = 3, ..., Domingo = 0
     const daysToAdd = dayMap.map(day => (day - currentDay + 7) % 7);

     // Calcular las nuevas fechas a partir de hoy
     const newDates = daysToAdd.map(days => {
       const date = new Date(today);
       date.setDate(today.getDate() + days);
       return date;
     });

     setDates(newDates); // Actualizar el estado con las nuevas fechas
   }, []);

   // Función para manejar el clic en una fecha
   const handleDateClick = (date) => {
     setSelectedDate(date); // Establecer la fecha seleccionada en el estado
   };

   // Función para manejar el clic en el botón de comprar tickets
   const handleBuyTicketClick = (date) => {
     setSelectedDate(date); // Establecer la fecha seleccionada en el estado
     setModalIsOpen(true); // Abrir el modal
   };

   // Función para formatear la fecha en un formato legible
    const formatDate = (date) => {
    const dayName = diasSemana[date.getDay()];
     return `${dayName}, ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
   };
   const closeModal = () => setModalIsOpen(false);

  return (
    <div className="ticket-booking">
      <div className="header">
        <h1>Días y horarios:</h1>
        <p>Martes a Domingos de 11:00 a 19:00 hs</p>
      </div>
      <div className="content-container">
        <div className="compraTicket">
          <h2>SEGUI ESTOS PASOS PARA COMPRAR TU TICKET: </h2>
          <ol className="compraTabla">
            <tbody>
              <tr>
                <li>Completa tus datos para identificarte. </li>
              </tr>
              <tr>
                <li>Selecciona la fecha, cantidad y tipo de entradas que desea adquirir.</li>
              </tr>
              <tr>
                <li>Haz click en siguiente y selecciona la forma de pago.</li>
              </tr>
              <tr>
                <li>Una vez que Mercadopago confirme tu compra, le llegara un mail notificandole que la misma fue procesada
                  satisfactoriamente y luego se le enviara el acceso al complejo. </li>
              </tr>
            </tbody>
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
      
      {modalIsOpen && (
        <>
          {selectedDate && <p>Fecha seleccionada: {formatDate(selectedDate)}</p>}
          <TicketSelector isOpen={modalIsOpen} closeModal={closeModal} selectedDate={selectedDate} />
        </>
      )}
    </div>

  );
}


export default TicketBooking;