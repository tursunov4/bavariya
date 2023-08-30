import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {Swiper,SwiperSlide} from 'swiper/react'
import P1 from "../../../assets/Images/png/Pokupka responsive images/P1.png";
import P2 from "../../../assets/Images/png/Pokupka responsive images/P2.png";
import P3 from "../../../assets/Images/png/Pokupka responsive images/P3.png";
import P4 from "../../../assets/Images/png/Pokupka responsive images/P4.png";
import P5 from "../../../assets/Images/png/Pokupka responsive images/P5.png";
import P6 from "../../../assets/Images/png/Pokupka responsive images/P6.png";
import P7 from "../../../assets/Images/png/Pokupka responsive images/P7.png";
import P8 from "../../../assets/Images/png/Pokupka responsive images/P8.png";
import P9 from "../../../assets/Images/png/Pokupka responsive images/P9.png";
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
       pagination={{ clickable: true }}
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
