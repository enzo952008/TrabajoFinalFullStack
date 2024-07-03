import './App.css';
import Login from './login/login'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home/home';
import Windguru from './components/Windguru-component';
import Layout from './components/layout-component';
import Contact from './contacto/contact';
import CreateAccount from './create-account/create-account';

import LodgingSection from './lodging/lodgingSection';



export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='clima' element={<Windguru/>}></Route>
      <Route path='/' element={<Layout/>}></Route>
      <Route path='clima' element={<Windguru/>}></Route>
      <Route index element={<Home/>}></Route>
      <Route path='login' element={<Login/>}></Route>
      <Route path='create-account' element={<CreateAccount/>}></Route>
      <Route path='hospedaje' element={<LodgingSection/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>)