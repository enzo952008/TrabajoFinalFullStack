import './App.css';
import Login from './login/login';
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
import TicketsSection from './aguasPinar/ticket';
import AguasDelPinar from './aguasPinar/aguasDelPinar';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/gastronomia' element={<GastronomySection />} />
        <Route path='/' element={<Layout />} />
        <Route path='/clima' element={<Windguru />} />
        <Route index element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/crear-cuenta' element={<CreateAccount />} />
        <Route path='/hospedaje' element={<LodgingSection />} />
        <Route path='/contacto' element={<Contact />} />
        <Route path='/perfil' element={<Profile />} />
        <Route path='/tickets' element={<TicketsSection />} />
        <Route path='/aguasdelpinar' element={<AguasDelPinar />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
