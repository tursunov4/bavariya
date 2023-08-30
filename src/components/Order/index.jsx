import React from "react";

import phone from "../../assets/Images/png/order_phone.png";
import "./style.css";

const index = () => {
  return (
    <>
      <section className="order">
        <div className="container">
          <div className="order_wrapper">
            <div className="order_items">
              <h2>Консультируем <br /> по горячей линии</h2>
              <div className="order_items_btn">
                <h1>8 800 250 59 32</h1>
                <p>Звонок по России бесплатный</p>

                <button>Заказать звонок</button>
              </div>
              <img src={phone} alt="Phone" />
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default index;
