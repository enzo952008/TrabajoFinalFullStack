import React from "react";
import NavBar from "../home/navbar/navBar";
import FormLogin from "./components/form-login-component";
import Footer from "../home/footer/footer";
import './login.css';

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
