import React from 'react';
import '../styles/description.css';
import imghome from '../home/atraccionesturisticas/imgAttractions/imgtext.JPG'



class DescriptionTourist extends React.Component {
    render() {
        return (
            <div className="tourist-attraction-container">
                <div className="text-content">
                    <p> Este lugar es un oasis de calma y belleza natural, ideal para aquellos que buscan desconectarse del ajetreo diario.
                        Rodeado de exuberante vegetación, ofrece un ambiente de paz y tranquilidad que es perfecto para la relajación y
                        el rejuvenecimiento. Con senderos que serpentean a través de la naturaleza,
                        podrás disfrutar de caminatas serenas mientras escuchas el canto de los pájaros y el suave murmullo del viento
                        entre los árboles. Es un destino seguro y acogedor, donde la hospitalidad es tan abundante como el entorno natural.
                        Ya sea para una escapada rápida o una estadía prolongada, este lugar te ofrece la oportunidad de recargar energías,
                        conectarte con la naturaleza y encontrar un profundo sentido de serenidad.</p>
                </div>
                <div className="image-content">
                <img src={imghome} alt='imagenturistica'></img>
                </div>
            </div>
        );
    }
}

export default DescriptionTourist;
