import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {Swiper,SwiperSlide} from 'swiper/react'
import P1 from "../../../assets/Images/png/Pokupka responsive images/P1.webp";
import P2 from "../../../assets/Images/png/Pokupka responsive images/P2.webp";
import P3 from "../../../assets/Images/png/Pokupka responsive images/P3.webp";
import P4 from "../../../assets/Images/png/Pokupka responsive images/P4.webp";
import P5 from "../../../assets/Images/png/Pokupka responsive images/P5.webp";
import P6 from "../../../assets/Images/png/Pokupka responsive images/P6.webp";
import P7 from "../../../assets/Images/png/Pokupka responsive images/P7.webp";
import P8 from "../../../assets/Images/png/Pokupka responsive images/P8.webp";
import P9 from "../../../assets/Images/png/Pokupka responsive images/P9.webp";
import prev from '../../../assets/Images/svg/prevblack.svg'
import next from '../../../assets/Images/svg/nextblack.svg'
import "./style.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const ResponsiveCard = () => {
  return (
    <div className="responsive">
      <h1>Реальные фото пивоварни BAVARIA</h1>
      <div className="responsive__card">
      <Swiper
       className="responsive__card-carusel"
       modules={[Navigation, Pagination,  A11y]}    
       navigation
     
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
      >
       <div  className="responisive-card__prev">
        <img src={prev} alt="" />
       </div>
       <div  className="responisive-card__next">
        <img src={next} alt="" />
       </div>
        <SwiperSlide>
        <img src={P1} alt="Image" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={P2} alt="Image" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={P3} alt="Image" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={P4} alt="Image" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={P5} alt="Image" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={P6} alt="Image" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={P7} alt="Image" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={P8} alt="Image" />
        </SwiperSlide>
        <SwiperSlide>
        <img src={P9} alt="Image" />
        </SwiperSlide>
      </Swiper>

      </div>
    </div>
  );
};

export default ResponsiveCard;
