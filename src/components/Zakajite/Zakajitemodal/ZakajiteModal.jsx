import './zakaj.css'
import zakaj1 from '../../../assets/Images/png/zakaj1.webp'
import zakaj2 from '../../../assets/Images/png/zakaj2.webp'
import zakaj3 from '../../../assets/Images/png/zakaj2.webp'
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import prev from "../../../assets/Images/svg/prev.svg";
import next from "../../../assets/Images/svg/next.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const ZakajiteModal = () => {
  return (
     <div className="zakaj__carusel">
      <div className="container">
   
      
      <Swiper
          className='zakaj__crusel'
         modules={[Navigation, Pagination, A11y]}
          
         centerInsufficientSlides
         spaceBetween={30}
         breakpoints={{
           300: {              
             slidesPerView: 1,
           },
           700: {
             slidesPerView: 2,
           },
           1238: {
             slidesPerView: 3,
           },
         }}
         navigation
         onSwiper={(swiper) => console.log(swiper)}
         onSlideChange={() => console.log("slide change")}
       >
         <img
           className="youtubecarusel__wrapper-prev"
           src={prev}
           alt="sdfasf"
         />
         <img
           className="youtubecarusel__wrapper-next"
           src={next}
           alt="sdfasf"
         />
        
        <div className="zakaj__carusel">
        <SwiperSlide >
            <div className='zakaj__img'>
            <img src={zakaj2} alt="" />
            </div>
           </SwiperSlide>
           <SwiperSlide >
            <div className='zakaj__img'>
            <img src={zakaj1} alt="" />
            </div>
           </SwiperSlide>
           <SwiperSlide >
            <div className='zakaj__img'>
            <img src={zakaj3} alt="" />
            </div>
           </SwiperSlide>
           <SwiperSlide >
            <div className='zakaj__img'>
            <img src={zakaj2} alt="" />
            </div>
           </SwiperSlide>
        </div>
       
       </Swiper>
   
      </div>
     </div>
  )
}

export default ZakajiteModal