import React, { useState } from "react";
import "../styles/form-login.css";

const FormCreateAccount = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [profileImg, setProfileImg] = useState(null);

    const handleRegister = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden");
            return;
        }
        console.log("Nombre:", name);
        console.log("Correo electrónico:", email);
        console.log("Contraseña:", password);
        console.log("Imagen de Perfil:", profileImg);
        // Agregar lógica adicional para el registro aquí
    };

    const handleProfileImgChange = (e) => {
        setProfileImg(e.target.files[0]);
    };

    return (
        <form className="form-container" onSubmit={handleRegister}>
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
            <div className="form-group">
                <label htmlFor="profileImg" className="file-label">Imagen de perfil</label>
                <input
                    type="file"
                    id="profileImg"
                    onChange={handleProfileImgChange}
                />
            </div>
            <div className="form-buttons">
                <button type="submit">Registrarse</button>
            </div>
        </form>
    );
}

export default FormCreateAccount;