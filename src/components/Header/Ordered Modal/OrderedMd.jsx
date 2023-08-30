import React from "react";
import "./style.css";
import Exit from "../../../assets/Images/svg/exit.svg";
const OrderedMd = ({ modal, setModal, children }) => {
  window.onclick = function (event) {
    if (event.target.id === "ordered__modal") {
      setModal(false);
    }
  };
  if (modal) {
    return (
      <div id="ordered__modal" class="ordered__modal">
        <div class="ordered__modal--content">
          <img
            onClick={() => setModal(false)}
            className="modal-exit"
            src={Exit}
            alt=""
          />
          {children}
          <div className="ordered__modal--wrapper">
            <h3>Заказать обратный звонок</h3>

            <form action="#">
              <input type="text" placeholder="Имя" />
              <input type="text" placeholder="+7 (___)-___-__-__" />
              <button>Заказать</button>
            </form>
            <p>
              Мы свяжемся с Вами в течение 10 минут <br /> и проконсультируем по любым
              вопросам
            </p>
          </div>
        </div>
      </div>
    );
}}

export default OrderedMd;
