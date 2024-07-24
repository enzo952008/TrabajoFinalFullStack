import React from "react";
import { useState } from "react";
import Lodging from "./lodging";
import NavBar from "../components/navBar-component";
import Footer from "../components/footer-component";
import Camping from "./camping";
import '../styles/lodgingSection.css';

const LodgingSection = () => {
    const [selectedComponent, setSelectedComponent] = useState(null); // Estado inicial nulo para no mostrar ningún componente al inicio

    const renderComponent = () => {
        //logica para determinar que componente se renderiza
        if (selectedComponent === 'lodging') {
            return <Lodging />;
        } else if (selectedComponent === 'camping') {
            return <Camping />;
        }
        return null;
    };

    const handleBackClick = () => {
        //cambia el estado a null por lo que se deja de renderizar el componente actual
        setSelectedComponent(null);
    };

    return (
        <div className="page-container-lodging">
            <NavBar />
            <div className="content-wrap-lodging">
                {/* si selectedComponent es null se muestran los botones */}
                {!selectedComponent && (
                    <div className="button-container">
                        {/* cambia a active si coincide con el nombre del boton */}
                        <button
                            className={selectedComponent === 'lodging' ? 'active' : ''}
                            // actualiza el estado al ser clickeado
                            onClick={() => setSelectedComponent('lodging')}
                        >
                            Sector hotelero
                        </button>
                        <button
                            className={selectedComponent === 'camping' ? 'active' : ''}
                            onClick={() => setSelectedComponent('camping')}
                        >
                            Campings
                        </button>
                    </div>
                )}
                {/* se renderiza el componente correcto */}
                <div className="component-container">
                    {renderComponent()}
                </div>
                {/* si hay un componente seleccionado se muestra el enlace */}
                {selectedComponent && (
                    <div className="back-link" onClick={handleBackClick}>← Volver</div>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default LodgingSection;