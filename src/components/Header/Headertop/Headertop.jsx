import React, { useState } from 'react'
import './style.css'
import Exit from '../../../assets/Images/svg/exit.svg'
import logo from "../../../assets/Images/svg/logoheader.svg";
import Image from "../../../assets/Images/png/Header  Top/70 литров 1.png";
import mastercard from "../../../assets/Images/svg/mastercard_large.svg";
import mir from "../../../assets/Images/svg/mir_large.svg";
import visa from "../../../assets/Images/svg/visa_large.png";
import rasskochka from "../../../assets/Images/svg/rasskochka.svg";
import rasskochka1 from "../../../assets/Images/svg/rassrochka_phone.svg";
const Headertop = ({setModal, modal}) => {
  const [click, setClick] = useState(true);
  window.onclick = function (event) {
    if (event.target.id === "headertop__md") {
      setModal(false);
    }
  };
  if (modal) {
    return (
      <div id="headertop__md"  className="headertop__md">
      <div className="headertop__md--content">
        <img
          onClick={() => setModal(false)}
          className="modal-exit"
          src={Exit}
          alt=""
        />
     

        <div className="headertop__md--wrapper">
          <div className="headertop__md--left">
            <div className="headermd__left--top">
              <div className="headerTop_lg">
                <img src={logo} alt="" />
                <p>
                  Официальный сайт <br /> производителя
                </p>
              </div>

              <img src={Image} className="headertopmd__image" alt="Bavaria" />
            </div>
            <div className="headertop__left--down">
              <p>Итого к оплате:</p>
              <h3>11 000 ₽</h3>
            </div>
          </div>

          <div className="headertop__md--right">
            <h2>Оформление заказа</h2>
            <p>
              Мы свяжемся с Вами в течение 10 минут и уточним детали доставки
            </p>
            <select>
              <option value="wifi">30 литров с WiFi</option>
              <option value="wifi">30 литров с WiFi</option>
              <option value="wifi">30 литров с WiFi</option>
            </select>

            <div className="headertop__md--menu">
              <h6>Доп. товары</h6>

              <div className="headertop__md--allcards">
                <div className="headeertop__md--card">
                  <div className="headertop__more">
                    <button onClick={() => setClick(!click)}>
                      <p
                        style={
                          click ? { display: "none" } : { display: "block" }
                        }
                      ></p>
                    </button>

                    <p className="headeertop__md--card-sale">
                      Набор для темного пива
                    </p>
                  </div>
                  <h4>7 990 ₽</h4>
                </div>

                <div className="headeertop__md--card">
                  <div className="headertop__more">
                    <button onClick={() => setClick(!click)}>
                      <p
                        style={
                          click ? { display: "none" } : { display: "block" }
                        }
                      ></p>
                    </button>

                    <p className="headeertop__md--card-sale">
                      Набор для темного пива
                    </p>
                  </div>
                  <h4>7 990 ₽</h4>
                </div>

                <div className="headeertop__md--card">
                  <div className="headertop__more">
                    <button onClick={() => setClick(!click)}>
                      <p
                        style={
                          click ? { display: "none" } : { display: "block" }
                        }
                      ></p>
                    </button>

                    <p className="headeertop__md--card-sale">
                      Набор для темного пива
                    </p>
                  </div>
                  <h4>7 990 ₽</h4>
                </div>

                <div className="headeertop__md--card">
                  <div className="headertop__more">
                    <button onClick={() => setClick(!click)}>
                      <p
                        style={
                          click ? { display: "none" } : { display: "block" }
                        }
                      ></p>
                    </button>

                    <p className="headeertop__md--card-sale">
                      Набор для темного пива
                    </p>
                  </div>
                  <h4>7 990 ₽</h4>
                </div>

                <div className="headeertop__md--card">
                  <div className="headertop__more">
                    <button onClick={() => setClick(!click)}>
                      <p
                        style={
                          click ? { display: "none" } : { display: "block" }
                        }
                      ></p>
                    </button>

                    <p className="headeertop__md--card-sale">
                      Набор для темного пива
                    </p>
                  </div>
                  <h4>7 990 ₽</h4>
                </div>

                <div className="headeertop__md--card">
                  <div className="headertop__more">
                    <button onClick={() => setClick(!click)}>
                      <p
                        style={
                          click ? { display: "none" } : { display: "block" }
                        }
                      ></p>
                    </button>

                    <p className="headeertop__md--card-sale">
                      Набор для темного пива
                    </p>
                  </div>
                  <h4>7 990 ₽</h4>
                </div>

                <div className="headeertop__md--card">
                  <div className="headertop__more">
                    <button onClick={() => setClick(!click)}>
                      <p
                        style={
                          click ? { display: "none" } : { display: "block" }
                        }
                      ></p>
                    </button>

                    <p className="headeertop__md--card-sale">
                      Набор для темного пива
                    </p>
                  </div>
                  <h4>7 990 ₽</h4>
                </div>

                <div className="headeertop__md--card">
                  <div className="headertop__more">
                    <button onClick={() => setClick(!click)}>
                      <p
                        style={
                          click ? { display: "none" } : { display: "block" }
                        }
                      ></p>
                    </button>

                    <p className="headeertop__md--card-sale">
                      Набор для темного пива
                    </p>
                  </div>
                  <h4>7 990 ₽</h4>
                </div>

                <div className="headeertop__md--card">
                  <div className="headertop__more">
                    <button onClick={() => setClick(!click)}>
                      <p
                        style={
                          click ? { display: "none" } : { display: "block" }
                        }
                      ></p>
                    </button>

                    <p className="headeertop__md--card-sale">
                      Набор для темного пива
                    </p>
                  </div>
                  <h4>7 990 ₽</h4>
                </div>

                <div className="headeertop__md--card">
                  <div className="headertop__more">
                    <button onClick={() => setClick(!click)}>
                      <p
                        style={
                          click ? { display: "none" } : { display: "block" }
                        }
                      ></p>
                    </button>

                    <p className="headeertop__md--card-sale">
                      Набор для темного пива
                    </p>
                  </div>
                  <h4>7 990 ₽</h4>
                </div>

                <div className="headeertop__md--card">
                  <div className="headertop__more">
                    <button onClick={() => setClick(!click)}>
                      <p
                        style={
                          click ? { display: "none" } : { display: "block" }
                        }
                      ></p>
                    </button>

                    <p className="headeertop__md--card-sale">
                      Набор для темного пива
                    </p>
                  </div>
                  <h4>7 990 ₽</h4>
                </div>
              </div>

              <div className="headertop__md--allcards-phone">
                <div className="headeertop__md--card">
                  <div className="headertop__more">
                    <button onClick={() => setClick(!click)}>
                      <p
                        style={
                          click ? { display: "none" } : { display: "block" }
                        }
                      ></p>
                    </button>

                    <p className="headeertop__md--card-sale">
                      Набор для копчения
                    </p>
                  </div>
                  <h4>7 990 ₽</h4>
                </div>

                <div className="headeertop__md--card">
                  <div className="headertop__more">
                    <button onClick={() => setClick(!click)}>
                      <p
                        style={
                          click ? { display: "none" } : { display: "block" }
                        }
                      ></p>
                    </button>

                    <p className="headeertop__md--card-sale">
                      Набор для копчения
                    </p>
                  </div>
                  <h4>7 990 ₽</h4>
                </div>

                <div className="headeertop__md--card">
                  <div className="headertop__more">
                    <button onClick={() => setClick(!click)}>
                      <p
                        style={
                          click ? { display: "none" } : { display: "block" }
                        }
                      ></p>
                    </button>

                    <p className="headeertop__md--card-sale">
                      Набор для копчения
                    </p>
                  </div>
                  <h4>7 990 ₽</h4>
                </div>

                <div className="headeertop__md--card">
                  <div className="headertop__more">
                    <button onClick={() => setClick(!click)}>
                      <p
                        style={
                          click ? { display: "none" } : { display: "block" }
                        }
                      ></p>
                    </button>

                    <p className="headeertop__md--card-sale">
                      Набор для темного пива
                    </p>
                  </div>
                  <h4>7 990 ₽</h4>
                </div>

                <a href="#">Показать полностью</a>
              </div>
            </div>

            <div className="headertop__md--phone">
              <form action="">
                <input type="text" placeholder="Имя" />
                <input type="tel" placeholder="+7 (___)-___-__-__" />
                <div className="md__checkbox--phone">
                  <input type="checkbox" />
                  <label> Покупка в рассрочку</label>
                </div>
                <button>Заказать</button>
              </form>

              <p>
                Менеджеры свяжутся с вами в ближайшее время для уточнения
                деталей заказа
              </p>
            </div>

            <form className="hidden">
              <input type="text" placeholder="Имя" />
              <input type="text" placeholder="Номер телефона" />
              <button>Заказать</button>
            </form>

            <div className="headertop__md--right-images">
              <img src={mastercard} alt="" />
              <img src={mir} alt="" />
              <img src={visa} alt="" />
              <img src={rasskochka} alt="" />
              <div className="md__checkbox">
                <input type="checkbox" />
                <label>Покупка в рассрочку</label>
              </div>
            </div>
          </div>
        </div>
        <div className="itogo__phone">
          <div className="itogo__phone--titles">
            <p>Итого:</p>
            <h4>11 000 ₽</h4>
          </div>

          <div className="itogo__phone--image">
            <img src={mastercard} alt="" />
            <img src={mir} alt="" />
            <img src={visa} alt="" />
            <img src={rasskochka1} alt="" />
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Headertop