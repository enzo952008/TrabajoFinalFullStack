import { Outlet } from "react-router-dom";
import NavBar from "./navBar-component";
import Footer from "./footer-component";

export default function Layout(){
    return(
        <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
        </div>
    )
};
