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
        <h2>Días y horarios:</h2>
        <p>Martes a Domingos de 11:00 a 19:00 hs</p>
      </div>
      <div className="content-container">
        <div className="dates-container">
          {dates.map((date) => (
            <div
              key={date.toDateString()} // Usar la fecha como clave única
              className={`date-card ${selectedDate && selectedDate.toDateString() === date.toDateString() ? 'selected' : ''}`}
              onClick={() => handleDateClick(date)} // Manejar el clic en la tarjeta de fecha
            >
              {formatDate(date)}
              <button className="buy-ticket-button" onClick={(e) => { e.stopPropagation(); handleBuyTicketClick(date); }}>
                Comprar ticket/s
              </button>
            </div>
          ))}
        </div>
        <div className="tariff-card">
          <h2>Tarifas</h2>
          <ul>
            <li>Menores de 13 años sin cargo</li>
            <li>Residentes</li>
            <li>No residentes</li>
            <li>Jubilados y pensionados</li>
            <li>Personas con carnet CUD</li>
          </ul>
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
};

export default TicketBooking;



// import '../styles/ticket.css';
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// // Array con los nombres de los días de la semana en español
// const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

// const TicketBooking = () => {
//   const [selectedDate, setSelectedDate] = useState(null);
//   const [dates, setDates] = useState([]);
//   const navigate = useNavigate(); // Hook de navegación de react-router-dom

//   useEffect(() => {
//     const today = new Date();
//     const currentDay = today.getDay();
//     const dayMap = [2, 3, 4, 5, 6, 0]; // Mapeo de los días de la semana: Martes = 2, Miércoles = 3, ..., Domingo = 0
//     const daysToAdd = dayMap.map(day => (day - currentDay + 7) % 7);

//     // Calcular las nuevas fechas a partir de hoy
//     const newDates = daysToAdd.map(days => {
//       const date = new Date(today);
//       date.setDate(today.getDate() + days);
//       return date;
//     });

//     setDates(newDates); // Actualizar el estado con las nuevas fechas
//   }, []);

//   // Función para manejar el clic en una fecha
//   const handleDateClick = (date) => {
//     setSelectedDate(date); // Establecer la fecha seleccionada en el estado
//   };

//   // Función para manejar el clic en el botón de comprar tickets
//   const handleBuyTicketClick = (date) => {
//     // Navegar a la nueva ruta con la fecha seleccionada
//     navigate('/buy-tickets', { state: { date } });
//   };

//   // Función para formatear la fecha en un formato legible
//   const formatDate = (date) => {
//     const dayName = diasSemana[date.getDay()];
//     return `${dayName}, ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
//   };

//   return (
//     <div className="ticket-booking">
//       <div className="header">
//         <h2>Días y horarios:</h2>
//         <p>Martes a Domingos de 11:00 a 19:00 hs</p>
//       </div>
//       <div className="content-container">
//         <div className="dates-container">
//           {dates.map((date) => (
//             <div
//               key={date.toDateString()} // Usar la fecha como clave única
//               className={`date-card ${selectedDate && selectedDate.toDateString() === date.toDateString() ? 'selected' : ''}`}
//               onClick={() => handleDateClick(date)} // Manejar el clic en la tarjeta de fecha
//             >
//               {formatDate(date)}
//               <button className="buy-ticket-button" onClick={(e) => { e.stopPropagation(); handleBuyTicketClick(date); }}>
//                 Comprar ticket/s
//               </button>
//             </div>
//           ))}
//         </div>
//         <div className="tariff-card">
//           <h2>Tarifas</h2>
//           <ul>
//             <li>Menores de 13 años sin cargo</li>
//             <li>Residentes</li>
//             <li>No residentes</li>
//             <li>Jubilados y pensionados</li>
//             <li>Personas con carnet CUD</li>
//           </ul>
//         </div>
//       </div>
//       {selectedDate && <p>Fecha seleccionada: {formatDate(selectedDate)}</p>}
//     </div>
//   );
// };

// export default TicketBooking;
