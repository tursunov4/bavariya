import React from 'react'
import './zakaj.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {Swiper,SwiperSlide} from 'swiper/react'
import zakaj from '../../../assets/Images/png/zakaj1.png'
import zakaj2 from '../../../assets/Images/png/zakaj2.png'
import zakaj3 from '../../../assets/Images/png/zakaj3.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import prev from '../../../assets/Images/svg/prev.svg'
import next from '../../../assets/Images/svg/next.svg'
const ZakajiteModal = () => {
  return (
    <div className='zakajite-carusel'>
     <Swiper
      
       modules={[Navigation, Pagination,  A11y]}    
       centerInsufficientSlides
       spaceBetween={20}
       navigation
       pagination={{ clickable: true }}
       breakpoints={{
        300:{
          slidesPerView:1
        },
        1050:{
          slidesPerView:2
        },    
        1365:{
          slidesPerView:3
        }
      }}
       onSwiper={(swiper) => console.log(swiper)}
       onSlideChange={() => console.log('slide change')}
     >
          <div  className="zakaj__prev">
        <img src={prev} alt="" />
       </div>
       <div  className="zakaj__next">
        <img src={next} alt="" />
       </div>
         <div className="zakajcarusel-item">
         <SwiperSlide  >
          <div className="zakajite__carusel-img">
            <img src={zakaj} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="zakajite__carusel-img">
            <img src={zakaj2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="zakajite__carusel-img">
            <img src={zakaj3} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="zakajite__carusel-img">
            <img src={zakaj} alt="" />
          </div>
        </SwiperSlide>
         </div>
     </Swiper>
    </div>
  )
}

export default ZakajiteModal