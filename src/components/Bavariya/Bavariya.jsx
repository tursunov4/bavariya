import  { useState } from 'react'
import './bavriya.css'
import product1 from "../../assets/Images/png/Bavariya/product1.webp"
import product2 from "../../assets/Images/png/Bavariya/product2.webp"
import product3 from "../../assets/Images/png/Bavariya/product3.webp"

import wpro from '../../assets/Images/png/Bavariya/wpro.webp'
import wpro2 from '../../assets/Images/png/Bavariya/wpro2.webp'
import wpro3 from '../../assets/Images/png/Bavariya/wpro3.webp'


const Bavariya = () => {
    const [wife , serWife] = useState(false)
    const wife2 = [
        {img: wife ? wpro :  product1  ,
        litr:'10 литров',
        litr2:'30 литров',
        ves :'13,7 кг',
        vife:wife ?'да' : 'нет',
        motor :'1,5 кВт'
        },
        {img: wife ? wpro2 :  product2  ,
         litr:'30 литров',
         litr2:'50 литров',
         ves :'16,3 кг',
         vife:wife ?'да' : 'нет',
         motor :'2,8 кВт'
        },
        {img: wife ? wpro3 :  product3  ,
        litr:'50 литров',
        litr2:'70 литров',
        ves :'25,5 кг',
        vife:wife ?'да' : 'нет',
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
                wife ? 
                  "bavariya-section__quiz-avtive" 
                  : 'bavariya-section__quiz-button'
                }
            >
              Без WiFi
            </button>
            <button
              onClick={() => serWife(true)}
              className={ wife ?"bavariya-section__quiz-button" :    " bavariya-section__quiz-avtive"   }
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
                   <div>
                   <div className="bavariya-price">
                    <span className="bavariya-price__new">44 990 ₽</span>
                    <span className="bavariya-price__old">64 290 ₽</span>
                  </div>
                  <button className="all__btn--hover">Заказать</button>
                   </div>
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