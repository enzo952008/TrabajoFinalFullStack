import { Outlet } from "react-router-dom";
import NavBar from "./navBar-component";

export default function Layout(){
    return(
        <div>
        <NavBar/>
        <Outlet/>
        </div>
    )
};
