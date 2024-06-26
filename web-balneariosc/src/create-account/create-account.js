import React from "react";
import NavBar from "../components/navBar-component";
import Footer from "../components/footer-component";
import FormCreateAccount from "../components/form-create-account-component";
import "../styles/createAccount.css";

const CreateAccount = () => {
    return (
        <div>
            <NavBar />
            <div className="create-account-page">
                <div className="page-container">
                    <div className="content-wrap">
                        <FormCreateAccount />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CreateAccount;