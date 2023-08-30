import React from "react";
import logo from "../../assets/Images/svg/logoheader.svg"
import "./style.css";

const index = () => {
  return (
    <>
      <footer>
        <div className="azd">
          <div className="container">
            <div className="footer_wrapper">
              <div className="footer_wrap_top">
                <div className="footer_left">
                  <div className="footer_lg">
                    <img src={logo} alt="" />
                    <p className="footer_left_logo">
                      Официальный сайт производителя
                    </p>
                  </div>

                  <h2 className="footer_left_h2">8 800 250 59 32</h2>
                  <p className="footer_left_p">Телефон горячей линии</p>
                </div>

                <div className="footer_right">
                  <div>
                    <div>
                      <p className="footer_right_p">
                        ИНН: <span> 432500888349</span>
                      </p>

                      <p className="footer_right_p">
                        ОГРНИП: <span> 314744919000039</span>
                      </p>
                    </div>

                    <div className="between">
                      <p className="footer_right_p sss">
                        Адрес почтовый (фактический): <br />
                        <span>610006, г. Киров, Октябрьский пр-т, д. 24</span>
                      </p>
                      <p className="footer_right_p">
                        Для корреспонденции:
                        <span>610000,а/я 154</span>
                      </p>
                    </div>
                  </div>

                  <div className="footer_send">
                    <a className="footer_link aaa" href="#">
                      Политика конфиденциальности
                    </a>
                    <a className="footer_link" href="#">
                      Договор оферты
                    </a>
                    <button className="footer_btn all__btn--hover">
                      Купить оптом
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="footer_wrapper_bot">
            <p>
              © 2010 - 2023 peskostruj-bulat-official.ru Все права защищены.
              Использование материалов разрешено только с согласия
              правообладателей. Полное или частичное копирование сайта запрещено
              и преследуется по закону.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default index;
