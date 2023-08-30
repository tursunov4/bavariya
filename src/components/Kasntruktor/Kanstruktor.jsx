import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./kansttuktor.css";
import kanstrukt from "../../assets/Images/png/kanstruktor.png";
import kanstitem from "../../assets/Images/png/kansitem1.png";
import kanstitem2 from "../../assets/Images/png/kansitem2.png";
import kanstitem3 from "../../assets/Images/png/kansitem3.png";
import kanstitem4 from "../../assets/Images/png/kansitem4.png";
import kanstitem5 from "../../assets/Images/png/kansitem5.png";
import kanstitem6 from "../../assets/Images/png/kansitem6.png";
import kanstitem7 from "../../assets/Images/png/kansitem7.png";
import prev from "../../assets/Images/svg/prevblack.svg";
import next from "../../assets/Images/svg/nextblack.svg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Modalkans from "./Modalkans/Modalkans";
const Kanstruktor = () => {
  const [modal, setModal] = useState(false);
  const [numactive, setNumactive] = useState(1);
  const [num, setNum] = useState(1);
  const data = [
    {
      id: 1,
      name: "Крышка",
      title: "Изолирует процесс пивоварения от внешней среды.",
      img: kanstitem,
    },
    {
      id: 2,
      name: "Прижимная планка",
      title: "Обеспечивает надёжную фиксацию бака.",
      img: kanstitem2,
    },
    {
      id: 3,
      name: "Два фильтрующих сита и сетка",
      title:
        "2 сита и сетка необходимы для того,чтобы качественно фильтровать солод.",
      img: kanstitem3,
    },
    {
      id: 4,
      name: "Заторный бак",
      title: "Необходим для затирания солода.",
      img: kanstitem4,
    },
    {
      id: 5,
      name: "Сусловарочный котел",
      title: "Используется для кипячения сусла вместе с хмелем.",
      img: kanstitem5,
    },
    {
      id: 6,
      name: "Кран для слива сусла",
      title:
        "Кран на ½ дюйма позволяет быстро и точно сливать сусло в подготовленную ёмкость.",
      img: kanstitem6,
    },
    {
      id: 7,
      name: "Блок управления",
      title: "Необходим для контроля процесса пивоварения.",
      img: kanstitem7,
    },
  ];
  const aboutdata = [
    {
      name: "Крышка",
      img: kanstitem,
      data: [
        {
          title: "Диаметр",
          array: [
            {
              num: "350 мм",
            },
            {
              num: "400 мм",
            },
            {
              num: "450 мм",
            },
          ],
        },

        {
          title: "Материал",
          array: [
            {
              num: "AISI 304",
            },
          ],
        },
      ],
    },
    {
      name: "Прижимная планка",
      img: kanstitem2,
      data: [
        {
          title: "Диаметр",
          array: [
            {
              num: "20 мм",
            },
          ],
        },

        {
          title: "Материал",
          array: [
            {
              num: "AISI 304",
            },
          ],
        },
      ],
    },
    {
      name: "Фильтрующее сито",
      img: kanstitem3,
      data: [
        {
          title: "Диаметр",
          array: [
            {
              num: 350,
            },
            {
              num: 400,
            },
            {
              num: 450,
            },
          ],
        },
        {
          title: "Толщина нижнего",
          array: [
            {
              num: "1 мм",
            },
            {
              num: "1 мм",
            },
            {
              num: "2 мм",
            },
          ],
        },
        {
          title: "Толщина верхнего",
          array: [
            {
              num: "2 мм",
            },
            {
              num: "2 мм",
            },
            {
              num: "2 мм",
            },
          ],
        },
        {
          title: "Материал",
          array: [
            {
              num: "AISI 304",
            },
          ],
        },
      ],
    },
    {
      name: "Заторный бак",
      img: kanstitem4,
      data: [
        {
          title: "Высота",
          array: [
            {
              num: "275 мм",
            },
            {
              num: "355 мм",
            },
            {
              num: "480 мм",
            },
          ],
        },
        {
          title: "Диаметр",
          array: [
            {
              num: "230 мм",
            },
            {
              num: "290 мм",
            },
            {
              num: "330 мм",
            },
          ],
        },
        {
          title: "Материал",
          array: [
            {
              num: "AISI 304",
            },
          ],
        },
      ],
    },
    {
      name: "Заторный бак",
      img: kanstitem5,
      data: [
        {
          title: "Высота",
          array: [
            {
              num: "350 мм",
            },
            {
              num: "400 мм",
            },
            {
              num: "450 мм",
            },
          ],
        },
        {
          title: "Диаметр",
          array: [
            {
              num: "350 мм",
            },
            {
              num: "400 мм",
            },
            {
              num: "450 мм",
            },
          ],
        },
        {
          title: "Высота ножек",
          array: [
            {
              num: "160 мм",
            },
            {
              num: "160 мм",
            },
            {
              num: "174 мм",
            },
          ],
        },
        {
          title: "Материал",
          array: [
            {
              num: "AISI 304",
            },
          ],
        },
      ],
    },
    {
      name: "Блок управления",
      img: kanstitem6,
      data: [
        {
          title: "Модификация",
          array: [
            {
              num: "С WiFi и Без WiFi",
            },
          ],
        },
        {
          title: "Режимы",
          array: [
            {
              num: "Ручной и автоматический",
            },
          ],
        },
      ],
    },
    {
      name: "Блок управления",
      img: kanstitem7,
      data: [
        {
          title: "Модификация",
          array: [
            {
              num: "С WiFi и Без WiFi",
            },
          ],
        },
        {
          title: "Режимы",
          array: [
            {
              num: "Ручной и автоматический",
            },
          ],
        },
      ],
    },
  ];
  const openModal = (id) => {
    setNum(id - 0);
    setModal(true);
  };
  return (
    <section className="kansturuktor-section">
      <Modalkans modal={modal} setModal={setModal}>
        {
          <>
            <h4 className="kans-modal__title">{aboutdata[num].name}</h4>
            <div className="kans-modal__litrs">
              <span>30 л</span>
              <span>50 л</span>
              <span>70 л</span>
            </div>
            <div className="kans-modal__info">
              {aboutdata[num].data.map((item, index) => (
                <div className="kans-modal__info-text">
                  <p>{item.title}</p>
                  <div className="info-text__wrapper">
                    {item.array.map((item, index) => (
                      <p key={index}>{item.num}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="kans-modal__img">
              <img src={aboutdata[num].img} alt="" />
            </div>
          </>
        }
      </Modalkans>
      <div className="container">
        <h2>BAVARIA — совершенство в каждой детали</h2>
        <h3>
          Создана пивоваром-экспертом для истинных ценителей пенной культуры
        </h3>
        <div className="kansturuktor__wrapper">
          <div className="kansturukor__img-wrapper">
            <img src={kanstrukt} alt="" />
            <div
              onClick={() => setNumactive(1)}
              className="kansturuktor__line kansturuktor__line--hover"
            >
              <svg
                width="239"
                height="16"
                viewBox="0 0 239 16"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM238.773 8L233 2.2265L227.226 8L233 13.7735L238.773 8ZM1 9H3V7H1V9ZM7 9H11V7H7V9ZM15 9H19V7H15V9ZM23 9H27V7H23V9ZM31 9H35V7H31V9ZM39 9H43V7H39V9ZM47 9H51V7H47V9ZM55 9H59V7H55V9ZM63 9H67V7H63V9ZM71 9H75V7H71V9ZM79 9H83V7H79V9ZM87 9H91V7H87V9ZM95 9H99V7H95V9ZM103 9H107V7H103V9ZM111 9H115V7H111V9ZM119 9H123V7H119V9ZM127 9H131V7H127V9ZM135 9H139V7H135V9ZM143 9H147V7H143V9ZM151 9H155V7H151V9ZM159 9H163V7H159V9ZM167 9H171V7H167V9ZM175 9H179V7H175V9ZM183 9H187V7H183V9ZM191 9H195V7H191V9ZM199 9H203V7H199V9ZM207 9H211V7H207V9ZM215 9H219V7H215V9ZM223 9H227V7H223V9ZM231 9H233V7H231V9Z"
                  fill={numactive === 1 ? "#FFB800" : "#fff"}
                />
              </svg>
              <p className={numactive === 1 ? "kansactive" : ""}>Крышка</p>
            </div>
            <div
              onClick={() => setNumactive(2)}
              className="kansturuktor__line1  kansturuktor__line--hover"
            >
              <svg
                width="239"
                height="16"
                viewBox="0 0 239 16"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM238.773 8L233 2.2265L227.226 8L233 13.7735L238.773 8ZM1 9H3V7H1V9ZM7 9H11V7H7V9ZM15 9H19V7H15V9ZM23 9H27V7H23V9ZM31 9H35V7H31V9ZM39 9H43V7H39V9ZM47 9H51V7H47V9ZM55 9H59V7H55V9ZM63 9H67V7H63V9ZM71 9H75V7H71V9ZM79 9H83V7H79V9ZM87 9H91V7H87V9ZM95 9H99V7H95V9ZM103 9H107V7H103V9ZM111 9H115V7H111V9ZM119 9H123V7H119V9ZM127 9H131V7H127V9ZM135 9H139V7H135V9ZM143 9H147V7H143V9ZM151 9H155V7H151V9ZM159 9H163V7H159V9ZM167 9H171V7H167V9ZM175 9H179V7H175V9ZM183 9H187V7H183V9ZM191 9H195V7H191V9ZM199 9H203V7H199V9ZM207 9H211V7H207V9ZM215 9H219V7H215V9ZM223 9H227V7H223V9ZM231 9H233V7H231V9Z"
                  fill={numactive === 2 ? "#FFB800" : "#fff"}
                />
              </svg>
              <p className={numactive === 2 ? "kansactive" : ""}>
                {" "}
                Прижимная планка
              </p>
            </div>
            <div
              onClick={() => setNumactive(3)}
              className="kansturuktor__line2  kansturuktor__line--hover"
            >
              <svg
                width="239"
                height="16"
                viewBox="0 0 239 16"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM238.773 8L233 2.2265L227.226 8L233 13.7735L238.773 8ZM1 9H3V7H1V9ZM7 9H11V7H7V9ZM15 9H19V7H15V9ZM23 9H27V7H23V9ZM31 9H35V7H31V9ZM39 9H43V7H39V9ZM47 9H51V7H47V9ZM55 9H59V7H55V9ZM63 9H67V7H63V9ZM71 9H75V7H71V9ZM79 9H83V7H79V9ZM87 9H91V7H87V9ZM95 9H99V7H95V9ZM103 9H107V7H103V9ZM111 9H115V7H111V9ZM119 9H123V7H119V9ZM127 9H131V7H127V9ZM135 9H139V7H135V9ZM143 9H147V7H143V9ZM151 9H155V7H151V9ZM159 9H163V7H159V9ZM167 9H171V7H167V9ZM175 9H179V7H175V9ZM183 9H187V7H183V9ZM191 9H195V7H191V9ZM199 9H203V7H199V9ZM207 9H211V7H207V9ZM215 9H219V7H215V9ZM223 9H227V7H223V9ZM231 9H233V7H231V9Z"
                  fill={numactive === 3 ? "#FFB800" : "#fff"}
                />
              </svg>
              <p className={numactive === 3 ? "kansactive" : ""}>
                Два фильтрующих <br /> сита и сетка{" "}
              </p>
            </div>
            <div
              onClick={() => setNumactive(3)}
              className="kansturuktor__line3  kansturuktor__line--hover"
            >
              <svg
                width="111"
                height="16"
                viewBox="0 0 111 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM1 9H2.96429V7H1V9ZM6.89286 9H10.8214V7H6.89286V9ZM14.75 9H18.6786V7H14.75V9ZM22.6071 9H26.5357V7H22.6071V9ZM30.4643 9H34.3929V7H30.4643V9ZM38.3214 9H42.25V7H38.3214V9ZM46.1786 9H50.1071V7H46.1786V9ZM54.0357 9H57.9643V7H54.0357V9ZM61.8928 9H65.8214V7H61.8928V9ZM69.75 9H73.6786V7H69.75V9ZM77.6071 9H81.5357V7H77.6071V9ZM85.4643 9H89.3929V7H85.4643V9ZM93.3214 9H97.25V7H93.3214V9ZM101.179 9H105.107V7H101.179V9ZM109.036 9H111V7H109.036V9Z"
                  fill={numactive === 3 ? "#FFB800" : "#fff"}
                />
              </svg>
            </div>
            <div
              onClick={() => setNumactive(3)}
              className="kansturuktor__line4  kansturuktor__line--hover"
            >
              <svg
                width="111"
                height="16"
                viewBox="0 0 111 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM1 9H2.96429V7H1V9ZM6.89286 9H10.8214V7H6.89286V9ZM14.75 9H18.6786V7H14.75V9ZM22.6071 9H26.5357V7H22.6071V9ZM30.4643 9H34.3929V7H30.4643V9ZM38.3214 9H42.25V7H38.3214V9ZM46.1786 9H50.1071V7H46.1786V9ZM54.0357 9H57.9643V7H54.0357V9ZM61.8928 9H65.8214V7H61.8928V9ZM69.75 9H73.6786V7H69.75V9ZM77.6071 9H81.5357V7H77.6071V9ZM85.4643 9H89.3929V7H85.4643V9ZM93.3214 9H97.25V7H93.3214V9ZM101.179 9H105.107V7H101.179V9ZM109.036 9H111V7H109.036V9Z"
                  fill={numactive === 3 ? "#FFB800" : "#fff"}
                />
              </svg>
            </div>
            <div
              onClick={() => setNumactive(3)}
              className="kansturuktor__line5  kansturuktor__line--hover"
            >
              <svg
                width="2"
                height="116"
                viewBox="0 0 2 116"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="1"
                  y1="4.37114e-08"
                  x2="0.999995"
                  y2="116"
                  stroke={numactive === 3 ? "#FFB800" : "#fff"}
                  stroke-width="2"
                  stroke-dasharray="4 4"
                />
              </svg>
            </div>
            <div
              onClick={() => setNumactive(4)}
              className="kansturuktor__line6  kansturuktor__line--hover"
            >
              <svg
                width="239"
                height="16"
                viewBox="0 0 239 16"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM238.773 8L233 2.2265L227.226 8L233 13.7735L238.773 8ZM1 9H3V7H1V9ZM7 9H11V7H7V9ZM15 9H19V7H15V9ZM23 9H27V7H23V9ZM31 9H35V7H31V9ZM39 9H43V7H39V9ZM47 9H51V7H47V9ZM55 9H59V7H55V9ZM63 9H67V7H63V9ZM71 9H75V7H71V9ZM79 9H83V7H79V9ZM87 9H91V7H87V9ZM95 9H99V7H95V9ZM103 9H107V7H103V9ZM111 9H115V7H111V9ZM119 9H123V7H119V9ZM127 9H131V7H127V9ZM135 9H139V7H135V9ZM143 9H147V7H143V9ZM151 9H155V7H151V9ZM159 9H163V7H159V9ZM167 9H171V7H167V9ZM175 9H179V7H175V9ZM183 9H187V7H183V9ZM191 9H195V7H191V9ZM199 9H203V7H199V9ZM207 9H211V7H207V9ZM215 9H219V7H215V9ZM223 9H227V7H223V9ZM231 9H233V7H231V9Z"
                  fill={numactive === 4 ? "#FFB800" : "#fff"}
                />
              </svg>
              <p className={numactive === 4 ? "kansactive" : ""}>
                Заторный бак
              </p>
            </div>

            <div
              onClick={() => setNumactive(5)}
              className="kansturuktor__line7  kansturuktor__line--hover"
            >
              <svg
                width="239"
                height="16"
                viewBox="0 0 239 16"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM238.773 8L233 2.2265L227.226 8L233 13.7735L238.773 8ZM1 9H3V7H1V9ZM7 9H11V7H7V9ZM15 9H19V7H15V9ZM23 9H27V7H23V9ZM31 9H35V7H31V9ZM39 9H43V7H39V9ZM47 9H51V7H47V9ZM55 9H59V7H55V9ZM63 9H67V7H63V9ZM71 9H75V7H71V9ZM79 9H83V7H79V9ZM87 9H91V7H87V9ZM95 9H99V7H95V9ZM103 9H107V7H103V9ZM111 9H115V7H111V9ZM119 9H123V7H119V9ZM127 9H131V7H127V9ZM135 9H139V7H135V9ZM143 9H147V7H143V9ZM151 9H155V7H151V9ZM159 9H163V7H159V9ZM167 9H171V7H167V9ZM175 9H179V7H175V9ZM183 9H187V7H183V9ZM191 9H195V7H191V9ZM199 9H203V7H199V9ZM207 9H211V7H207V9ZM215 9H219V7H215V9ZM223 9H227V7H223V9ZM231 9H233V7H231V9Z"
                  fill={numactive === 5 ? "#FFB800" : "#fff"}
                />
              </svg>
              <p className={numactive === 5 ? "kansactive" : ""}>
                Сусловарочный котел
              </p>
            </div>
            <div
              onClick={() => setNumactive(6)}
              className="kansturuktor__line8  kansturuktor__line--hover"
            >
              <svg
                width="239"
                height="16"
                viewBox="0 0 239 16"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM238.773 8L233 2.2265L227.226 8L233 13.7735L238.773 8ZM1 9H3V7H1V9ZM7 9H11V7H7V9ZM15 9H19V7H15V9ZM23 9H27V7H23V9ZM31 9H35V7H31V9ZM39 9H43V7H39V9ZM47 9H51V7H47V9ZM55 9H59V7H55V9ZM63 9H67V7H63V9ZM71 9H75V7H71V9ZM79 9H83V7H79V9ZM87 9H91V7H87V9ZM95 9H99V7H95V9ZM103 9H107V7H103V9ZM111 9H115V7H111V9ZM119 9H123V7H119V9ZM127 9H131V7H127V9ZM135 9H139V7H135V9ZM143 9H147V7H143V9ZM151 9H155V7H151V9ZM159 9H163V7H159V9ZM167 9H171V7H167V9ZM175 9H179V7H175V9ZM183 9H187V7H183V9ZM191 9H195V7H191V9ZM199 9H203V7H199V9ZM207 9H211V7H207V9ZM215 9H219V7H215V9ZM223 9H227V7H223V9ZM231 9H233V7H231V9Z"
                  fill={numactive === 6 ? "#FFB800" : "#fff"}
                />
              </svg>
              <p className={numactive === 6 ? "kansactive" : ""}>
                Кран для слива сусла
              </p>
            </div>
            <div
              onClick={() => setNumactive(7)}
              className="kansturuktor__line9 kansturuktor__line--hover"
            >
              <svg
                width="239"
                height="16"
                viewBox="0 0 239 16"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM238.773 8L233 2.2265L227.226 8L233 13.7735L238.773 8ZM1 9H3V7H1V9ZM7 9H11V7H7V9ZM15 9H19V7H15V9ZM23 9H27V7H23V9ZM31 9H35V7H31V9ZM39 9H43V7H39V9ZM47 9H51V7H47V9ZM55 9H59V7H55V9ZM63 9H67V7H63V9ZM71 9H75V7H71V9ZM79 9H83V7H79V9ZM87 9H91V7H87V9ZM95 9H99V7H95V9ZM103 9H107V7H103V9ZM111 9H115V7H111V9ZM119 9H123V7H119V9ZM127 9H131V7H127V9ZM135 9H139V7H135V9ZM143 9H147V7H143V9ZM151 9H155V7H151V9ZM159 9H163V7H159V9ZM167 9H171V7H167V9ZM175 9H179V7H175V9ZM183 9H187V7H183V9ZM191 9H195V7H191V9ZM199 9H203V7H199V9ZM207 9H211V7H207V9ZM215 9H219V7H215V9ZM223 9H227V7H223V9ZM231 9H233V7H231V9Z"
                  fill={numactive === 7 ? "#FFB800" : "#fff"}
                />
              </svg>
              <p className={numactive === 7 ? "kansactive" : ""}>
                Блок управления
              </p>
            </div>
          </div>
          <div className="kansturuktor-carusel">
            <Swiper
              className="kansCarusel"
              modules={[Navigation, Pagination, A11y]}
              centerInsufficientSlides
              navigation
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <div className="kans-prev">
                <img src={prev} alt="" />
              </div>
              <div className="kans-next">
                <img src={next} alt="" />
              </div>
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="kansturuktor-catusel__item">
                    <p className="kanstruktor-name">{item.name}</p>
                    <h5>{item.title}</h5>
                    <h6 onClick={() => openModal(index)}>Характеристики</h6>
                    <div className="kans-carusel__img1">
                      <img src={item.img} alt="" />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kanstruktor;
