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
    const [harak , setHarak] = useState(false)
    const [harak2 , setHarak2] = useState(false)
    const [harak3 , setHarak3] = useState(false)
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
       
              <li >
                <div className="bavariya-seciton__product-image">
                  <img src={ wife ? wpro :  product1 } alt="" />
                  <div className="bavariya-section__product-text">
                    <span>30 литров</span>
                  </div>
                </div>
                <div className="bavariya-section__product-about">
                  <div className="bavariya__product-text">
                  { harak3 ? '' :  <h5 onClick={()=>setHarak3(true)}>Характеристики</h5>}
                    <p className={harak3 ? "" : 'bav-dn'}>
                      Выход сусла за цикл:<span>10 литров</span>
                    </p>
                    <p className={harak3 ? "" : 'bav-dn'} >
                      Потребляемая мощность: <span>1,5 кВт</span>
                    </p>
                    <p className={harak3 ? "" : 'bav-dn'} >
                      Вес: <span>13,7 кг</span>
                    </p>
                    <p className={harak3 ? "" : 'bav-dn'} >
                      Работа через WiFi: <span> {wife ?'да' : 'нет'}</span>
                    </p>
                    { harak3 ? <h5 onClick={()=>setHarak3(false)}>Скрыть</h5>: ''  }

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
              <li >
                <div className="bavariya-seciton__product-image">
                  <img src={ wife ? wpro2 :  product2 } alt="" />
                  <div className="bavariya-section__product-text">
                    <span>50 литров</span>
                  </div>
                </div>
                <div className="bavariya-section__product-about">
                  <div className="bavariya__product-text">
                  { harak2 ? '' :  <h5 onClick={()=>setHarak2(true)}>Характеристики</h5>}
                    <p className={harak2 ? "" : 'bav-dn'} >
                      Выход сусла за цикл:<span>30 литров</span>
                    </p>
                    <p  className={harak2 ? "" : 'bav-dn'} >
                      Потребляемая мощность: <span>2,8 кВт</span>
                    </p>
                    <p  className={harak2 ? "" : 'bav-dn'} >
                      Вес: <span>16,3 кг</span>
                    </p>
                    <p  className={harak2 ? "" : 'bav-dn'} >
                      Работа через WiFi: <span> {wife ?'да' : 'нет'}</span>
                    </p>
                    { harak2 ? <h5 onClick={()=>setHarak2(false)}>Скрыть</h5>: ''  }
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
              <li >
                <div className="bavariya-seciton__product-image">
                  <img src={ wife ? wpro3 :  product3 } alt="" />
                  <div className="bavariya-section__product-text">
                    <span>70 литров</span>
                  </div>
                </div>
                <div className="bavariya-section__product-about">
                  <div className="bavariya__product-text">
                    { harak ? '' :  <h5 onClick={()=>setHarak(true)}>Характеристики</h5>}
                    <p className={harak ? "" : 'bav-dn'}>
                      Выход сусла за цикл:<span>50 литров</span>
                    </p>
                    <p className={harak ? "" : 'bav-dn'} >
                      Потребляемая мощность: <span>3,2 кВт</span>
                    </p>
                    <p className={harak ? "" : 'bav-dn'} >
                      Вес: <span>25,5 кг</span>
                    </p>
                    <p className={harak ? "" : 'bav-dn'} >
                      Работа через WiFi: <span> {wife ?'да' : 'нет'}</span>
                    </p>
                    { harak ? <h5 onClick={()=>setHarak(false)}>Скрыть</h5>: ''  }
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
         
          </ul>
        </div>
      </section>
    </>
  );
}

export default Bavariya