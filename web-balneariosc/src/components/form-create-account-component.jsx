import React, { useState } from "react";
import "../styles/form-login.css";

const FormCreateAccount = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = async (e) => { // Agregué 'async' aquí
        e.preventDefault();
    
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }
    
        try {
            const response = await fetch('http://localhost:3000/users', { // Cambia la URL si es necesario
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({  name, password, email }), // Enviar credenciales
            });
    
            if (!response.ok) {
                throw new Error('Login failed');
            }
    
            const data = await response.json();
            // Guardar el token o manejar la respuesta de éxito
            console.log('Login successful:', data);
    
            // Puedes redirigir al usuario después de un login exitoso
            // Ejemplo: navigate('/perfil');
    
        } catch (error) {
            console.error('Error during login:', error);
        }
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