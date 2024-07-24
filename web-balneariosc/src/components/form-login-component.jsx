import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/form-login.css";

//react-router-dom es una librería para React que facilita la 
//implementación de la navegación y el enrutamiento en una aplicación

const FormLogin = () => {
    //estados para almacenar la informacion
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); //funcion para redirigir al usuario a diferentes rutas dentro de la app<

    const handleLogin = (e) => {
        //evita que se recargue la pagina al enviar
        e.preventDefault();
        console.log("email:", email);
        console.log("password:", password);
    };

    const handleCreateAccount = (e) => {
        e.preventDefault();
        //navega al form de creacion de cuenta
        navigate('/create-account');
    };

    return (
        <form className="form-container">
            <div className="form-title">
                <h3>¡Bienvenido/a!</h3>
            </div>
            <div className="form-group">
                <label htmlFor="email">Correo electrónico</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div className="form-buttons">
                <button type="button" onClick={handleCreateAccount}>Crear cuenta</button>
                <button type="submit" onClick={handleLogin}>Ingresar</button>
            </div>
        </form>
    );
}

export default FormLogin;