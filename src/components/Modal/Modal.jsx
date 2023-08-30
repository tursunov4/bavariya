import React from "react";
import "./Modal.css";
import Exit from "../../assets/Images/svg/exit.svg";
const Modal = ({ modal, setModal, children }) => {
  window.onclick = function (event) {
    if (event.target.id === "modal") {
      setModal(false);
    }
  };
  if (modal) {
    return (
      <div id="modal" class="modal">
        <div class="modal-content">
          <img
            onClick={() => setModal(false)}
            className="modal-exit"
            src={Exit}
            alt=""
          />
          {children}
        </div>
      </div>
    );
  }
};

export default Modal;
