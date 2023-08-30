import React, { useState } from 'react'
import phone from '../../assets/Images/png/phone.png'
import user from "../../assets/Images/svg/User.svg"
import "./style.css"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {Swiper,SwiperSlide} from 'swiper/react'
import prev from "../../assets/Images/svg/prevblack.svg"
import next from '../../assets/Images/svg/nextblack.svg'
import telegram1 from '../../assets/Images/png/telegram1.png'
import telegram2 from '../../assets/Images/png/telegram2.png'
import telegram3 from '../../assets/Images/png/telegram3.png'
import telegram4 from '../../assets/Images/png/telegram4.png'
import telegram5 from '../../assets/Images/png/telegram5.png'
import telegram6 from '../../assets/Images/png/telegram6.png'
import telegram7 from '../../assets/Images/png/telegram7.png'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import OtvizModal from './Otzivmodal/OtvizModal';
const Otziv = () => {
  const [modal , setModal] = useState(false)
  const imgs =[
    {img :telegram1},
    {img :telegram2},
    {img :telegram3},
    {img :telegram4},
    {img :telegram5},
    {img :telegram6},
    {img :telegram7},
  ]
  return (
    <>
      <section className="otziv">
        <OtvizModal modal={modal} setModal={setModal} >
          <div className="otziv-modal__wrapper">
            <h4>Оставить отзыв</h4>
            <form className='otziv-modal__form'>
              <input type="text" placeholder='Имя' />
              <input type="text" placeholder='+7 (___)-___-__-__' />
              <textarea placeholder='Ваш отзыв' >
              </textarea>
              <button>Отправить</button>
            </form>
          </div>
        </OtvizModal>
        <div className="container">
              <h2>Отзывы пользователей пивоварни BAVARIA</h2>
            <Swiper       
            className='otziv__carusel'      
             modules={[Navigation, Pagination,  A11y]}    
             centerInsufficientSlides
             navigation     
             onSwiper={(swiper) => console.log(swiper)}
             onSlideChange={() => console.log('slide change')}
            >
        <div  className="otziv__prev">
        <img src={prev} alt="" />
       </div>
       <div  className="otziv__next">
        <img src={next} alt="" />
       </div>
       {
        imgs.map((item, index) =>(
              <SwiperSlide key={index}>
              <div className="otviz__wrapper">
                <div className='otviz__phone'>
                    <img className='otviz__phone-img' src={phone} alt="" />
                    <img src={item.img} alt="" className="otviz__telegram" />
                </div>
                <div className="otviz__wrapper-text">
                  <div className="otviz__wrapper-contact">
                    <img src={user} alt="" />
                      <div className="otviz-wrapper__contact-name">
                        <h3>Олег Сальков, г. Москва</h3>
                        <p>Владелец точильной мастерской</p>
                      </div>
                  </div>
                  <p className='contact-name__textp'>— Долго не понимал в чём прикол гриндера и чем он лучше лепесткового круга на болгарку особо. Теперь попробовал сам и выяснил . шлифовка поверхности получается быстрее и ровнее. Для подгонки деталей сварки вообще оптимал, кто занимается сваркой нержавейки, если нужно сделать ровную плоскость из железяки… шлифовка древесины от лкм.</p>
                   <p className='contact-name__textp'>— В общем норм даже если долго колбасить. Взял в мастерску пока доволен. Будем смотреть дальше</p>
                </div>
              </div>
              </SwiperSlide>
        ))
       }
      </Swiper>
      <button onClick={()=>setModal(true)} className='otviz__btn'>Оставить отзыв</button>
      </div>
      </section>
    </>
  );
}

export default Otziv