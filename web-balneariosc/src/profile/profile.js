import React from 'react';
import NavBar from "../components/navBar-component";
import Footer from "../components/footer-component";
import UserProfile from '../components/UserProfile-component';
import '../styles/profilepage.css';



const Profile = () => {
    return (
        <div className="page-container-profile">
            <NavBar />
            <div>
            <UserProfile />
            </div>
            <div  className='container-tickets'>
                <h1>TICKETS ADQUIRIDOS</h1>
                <table className='tickets-table'>
                        <thead className='row-name'>
                            <tr>
                                <th>Fecha</th>
                                <th>Cantidad</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>03/07/2024</td>
                                <td>2</td>
                                <td>$6000</td>
                            </tr>
                            <tr>
                                <td>02/07/2024</td>
                                <td>1</td>
                                <td>$3000</td>
                            </tr>
                            <tr>
                                <td>01/07/2024</td>
                                <td>3</td>
                                <td>$9000</td>
                            </tr>
                        </tbody>
                    </table>
            </div>

            <div className='footerProfile'>
            <Footer />
            </div>
            
        </div>
    );
};

export default Profile;
