import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React from 'react';
import "../styles/carousel.css";

const Carousel = () => {
    return (
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 1500 }}
        navigation={true}
        loop={true}
        pagination={{ clickable: true }}
        direction='horizontal'
        className="swiper-container"
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
    );
  };
  
  export default Carousel;

