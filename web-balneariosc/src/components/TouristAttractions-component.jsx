import React from 'react';
import '../styles/TouristAttractions.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TouristAttractions = () => {
  return (
    <div className="tourist-attractions-container">
      <h2 className="tourist-title">Vení a visitarnos</h2>
      <div className="carousel-and-image">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{ delay: 1500 }}
          navigation={true}
          loop={true}
          pagination={{ clickable: true }}
          direction='horizontal'
          className="tourist-swiper-container"
        >
          <SwiperSlide className='tourist-slide-item'>
            <img src={require("../home/atraccionesturisticas/imgAttractions/carouseluno.JPG")} alt="atraccion" />
          </SwiperSlide>
          <SwiperSlide className='tourist-slide-item'>
            <img src={require("../home/atraccionesturisticas/imgAttractions/carouseldos.jpeg")} alt="atraccion" />
          </SwiperSlide>
          <SwiperSlide className='tourist-slide-item'>
            <img src={require("../home/atraccionesturisticas/imgAttractions/monolito.png")} alt="atraccion" />
          </SwiperSlide>
          <SwiperSlide className='tourist-slide-item'>
            <img src={require("../home/atraccionesturisticas/imgAttractions/carouseltres.JPG")} alt="atraccion" />
          </SwiperSlide>
          <SwiperSlide className='tourist-slide-item'>
            <img src={require("../home/atraccionesturisticas/imgAttractions/concurso.png")} alt="atraccion" />
          </SwiperSlide>
          <SwiperSlide className='tourist-slide-item'>
            <img src={require("../home/atraccionesturisticas/imgAttractions/carouselcuatro.jpeg")} alt="atraccion" />
          </SwiperSlide>
          <SwiperSlide className='tourist-slide-item'>
            <img src={require("../home/atraccionesturisticas/imgAttractions/carouselseis.JPG")} alt="atraccion" />
          </SwiperSlide>
        </Swiper>
        <div className="side-image">
          <img src={require("../home/atraccionesturisticas/imgAttractions/briosc.jpg.png")} alt="imagen lateral" />
        </div>
      </div>
    </div>
  );
};

export default TouristAttractions;
