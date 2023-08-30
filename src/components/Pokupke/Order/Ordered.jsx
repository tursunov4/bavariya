import React, { useState } from "react";
import rasm from "../../../assets/Images/svg/pokupka__left.svg";
import center from "../../../assets/Images/png/pokupke_img.png";
import b1 from "../../../assets/Images/png/Pokupka responsive images/barrel1.png";
import b2 from "../../../assets/Images/png/Pokupka responsive images/barrel2.png";
import b3 from "../../../assets/Images/png/Pokupka responsive images/barrel3.png";
import b4 from "../../../assets/Images/png/Pokupka responsive images/barrel4.png";
import b5 from "../../../assets/Images/png/Pokupka responsive images/bareel5.png";

import "./style.css";
const Ordered = () => {
  const [click, setClick] = useState(true);
  return (
    <>
      <div className="zakazat">
        <div id="item-01">
          <div className="zakazat__left">
            <div className="zakazat__left--wrapper">
              <div className="zakazat__left--card">
                <button onClick={() => setClick(!click)}>
                  <p
                    style={click ? { display: "none" } : { display: "block" }}
                  ></p>
                </button>

                <img src={rasm} alt="Image" />
                <h4>Набор для темного пива</h4>
                <div className="zakazat__left--card-sale">
                  <span className="old__price">7 990 ₽</span>
                  <span className="new__price">7 990 ₽</span>
                </div>
              </div>

              <div className="zakazat__left--card">
                <button onClick={() => setClick(!click)}>
                  <p
                    style={click ? { display: "none" } : { display: "block" }}
                  ></p>
                </button>

                <img src={rasm} alt="Image" />
                <h4>Набор для темного пива</h4>
                <div className="zakazat__left--card-sale">
                  <span className="old__price">7 990 ₽</span>
                  <span className="new__price">7 990 ₽</span>
                </div>
              </div>

              <div className="zakazat__left--card">
                <button onClick={() => setClick(!click)}>
                  <p
                    style={click ? { display: "none" } : { display: "block" }}
                  ></p>
                </button>

                <img src={rasm} alt="Image" />
                <h4>Набор для темного пива</h4>
                <div className="zakazat__left--card-sale">
                  <span className="old__price">7 990 ₽</span>
                  <span className="new__price">7 990 ₽</span>
                </div>
              </div>

              <div className="zakazat__left--card">
                <button onClick={() => setClick(!click)}>
                  <p
                    style={click ? { display: "none" } : { display: "block" }}
                  ></p>
                </button>

                <img src={rasm} alt="Image" />
                <h4>Набор для темного пива</h4>
                <div className="zakazat__left--card-sale">
                  <span className="old__price">7 990 ₽</span>
                  <span className="new__price">7 990 ₽</span>
                </div>
              </div>

              <div className="zakazat__left--card">
                <button onClick={() => setClick(!click)}>
                  <p
                    style={click ? { display: "none" } : { display: "block" }}
                  ></p>
                </button>

                <img src={rasm} alt="Image" />
                <h4>Набор для темного пива</h4>
                <div className="zakazat__left--card-sale">
                  <span className="old__price">7 990 ₽</span>
                  <span className="new__price">7 990 ₽</span>
                </div>
              </div>

              <div className="zakazat__left--card">
                <button onClick={() => setClick(!click)}>
                  <p
                    style={click ? { display: "none" } : { display: "block" }}
                  ></p>
                </button>

                <img src={rasm} alt="Image" />
                <h4>Набор для темного пива</h4>
                <div className="zakazat__left--card-sale">
                  <span className="old__price">7 990 ₽</span>
                  <span className="new__price">7 990 ₽</span>
                </div>
              </div>

              <div className="zakazat__left--card">
                <button onClick={() => setClick(!click)}>
                  <p
                    style={click ? { display: "none" } : { display: "block" }}
                  ></p>
                </button>

                <img src={rasm} alt="Image" />
                <h4>Набор для темного пива</h4>
                <div className="zakazat__left--card-sale">
                  <span className="old__price">7 990 ₽</span>
                  <span className="new__price">7 990 ₽</span>
                </div>
              </div>

              <div className="zakazat__left--card">
                <button onClick={() => setClick(!click)}>
                  <p
                    style={click ? { display: "none" } : { display: "block" }}
                  ></p>
                </button>

                <img src={rasm} alt="Image" />
                <h4>Набор для темного пива</h4>
                <div className="zakazat__left--card-sale">
                  <span className="old__price">7 990 ₽</span>
                  <span className="new__price">7 990 ₽</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="item-02">
          <div className="item-02__images">
            <div className="item-02__images--1 absolute">
              <img src={b1} alt="" />
            </div>

            <div className="item-02__images--2 absolute">
              <img src={b2} alt="" />
            </div>

            <div className="item-02__images--3 absolute">
              <img src={b3} alt="" />
            </div>

            <div className="item-02__images--4 absolute">
              <img src={b4} alt="" />
            </div>

            <div className="item-02__images--5 absolute">
              <img src={b5} alt="" />
            </div>
          </div>
        </div>

        <div id="item-03">
          <div className="zakazat__right">
            <h4>Заказ</h4>

            <select>
              <option value="wifi">30 литров с WiFi</option>
              <option value="wifi">30 литров с WiFi</option>
              <option value="wifi">30 литров с WiFi</option>
            </select>

            <div className="responsive__paragraph">
              <p>
                Набор лент (3 шт.) <span>..........1990 руб.</span>
              </p>
              <p>
                Электронапильник <span>........1990 руб.</span>
              </p>
            </div>
            <div className="zakazat__bolds">
              <h3>Итого:</h3>
              <h2>11 000 ₽</h2>
            </div>

            <form action="">
              <input type="text" placeholder="Имя" />
              <input type="tel" placeholder="+7 (___)-___-__-__" />

              <button className="all__btn--hover">Заказать</button>
            </form>

            <p>
              Менеджеры свяжутся с вами в ближайшее время для уточнения деталей
              заказа
            </p>
          </div>
        </div>
      </div>

      <div className="zakazat__responsive--01">
        <div id="item-02">
          <div className="item-02__images">
            <div className="item-02__images--1 absolute">
              <img src={b1} alt="" />
            </div>

            <div className="item-02__images--2 absolute">
              <img src={b2} alt="" />
            </div>

            <div className="item-02__images--3 absolute">
              <img src={b3} alt="" />
            </div>

            <div className="item-02__images--4 absolute">
              <img src={b4} alt="" />
            </div>

            <div className="item-02__images--5 absolute">
              <img src={b5} alt="" />
            </div>

            <div className="absolute__buttons">

              <div className="top__btns">
                <button className="img__btn1" onClick={() => setClick(!click)}>
                  <p
                    style={click ? { display: "none" } : { display: "block" }}
                  ></p>
                </button>
                <button className="img__btn2" onClick={() => setClick(!click)}>
                  <p
                    style={click ? { display: "none" } : { display: "block" }}
                  ></p>
                </button>
                <button className="img__btn3" onClick={() => setClick(!click)}>
                  <p
                    style={click ? { display: "none" } : { display: "block" }}
                  ></p>
                </button>
                <button className="img__btn4" onClick={() => setClick(!click)}>
                  <p
                    style={click ? { display: "none" } : { display: "block" }}
                  ></p>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="zakazat__responsive--01-cards">
          <div id="item-01">
            <div className="zakazat__left">
              <div className="zakazat__left--wrapper">
                <div className="zakazat__left--card">
                  <div className="zakazat__left--card-1">
                    <button onClick={() => setClick(!click)}>
                      <p
                        style={
                          click ? { display: "none" } : { display: "block" }
                        }
                      ></p>
                    </button>

                    <img src={rasm} alt="Image" />
                    <h4>Набор для темного пива</h4>
                  </div>

                  <div className="zakazat__left--card-sale">
                    <span className="old__price">7 990 ₽</span>
                    <span className="new__price">7 990 ₽</span>
                  </div>
                </div>

                <div className="zakazat__left--card">
                  <div className="zakazat__left--card-1">
                    <button onClick={() => setClick(!click)}>
                      <p
                        style={
                          click ? { display: "none" } : { display: "block" }
                        }
                      ></p>
                    </button>

                    <img src={rasm} alt="Image" />
                    <h4>Набор для темного пива</h4>
                  </div>

                  <div className="zakazat__left--card-sale">
                    <span className="old__price">7 990 ₽</span>
                    <span className="new__price">7 990 ₽</span>
                  </div>
                </div>

                <div className="zakazat__left--card">
                  <div className="zakazat__left--card-1">
                    <button onClick={() => setClick(!click)}>
                      <p
                        style={
                          click ? { display: "none" } : { display: "block" }
                        }
                      ></p>
                    </button>

                    <img src={rasm} alt="Image" />
                    <h4>Набор для темного пива</h4>
                  </div>

                  <div className="zakazat__left--card-sale">
                    <span className="old__price">7 990 ₽</span>
                    <span className="new__price">7 990 ₽</span>
                  </div>
                </div>

                <div className="zakazat__left--card">
                  <div className="zakazat__left--card-1">
                    <button onClick={() => setClick(!click)}>
                      <p
                        style={
                          click ? { display: "none" } : { display: "block" }
                        }
                      ></p>
                    </button>

                    <img src={rasm} alt="Image" />
                    <h4>Набор для темного пива</h4>
                  </div>

                  <div className="zakazat__left--card-sale">
                    <span className="old__price">7 990 ₽</span>
                    <span className="new__price">7 990 ₽</span>
                  </div>
                </div>

                <div className="zakazat__left--card">
                  <div className="zakazat__left--card-1">
                    <button onClick={() => setClick(!click)}>
                      <p
                        style={
                          click ? { display: "none" } : { display: "block" }
                        }
                      ></p>
                    </button>

                    <img src={rasm} alt="Image" />
                    <h4>Набор для темного пива</h4>
                  </div>

                  <div className="zakazat__left--card-sale">
                    <span className="old__price">7 990 ₽</span>
                    <span className="new__price">7 990 ₽</span>
                  </div>
                </div>

                <div className="zakazat__left--card">
                  <div className="zakazat__left--card-1">
                    <button onClick={() => setClick(!click)}>
                      <p
                        style={
                          click ? { display: "none" } : { display: "block" }
                        }
                      ></p>
                    </button>

                    <img src={rasm} alt="Image" />
                    <h4>Набор для темного пива</h4>
                  </div>

                  <div className="zakazat__left--card-sale">
                    <span className="old__price">7 990 ₽</span>
                    <span className="new__price">7 990 ₽</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="item-03">
            <div className="zakazat__right">
              <h4>Заказ</h4>

              <select>
                <option value="wifi">30 литров с WiFi</option>
                <option value="wifi">30 литров с WiFi</option>
                <option value="wifi">30 литров с WiFi</option>
              </select>

              <div className="responsive__paragraph">
                <p>
                  Набор лент (3 шт.) <span>..........1990 руб.</span>
                </p>
                <p>
                  Электронапильник <span>........1990 руб.</span>
                </p>
              </div>
              <div className="zakazat__bolds">
                <h3>Итого:</h3>
                <h2>11 000 ₽</h2>
              </div>

              <form action="">
                <input type="text" placeholder="Имя" />
                <input type="tel" placeholder="+7 (___)-___-__-__" />

                <button className="all__btn--hover">Заказать</button>
              </form>

              <p>
                Менеджеры свяжутся с вами в ближайшее время для уточнения
                деталей заказа
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ordered;
