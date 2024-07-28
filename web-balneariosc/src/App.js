import './App.css';
import Login from './login/login'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home/home';
import Windguru from './components/Windguru-component';
import Layout from './components/layout-component';
import CreateAccount from './create-account/create-account';
import LodgingSection from './lodging/lodgingSection';
import Contact from './contacto/contact';
import GastronomySection from './gastronomy/gastronomySection';
import Profile from './profile/profile';
import TicketBooking from './components/ticket-component';
import TicketsSection from './AguasDelPinar/ticket';
import TicketSelector from './components/ticket-selector-component';
import AguasDelPinar from './aguasPinar/aguasDelPinar';


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='gastronomia' element={<GastronomySection/>}></Route> 
      <Route path='/' element={<Layout/>}></Route>
      <Route path='clima' element={<Windguru/>}></Route>
      <Route index element={<Home/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='create-account' element={<CreateAccount/>}></Route>
      <Route path='hospedaje' element={<LodgingSection/>}></Route>
      <Route path='contacto' element={<Contact/>}></Route>
      <Route path='perfil' element={<Profile/>}></Route>
      <Route path='tickets' element={<TicketsSection/>}></Route>
      <Route path='aguasdelpinar' element={<AguasDelPinar/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)