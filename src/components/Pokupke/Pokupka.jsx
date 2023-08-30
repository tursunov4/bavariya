import React from "react";
import "./style.css";
import Ordered from "./Order/Ordered";
import Images from "./Grids/Images";

const index = () => {
  return (
    <>
      <section className="pokupke">
        <div className="container">
          <div className="pokupka__wrapper">
            <h1 className="pokupka__title">
              При покупке пивоварни BAVARIA <br /> пожизненная скидка на
              расходные материалы
            </h1>
            <p className="pokupka__paragraph">
              Вы сможете заказать аксессуары по хорошим ценам через неделю,
              месяц или год
            </p>
            <Ordered />
            <Images />
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
