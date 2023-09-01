import  { useState } from 'react'
import './padarka.css'
import padarka1 from '../../assets/Images/png/padarka-list1.webp'
import person from '../../assets/Images/svg/person.svg'
import contact from '../../assets/Images/svg/contact.svg'
const Padarka = () => {
  const [number , setNumber] = useState(1)
  const [litr ,setLitr] = useState(30)
  const [wife , setWife] = useState(false)
  return (
    <>
      <section className="paraka-section">
        <div className="container">
          <div className="padarka-section__mainwrap">

          <div className="padarka-section__wrapper">
            <h2>Получите 3 полезных подарка</h2>
            <h4>при заказе с 10 на 11 августа</h4>
            <div className="padarka-section__product">
              <ul className="padarka-section__product-list">
                <li className="paraka-list1">
                  <button className={number===1 ? "paraka-list1--btn1 button padarka__product-active " :'paraka-list1--btn1 button' }>1</button>
                  <button className={number===2 ? "paraka-list1--btn2 button padarka__product-active " :'paraka-list1--btn2 button' }>2</button>
                  <button className={number===3 ? "paraka-list1--btn3 button padarka__product-active " :'paraka-list1--btn3 button' }>3</button>
                  <button className={number===4 ? "paraka-list1--btn4 button padarka__product-active " :'paraka-list1--btn4 button' }>4</button>
                  <button className={number===5 ? "paraka-list1--btn5 button padarka__product-active " :'paraka-list1--btn5 button' }>5</button>
                  <button className={number===6 ? "paraka-list1--btn6 button padarka__product-active " :'paraka-list1--btn6 button' }>6</button>
                  <button className={number===7 ? "paraka-list1--btn7 button padarka__product-active " :'paraka-list1--btn7 button' }>7</button>
                  <button className={number===8 ? "paraka-list1--btn8 button padarka__product-active " :'paraka-list1--btn8 button' }>8</button>
                </li>
                <li className="padarka-list2">
                  <button className={number===1 ? "paraka-list2--btn1 button padarka__product-active " :'paraka-list2--btn1 button' }>1</button>
                  <button className={number===2 ? "paraka-list2--btn2 button padarka__product-active " :'paraka-list2--btn2 button' }>2</button>
                  <button className={number===3 ? "paraka-list2--btn3 button padarka__product-active " :'paraka-list2--btn3 button' }>3</button>
                  <button className={number===4 ? "paraka-list2--btn4 button padarka__product-active " :'paraka-list2--btn4 button' }>4</button>
                  <button className={number===5 ? "paraka-list2--btn5 button padarka__product-active " :'paraka-list2--btn5 button' }>5</button>
                  <button className={number===6 ? "paraka-list2--btn6 button padarka__product-active " :'paraka-list2--btn6 button' }>6</button>
                  <button className={number===7 ? "paraka-list2--btn7 button padarka__product-active " :'paraka-list2--btn7 button' }>7</button>
                  <button className={number===8 ? "paraka-list2--btn8 button padarka__product-active " :'paraka-list2--btn8 button' }>8</button>
                </li>
                <li className="padarka-list3">
                  <div className="padarka__product-number">
                    <div
                      onClick={() => setNumber(1)}
                      className="padarka__product-numberlist"
                    >
                      <span
                        className={number === 1 && "padarka__product-active"}
                      >
                        1
                      </span>
                      <p className={number === 1 && "padarka__product-active2"}>
                        Крышка
                      </p>
                    </div>
                    <div
                      onClick={() => setNumber(2)}
                      className="padarka__product-numberlist"
                    >
                      <span
                        className={number === 2 && "padarka__product-active"}
                      >
                        2
                      </span>
                      <p className={number === 2 && "padarka__product-active2"}>
                        Прижимная планка
                      </p>
                    </div>
                    <div
                      onClick={() => setNumber(3)}
                      className="padarka__product-numberlist"
                    >
                      <span
                        className={number === 3 && "padarka__product-active"}
                      >
                        3
                      </span>
                      <p className={number === 3 && "padarka__product-active2"}>
                        2 фильтрующих сита
                      </p>
                    </div>
                    <div
                      onClick={() => setNumber(4)}
                      className="padarka__product-numberlist"
                    >
                      <span
                        className={number === 4 && "padarka__product-active"}
                      >
                        4
                      </span>
                      <p className={number === 4 && "padarka__product-active2"}>
                        Сетка
                      </p>
                    </div>
                  </div>
                  <div className="padarka__product-number">
                    <div
                      onClick={() => setNumber(5)}
                      className="padarka__product-numberlist"
                    >
                      <span
                        className={number === 5 && "padarka__product-active"}
                      >
                        5
                      </span>
                      <p className={number === 5 && "padarka__product-active2"}>
                        Заторный бак
                      </p>
                    </div>
                    <div
                      onClick={() => setNumber(6)}
                      className="padarka__product-numberlist"
                    >
                      <span
                        className={number === 6 && "padarka__product-active"}
                      >
                        6
                      </span>
                      <p className={number === 6 && "padarka__product-active2"}>
                        Сусловарочный котел
                      </p>
                    </div>
                    <div
                      onClick={() => setNumber(7)}
                      className="padarka__product-numberlist"
                    >
                      <span
                        className={number === 7 && "padarka__product-active"}
                      >
                        7
                      </span>
                      <p className={number === 7 && "padarka__product-active2"}>
                        Кран для слива сусла
                      </p>
                    </div>
                    <div
                      onClick={() => setNumber(8)}
                      className="padarka__product-numberlist"
                    >
                      <span
                        className={number === 8 && "padarka__product-active"}
                      >
                        8
                      </span>
                      <p className={number === 8 && "padarka__product-active2"}>
                        Блок управления
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="padarka-section__skidka">
                <h3>Подарки</h3>
                <div className="padarka-section__list">
                  <div className="padarka-section__skidka-listitem">
                    <div className="padarka-section__skidka-img">
                      <img src={padarka1} alt="" />
                    </div>
                    <h4>Чиллер</h4>
                    <p>1500 ₽</p>
                  </div>
                  <div className="padarka-section__skidka-listitem">
                    <div className="padarka-section__skidka-img">
                
                    </div>
                    <h4>Чиллер</h4>
                    <p>1500 ₽</p>
                  </div>
                  <div className="padarka-section__skidka-listitem">
                    <div className="padarka-section__skidka-img">
                    
                    </div>
                    <h4>Чиллер</h4>
                    <p>1500 ₽</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="padarka__contact">
            <div className="padarka__litraj-wrapper">
              <h4>Литраж</h4>
              <div className="litraj-wrapper__buttons">
                <button onClick={()=>setLitr(30)} className={litr=== 30 && "litraj-buttons__active"}>30 л</button>
                <button onClick={()=>setLitr(50)} className={litr=== 50 && "litraj-buttons__active"} >50 л</button>
                <button onClick={()=>setLitr(70)} className={litr=== 70 && "litraj-buttons__active"}>70 л</button>
              </div>
              <h4>Наличие WiFi</h4>
              <button onClick={()=>setWife(!wife)} className="litraj__wife-button">
                <p className={wife ? "wife-button__p1" :'wife-button__p2'}>Без WiFi</p>
                <div className="litraj__onclick">
                  <div className= {wife ? "litraj__circle litraj__clickture" :'litraj__circle litraj__clickfalse '}></div>
                </div>
                <p className={wife ? "wife-button__p2" :'wife-button__p1'} >С WiFi</p>
              </button>
            </div>
            <span className="padarka__litraj-line"></span>
            <div className="padarka__litraj-inputs">
              <label>
                <img className="litraj-inputs__img" src={person} alt="" />
                <input type="text" placeholder="Имя" />
              </label>
              <label>
                <img className="litraj-inputs__img" src={contact} alt="" />
                <input type="text" placeholder="Телефон" />
              </label>
            </div>
            <span className="padarka__litraj-line"></span>
            <div className="padarka__litraj-price">
              <div className="litraj-prices">
                <span className="litraj-price1">44 990 ₽</span>
                <span className="litraj-price2">64 290 ₽</span>
              </div>
              <button className="all__btn--hover">Заказать</button>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Padarka