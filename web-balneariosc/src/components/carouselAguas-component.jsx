import {Swiper, SwiperSlide} from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React from 'react';
import "../styles/carouselAguas.css";

const CarouselAguasP = () => {
    return (
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={{ delay: 4500 }}
        navigation={true}
        loop={true}
        pagination={{ clickable: true }}
        direction='horizontal'
        className="swiper-container"
      >
      
        <SwiperSlide className='slide-item'>
          <img src={require("../aguasPinar/carouselAgua/img/img1.png")} alt="vista aguas del pinar complejo" />
        </SwiperSlide>
        <SwiperSlide className='slide-item'>
          <img src={require("../aguasPinar/carouselAgua/img/img2.png")} alt="vista aguas del pinar complejo" />
        </SwiperSlide>
        <SwiperSlide className='slide-item'>
          <img src={require("../aguasPinar/carouselAgua/img/img5.jpg")} alt="vista aguas del pinar complejo" />
        </SwiperSlide>
        <SwiperSlide className='slide-item'>
          <img src={require("../aguasPinar/carouselAgua/img/img4.jpg")} alt="vista aguas del pinar complejo" />
        </SwiperSlide>
      </Swiper>
        
    );
    
  };
  
  export default CarouselAguasP;