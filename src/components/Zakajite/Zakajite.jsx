import React from "react";
import certificate from "../../assets/Images/png/Zakajite/certificate.png";
import garant from "../../assets/Images/png/Zakajite/garant.png";
import down_png from "../../assets/Images/png/Zakajite/down__image.png";
import ZakajiteModal from "./Zakajitemodal/ZakajiteModal";
import "./style.css";

const Zakajite = () => {
  return (
    <>
      <section className="zakajite">
        <div className="container">
          <div className="zakajite__wrapper">
            <h1>Закажите напрямую от производителя</h1>
            <p className="zakajite__paragraph">
              Лучшие условия для обладателей BAVARIA на весь срок экслуатации{" "}
            </p>
            <div className="zakaj-casursel__div">
              <ZakajiteModal />
            </div>
            <div className="zakajite__center">
              <div className="zakajite__center--card">
                <h4>Гарантия 1 год</h4>
                <p>
                  Мы предлагаем расширенную гарантию, потому что уверены в
                  качестве своей продукции на все 100%.
                </p>
              </div>

              <div className="zakajite__center--card">
                <h4>Отгрузка в день заказа</h4>
                <p>
                  Вы получите <br /> пивоварню <br /> в кратчайшие сроки <br />{" "}
                  (не более 7 дней).
                </p>
              </div>

              <div className="zakajite__center--card">
                <h4>Экономия до 35 %</h4>
                <p>
                  Вы не переплачиваете <br /> посредникам <br /> и приобретаете
                  товары <br /> по актуальным ценам.
                </p>
              </div>
            </div>

            <p className="zakajite__sl">
              <span>64 290 ₽</span>
              от 44 990 ₽
            </p>

            <button className="all__btn--hover">Заказать</button>

            <div className="zakajite__down">
              <div className="zakajite__items">
                <div className="flex">
                  <img className="title__img" src={down_png} alt="Down Image" />
                  <div className="zakajite__items--titles">
                    <h4>
                      Декларация о соответствии <br /> и патент
                    </h4>
                    <p>
                      подтверждают высокое качество <br /> и безопасность
                      эксплуатации <br /> пивоварни “Bavaria”
                    </p>
                  </div>
                </div>

                <div className="zakajite__items--images">
                  <div>
                  <img
                    className="down__img cer"
                    src={certificate}
                    alt="Certificate"
                  />
                  </div>
                  <img className="down__img gar" src={garant} alt="Garant" />
                </div>
              </div>
            </div>

            <div className="zakajite__ft">
              <h6>Производитель ГК “Геликон Пром”</h6>
              <p>
                С 2012 года мы производим качественные товары, используя
                экологичные технологии производства. Только лучшее — всё
                оборудование и материалы проходят тщательную проверку. В поиске
                новых идей, мы постоянно обновляем конструкции производимых
                товаров.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Zakajite;
