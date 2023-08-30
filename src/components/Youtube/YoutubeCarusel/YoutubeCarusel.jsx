import React, { useState } from "react";
import "./style.css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import buttle1 from "../../../assets/Images/png/ybutul1.png";
import buttle3 from "../../../assets/Images/png/ybutul3.png";
import buttle4 from "../../../assets/Images/png/ybutul4.png";
import prev from "../../../assets/Images/svg/prev.svg";
import next from "../../../assets/Images/svg/next.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Modal from "../YoutubevideoModal/YoutubevideoModal";

const YoutubeCarusel = () => {
  const [modal, setModal] = useState(false);
  const carusel = [
    {
      img: buttle1,
      text: "Пшеничное пиво",
    },
    {
      img: buttle1,
      text: "Ячменное пиво",
    },
    {
      img: buttle3,
      text: "IPA",
    },
    {
      img: buttle4,
      text: "Молочный стаут",
    },
  ];
  return (
    <div className="youtubecarusel">
      <Modal modal={modal} setModal={setModal} />
      <div className="youtubecarusel-line"></div>
      <h4>Классические рецепты, адаптированные под пивоварню BAVARIA</h4>
      <div className="youtubecarusel__wrapper">
        <Swiper
          className="youtubecarusel__swipper"
          modules={[Navigation, Pagination, A11y]}
          centerInsufficientSlides
          breakpoints={{
            300: {
              slidesPerView: 1,
            },
            960: {
              slidesPerView: 2,
            },
            1388: {
              slidesPerView: 3,
            },
          }}
          navigation
          pagination={{ clickable: true }}
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
          {carusel.map((item, index) => (
            <SwiperSlide key={index} className="youtubecarusel__swipper-slide">
              <div className="youtubecarusel__swipper-wrap">
                <h4>{item.text}</h4>
                <p className="carousel__hover" onClick={() => setModal(true)}>Открыть рецепт</p>
                <img src={item.img} alt="img" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default YoutubeCarusel;
