import React from "react";
import img1 from "../../../assets/Images/png/Modal Image/Image 1.png";
import img2 from "../../../assets/Images/png/Modal Image/Image 2.png";
import img3 from "../../../assets/Images/png/Modal Image/Image 3.png";
import Exit from '../../../assets/Images/svg/exit.svg'
import "./sytle.css";
const YoutubevideoModal = ({modal , setModal}) => {
  window.onclick = function(event) {
    if (event.target.id ==="modal5") {
      setModal(false)
      
      console.log(modal)     
    }
  }
if(modal){
    return (
      <div id='modal5'  className="modal5">
       <div className="youTube__modal">
            <h3>Пшеничное пиво</h3>
            <div className="modal__wrapper">
              <div className="modal__left">
                <div className="md__table">
                  <table>
                    <tr>
                      <td className="modal__wrapper--td1">Солод пшеничный</td>
                      <td className="modal__wrapper--td2">7 кг</td>
                    </tr>
  
                    <tr>
                      <td className="modal__wrapper--td1">Солод Vienna malt</td>
                      <td className="modal__wrapper--td2">4 кг</td>
                    </tr>
  
                    <tr>
                      <td className="modal__wrapper--td1">Солод Pilsner malt</td>
                      <td className="modal__wrapper--td2">3 кг</td>
                    </tr>
  
                    <tr>
                      <td className="modal__wrapper--td1">Вода</td>
                      <td className="modal__wrapper--td2">70 л</td>
                    </tr>
  
                    <tr>
                      <td className="modal__wrapper--td1">Хмель Hercules</td>
                      <td className="modal__wrapper--td2">10 г</td>
                    </tr>
  
                    <tr>
                      <td className="modal__wrapper--td1">Хмель Saphir</td>
                      <td className="modal__wrapper--td2">50 г</td>
                    </tr>
  
                    <tr>
                      <td className="modal__wrapper--td1">Хмель Perle</td>
                      <td className="modal__wrapper--td2">50 г</td>
                    </tr>
  
                    <tr>
                      <td className="modal__wrapper--td1">Дрожжи пивные</td>
                      <td className="modal__wrapper--td2">44 г</td>
                    </tr>
  
                    <tr>
                      <td className="modal__wrapper--td1">
                        Таблетка ирландского мха
                      </td>
                      <td className="modal__wrapper--td2">1 шт.</td>
                    </tr>
  
                    <tr>
                      <td className="modal__wrapper--td1">Апельсиновая цедра</td>
                      <td className="modal__wrapper--td2">100 г</td>
                    </tr>
  
                    <tr>
                      <td className="modal__wrapper--td1">Кориандр</td>
                      <td className="modal__wrapper--td2">20 г.</td>
                    </tr>
                  </table>
                </div>
  
                <div className="modal__left--img">
                  <img src={img1} alt="Image" />
                  <img src={img2} alt="Image" />
                </div>
              </div>
  
              <div className="modal__right">
                <p>
                  <span>Шаг 1. </span>Воду нагреваем, при температуре 52° засыпаем
                  солод.
                </p>
  
                <p>
                  <span>Шаг 2. </span>90 минут выдерживаем при 70°, 10 минут — при
                  78°.
                </p>
  
                <p>
                  <span>Шаг 3. </span>Процеживаем сусло.
                </p>
  
                <p>
                  <span>Шаг 4. </span> Общее время варки — 90 минут. На старте
                  добавляем 10 г Hercules, на 75 минуте — 50 г Perle, цедру и
                  кориандр. На 80 минуте кидаем таблетку ирландского мха,а за 2
                  минуты до конца варки — 50 г Saphir.
                </p>
  
                <p>
                  <span>Шаг 5. </span> Сусло остужаем до 25°, добавляем дрожжи,
                  ставим гидрозатвор.
                </p>
  
                <p>
                  <span>Шаг 6. </span> Оставляем для брожения при температуре
                  24–25° на 14 дней.
                </p>
  
                <div className="video__md">
                  <iframe
                    src="https://www.youtube.com/embed/VYSc1h8qkgg?si=zsYKEq6exWZnHbHw"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
  
            <button className="close__md">
              <img onClick={()=>setModal(false)} src={Exit} alt="Close" />
            </button>
          </div>
    </div>
    )
}
};

export default YoutubevideoModal;
