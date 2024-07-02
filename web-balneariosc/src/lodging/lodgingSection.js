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
        if (selectedComponent === 'lodging') {
            return <Lodging />;
        } else if (selectedComponent === 'camping') {
            return <Camping />;
        }
        return null; // No renderiza nada si no se ha seleccionado un componente
    };

    return (
        <div className="page-container">
            <NavBar />
            <div className="content-wrap">
                <div className="button-container">
                    <button 
                        className={selectedComponent === 'lodging' ? 'active' : ''} 
                        onClick={() => setSelectedComponent('lodging')}
                    >
                        Alojamientos
                    </button>
                    <button 
                        className={selectedComponent === 'camping' ? 'active' : ''} 
                        onClick={() => setSelectedComponent('camping')}
                    >
                        Campings
                    </button>
                </div>
                <div className="component-container">
                    {renderComponent()}
                </div>
            </div>
            <Footer />
        </div>
    );
};


// const LodgingSection = () => {
//     return (
//         <div className="page-container">
//             <NavBar />
//             <div className="content-wrap">
//                 <Lodging />
//             </div>
//             <Footer />
//         </div>
//     );
// };



export default LodgingSection;