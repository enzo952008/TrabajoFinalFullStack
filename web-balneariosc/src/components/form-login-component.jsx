import React, { useState } from "react";
import "../styles/form-login.css";

const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("email:", email);
        console.log("password:", password);
    };

    const handleRegister = (e) => {
        e.preventDefault();
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
                <button type="button" onClick={handleRegister}>Registrarse</button>
                <button type="submit" onClick={handleLogin}>Ingresar</button>
            </div>
        </form>
    );
}

export default FormLogin;