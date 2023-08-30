import React, { useState } from 'react'
import './bavriya.css'
import product1 from "../../assets/Images/png/product1.png"
import product2 from '../../assets/Images/png/product2.png'
import product3 from '../../assets/Images/png/product3.png'
import wpro from '../../assets/Images/png/wpro.png'
import wpro2 from '../../assets/Images/png/wpro2.png'
import wpro3 from '../../assets/Images/png/wpro3.png'

const Bavariya = () => {
    const [wife , serWife] = useState(true)
    const wife2 = [
        {img: wife ? product1 : wpro  ,
        litr:'10 литров',
        litr2:'30 литров',
        ves :'13,7 кг',
        vife:wife ? 'нет': 'да',
        motor :'1,5 кВт'
        },
        {img:wife ? product2 : wpro2  ,
         litr:'30 литров',
         litr2:'50 литров',
         ves :'16,3 кг',
         vife:wife ? 'нет': 'да',
         motor :'2,8 кВт'
        },
        {img:wife ? product3 : wpro3  ,
        litr:'50 литров',
        litr2:'70 литров',
        ves :'25,5 кг',
        vife:wife ? 'нет': 'да',
        motor :'3,2 кВт'
        }
    ]
  return (
    <>
      <section className="bavariya-section">
        <div className="container">
          <div className="bavariya-section__text">
            <h2>
              {wife ? "Выберите свою пивоварню BAVARIA" : "BAVARIA для каждого"}{" "}
            </h2>
            <h4>
              {wife
                ? "От хобби до производственных масштабов"
                : "От хобби до производственных масштабов"}
            </h4>
          </div>
          <div className="bavariya-section__quiz">
            <button
              onClick={() => serWife(false)}
              className={
                wife
                  ? "bavariya-section__quiz-button"
                  : "bavariya-section__quiz-avtive"
              }
            >
              Без WiFi
            </button>
            <button
              onClick={() => serWife(true)}
              className={
                wife
                  ? "bavariya-section__quiz-avtive"
                  : "bavariya-section__quiz-button"
              }
            >
              {" "}
              С WiFi
            </button>
          </div>
          <ul className="bavariya-section__product">
            {wife2.map((item, index) => (
              <li key={index}>
                <div className="bavariya-seciton__product-image">
                  <img src={item.img} alt="" />
                  <div className="bavariya-section__product-text">
                    <span>{item.litr2}</span>
                  </div>
                </div>
                <div className="bavariya-section__product-about">
                  <div className="bavariya__product-text">
                    <h5>Характеристики</h5>
                    <p>
                      Выход сусла за цикл:<span>{item.litr}</span>
                    </p>
                    <p>
                      Потребляемая мощность: <span>{item.motor}</span>
                    </p>
                    <p>
                      Вес: <span>{item.ves}</span>
                    </p>
                    <p>
                      Работа через WiFi: <span> {item.vife}</span>
                    </p>
                  </div>
                  <div className="bavariya-price">
                    <span className="bavariya-price__new">44 990 ₽</span>
                    <span className="bavariya-price__old">64 290 ₽</span>
                  </div>
                  <button className="all__btn--hover">Заказать</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Bavariya