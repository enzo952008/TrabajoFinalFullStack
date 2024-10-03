import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React from 'react';
import "../styles/carousel.css";

const Carousel = () => {
    return (
      <div className="carousel-container">
        <div className="overlay">
          <p className="carousel-description">
          Este lugar es un refugio de tranquilidad, ideal para desconectarse del ajetreo diario. Rodeado de vegetación,
          ofrece paz y relajación, con senderos naturales perfectos para caminatas serenas. Un destino seguro y acogedor,
          donde la hospitalidad abunda. Ya sea una escapada rápida o una estadía prolongada, aquí encontrarás serenidad y
          conexión con la naturaleza.
          </p>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 2500 }}
          navigation={true}
          loop={true}
          pagination={{ clickable: true }}
          direction='horizontal'
          className="swiper-container-home"
        >
          <SwiperSlide className='slide-item'>
            <img src={require("../home/carousel/img/car-home-01.jpg")} alt="vista aérea del Balneario San Cayetano" />
          </SwiperSlide>
          <SwiperSlide className='slide-item'>
            <img src={require("../home/carousel/img/car-home-02.jpg")} alt="vista aérea del Balneario San Cayetano" />
          </SwiperSlide>
          <SwiperSlide className='slide-item'>
            <img src={require("../home/carousel/img/car-home-03.jpg")} alt="vista aérea del Balneario San Cayetano" />
          </SwiperSlide>
          <SwiperSlide className='slide-item'>
            <img src={require("../home/carousel/img/imgcarousel.JPG")} alt="vista aérea del Balneario San Cayetano" />
          </SwiperSlide>
        </Swiper>
      </div>
    );
  };

export default Carousel;

