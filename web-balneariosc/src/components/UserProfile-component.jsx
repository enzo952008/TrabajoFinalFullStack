import React, { useState } from 'react';
import '../styles/profile.css';

const UserProfile = () => {
  const [name, setName] = useState('Juan');
  const [surname, setSurname] = useState('Gonzales');
  const [profileImage, setProfileImage] = useState(null);
  const [bannerImage, setBannerImage] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleBannerChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setBannerImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSave = () => {
    // Lógica para guardar los cambios
    handleCloseModal();
  };

  return (
    <div className="profile-container">
      <div className="banner">
        <img
          src={bannerImage}
          alt="Banner"
          className="banner-image"
        />
      </div>
      <div className="profile-content">
        <div className="profile-left">
          <div className="profile-image-container">
            <img
              src={profileImage || 'https://via.placeholder.com/150'}
              alt="Profile"
              className="profile-image"
            />
          </div>
        </div>
        <div className="profile-right">
          <div className="centered">
            <h3 className="name">
              {surname}, {name}
            </h3>
          </div>
          <button onClick={handleOpenModal} className="edit-button">
            Editar Perfil
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-profile">
          <div className="modal-content-profile">
            <h2>Editar Perfil</h2>
            <label>Nombre:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label>Apellido:</label>
            <input
              type="text"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            />

            <label>Cambiar Imagen de Perfil:</label>
            <input type="file" onChange={handleImageChange} />

            <label>Cambiar Banner:</label>
            <input type="file" onChange={handleBannerChange} />
          
            <div className="modal-buttons-profile">
              <button className="save-button-profile" onClick={handleSave}>
                Guardar
              </button>
              <button className="cancel-button-profile" onClick={handleCloseModal}>
                Cancelar
              </button>
            </div>
          
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;


