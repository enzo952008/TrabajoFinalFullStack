import React, { useState } from "react";
import "../styles/form-login.css";

const FormCreateAccount = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }
        console.log("Nombre:", name);
        console.log("Correo electrónico:", email);
        console.log("Contraseña:", password);
    };


    return (
        <form className="form-container-register" onSubmit={handleRegister}>
            <div className="form-title">
                <h3>Crea tu cuenta</h3>
            </div>
            <div className="form-group">
                <label htmlFor="name">Nombre y Apellido</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
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
            <div className="form-group">
                <label htmlFor="confirmPassword">Confirmar contraseña</label>
                <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
            </div>
            <div className="form-buttons">
                <button type="submit" className="register-button">Registrarse</button>
            </div>
        </form>
    );
}

export default FormCreateAccount;