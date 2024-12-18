import React from "react";
import { useState } from "react";
import Lodging from "./lodging";
import Camping from "./camping";
import NavBar from "../components/navBar-component";
import Footer from "../components/footer-component";
import '../styles/lodgingSection.css';

const LodgingSection = () => {
    const [selectedComponent, setSelectedComponent] = useState(null); // Estado inicial nulo para no mostrar ningún componente al inicio

    const renderComponent = () => {
        // lógica para determinar qué componente se renderiza
        if (selectedComponent === 'lodging') {
            return <Lodging />;
        } else if (selectedComponent === 'camping') {
            return <Camping />;
        }
        return null;
    };

    const handleBackClick = () => {
        // cambia el estado a null por lo que se deja de renderizar el componente actual
        setSelectedComponent(null);
    };

    return (
        <div className="page-container-lodging">
             <NavBar />
            <div className="overlay"></div> {/* Agrega el overlay aquí */}
            <div className="content-wrap-lodging">
                {/* Si selectedComponent es null, se muestran los botones */}
                {!selectedComponent && (
                    <div className="button-container">
                        {/* Cambia a active si coincide con el nombre del botón */}
                        <button
                            className={selectedComponent === 'lodging' ? 'active' : ''}
                            onClick={() => setSelectedComponent('lodging')}
                        >
                            Sector hotelero
                        </button>
                        <button
                            className={selectedComponent === 'camping' ? 'active' : ''}
                            onClick={() => setSelectedComponent('camping')}>Campings
                        </button>
                    </div>
                )}
                {/* Se renderiza el componente correcto */}
                <div className="component-container">
                    {renderComponent()}
                </div>
                {/* Si hay un componente seleccionado, se muestra el enlace */}
                {selectedComponent && (
                    <div className="back-link" onClick={handleBackClick}>← Volver</div>
                )}
            </div>

            <div className="footer"> {/* Agrega la clase footer */}
                <Footer />
            </div>
        </div>
    );
};

export default LodgingSection;
