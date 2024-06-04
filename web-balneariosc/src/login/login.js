import React from "react";
import NavBar from "../components/navBar-component";
import FormLogin from "../components/form-login-component";
import Footer from "../components/footer-component";
import '../styles/login.css';

const Login = () => {
    return (
        <div className="page-container">
            <NavBar />
            <div className="content-wrap">
                <FormLogin />
            </div>
            <Footer />
        </div>
    );
};
export default Login;
