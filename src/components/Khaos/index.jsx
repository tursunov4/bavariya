import React from "react";
import image from "../../assets/Images/png/bar 1.png";
import "./style.css";

const index = () => {
  return (
    <>
      <section className="khaos">
        <div className="container">
          <div className="khaos_wrapper">
            <img src={image} alt="Bar image" />
            <div className="khaos__left">
              <h2>
                Купить пивоварню еще удобнее <br /> в наших розничных магазинах <br /> “Градус
                Хаус”
              </h2>
              <p>В наших магазинах вы сможете:</p>
              <div className="khaos_uls">
                <ul>
                  <li>
                    купить товары для консервирования, самогоноварения, копчения
                  </li>
                  <li>
                    оформить заявку на самовывоз и забрать товар, купленный в
                    интернет-магазине
                  </li>
                </ul>

                <ul>
                  <li>оформить скидочную карту</li>
                  <li>
                    сдать товар по гарантии, оформить возврат или обмен без
                    бюрократии
                  </li>
                  <li>получить консультацию специалиста</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
