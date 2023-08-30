import React from "react";
import dpd from "../../assets/Images/svg/del_leftcard 1.svg";
import trian from "../../assets/Images/svg/del_leftcard 2.svg";
import mail from "../../assets/Images/svg/del_leftcard 3.svg";
import pek from "../../assets/Images/svg/del_leftcard 4.svg";
import masterCard from "../../assets/Images/svg/mastecard.svg";
import mir from "../../assets/Images/svg/mir.svg";
import visa from "../../assets/Images/svg/visa.svg";
import delLogo from "../../assets/Images/svg/del_logo.svg";

import "./style.css";

const delivery = () => {
  return (
    <>
      <section className="delivery">

        <div className="container">
          <div className="del__wrapper">
            <div className="delivery__left">
              <div className="delivery__left--card">
                <h3>Доставка</h3>
                <p>по всей России от 1 до 5 дней курьером или ТК</p>
                <div>
                  <img src={dpd} alt="Image" />
                  <img src={trian} alt="Image" />
                  <img src={mail} alt="Image" />
                  <img src={pek} alt="Image" />
                </div>
              </div>

              <div className="delivery__left--card">
                <h3>Оплата</h3>
                <p>картой или наличными после получения товара</p>
                <div>
                  <img src={masterCard} alt="Image" />
                  <img src={mir} alt="Image" />
                  <img src={visa} alt="Image" />
                </div>
              </div>
            </div>

            <div className="delivery__right--card">
              <div>
                <img src={delLogo} alt="Logo" />
                <h2>Рассрочка от Тинькофф</h2>
                <p>на 4 месяца без процентов и переплат</p>
              </div>

              <div>
                <p>
                  <strong>Шаг 1</strong>
                  Нажмите кнопку «Купить в рассрочку».
                </p>
                <p>
                  <strong>Шаг 2</strong>B появившемся окне выберите нужную
                </p>
                <p>
                  <strong>Шаг 3</strong>
                  Нажмите «Заказать».
                </p>

                <div className="delivery__form">
                  <button className="delivery__form--hover">Заказать</button>
                  <p>От 2 499 руб. / мес.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default delivery;
