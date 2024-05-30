import React from "react";
import NavBar from "../home/navbar/navBar";
import FormLogin from "./components/form-login-component";
import Footer from "../home/footer/footer";

const Login = () => {
    return (
        <div>
            <NavBar />
            <FormLogin />
            <Footer />
        </div>
    );
};

export default Login;
