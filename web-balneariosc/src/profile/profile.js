import React from 'react';
import NavBar from "../components/navBar-component";
import Footer from "../components/footer-component";
import UserProfile from '../components/UserProfile-component';
import '../styles/profile.css';


const ProfilePage = () => {
    return (
        <div>
            <NavBar />
            <UserProfile />
            <Footer />
        </div>
    );
};

export default ProfilePage;
