import React, { useState } from "react";

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
        <form>
            <div>
                <label htmlFor="email">Correo electrónico</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <label htmlFor="password">Contraseña</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <button type="submit" onClick={handleLogin}>Ingresar</button>
                <button type="button" onClick={handleRegister}>Registrarse</button>
            </div>
        </form>
    );
}

export default FormLogin;