// src/App.js
import './App.css';
import Carousel from './home/carousel/Carousel-component';
import NavBar from './home/navbar/navBar';
import Footer from './home/footer/footer';


function App() {
  return (
    <div>
      <NavBar />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;

