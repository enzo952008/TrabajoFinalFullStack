import React from "react";
import NavBar from "../components/navBar-component";
import Footer from "../components/footer-component";
import FormCreateAccount from "../components/form-create-account-component";
import "../styles/create-account.css";

const CreateAccount = () => {
    return (
        <div>
            <NavBar />
            <div className="page-container">
                <div className="content-wrap">
                 <FormCreateAccount />
                </div>
            </div>
            <Footer /> 
        </div>
    );
};

export default CreateAccount;