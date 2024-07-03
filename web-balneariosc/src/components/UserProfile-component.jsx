import React, { useState } from 'react';
import '../styles/profile.css';

const UserProfile = () => {
    const [name, setName] = useState('Juan');
    const [surname, setSurname] = useState('Gonzales');
    const [profileImage, setProfileImage] = useState(null);
  
    const handleImageChange = (e) => {
      if (e.target.files && e.target.files[0]) {
        setProfileImage(URL.createObjectURL(e.target.files[0]));
      }
    };
  
    return (
      <div className="profile-container">
        <div className="banner"></div>
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
            <label htmlFor="file-upload" className="custom-file-upload">
              Editar
            </label>
            <input
              id="file-upload"
              type="file"
              onChange={handleImageChange}
              className="upload-button"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default UserProfile;


