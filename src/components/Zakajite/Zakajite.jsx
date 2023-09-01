
import certificate from "../../assets/Images/png/certificate.webp";
import garant from "../../assets/Images/png/Zakajite/garant.webp";
import down_png from "../../assets/Images/png/Zakajite/down__image.webp";
import "./style.css";
import ZakajiteModal from "./Zakajitemodal/ZakajiteModal";
const Zakajite = () => {
  return (
    <>
      <section className="zakajite-section">
         <div className="container">
          <div className="zakajite__wrapper">
            <h2>Закажите напрямую от производителя</h2>
             <h3>Лучшие условия для обладателей BAVARIA на весь срок экслуатации </h3>
             <div className="zakjite__carusel">
              <ZakajiteModal/>
             </div>
             <div className="zakajite__wrap-text">
              <div className="zakajite__text-inner">
                <h5>Гарантия 1 год</h5>
                 <p>Мы предлагаем расширенную гарантию,потому что уверены в качестве своей продукции на все 100%.</p>
              </div>
              <div className="zakajite__text-inner">
                <h5>Отгрузка в день заказа</h5>
                 <p>Вы получите пивоварню в кратчайшие сроки (не более 7 дней).</p>
              </div>
              <div className="zakajite__text-inner">
                <h5>Экономия до 35 %</h5>
                 <p>Вы не переплачиваете посредникам и приобретаете товары по актуальным ценам.</p>
              </div>
             </div>
               <div className="zakijacte__cost">
                 <h4>64 290 ₽</h4>
                 <h5>от 44 990 ₽</h5>
                 <button>Заказать</button>
               </div>
               <div className="zakijate__document">
                <div className="zakijate__docin">

                 <div className="zakijate__documnent-inner">
                  <div className="div__zkijate-doc1">
                    <img src={garant} alt="" />
                  </div>
                  <div className="div__zkijate-doc2">
                    <img src={certificate} alt="" />
                  </div>
                  <img src={down_png} alt="" />
                  <div className="zakijate__doc-text">
                    <h4>Декларация о соответствиии патент</h4>
                    <p>подтверждают высокое качество и безопасность эксплуатации пивоварни “Bavaria”</p>
                  </div>
                 </div>
                 <div className="zakijate__document-img">
                  <img src={certificate} alt="" />
                  <img src={garant} alt="" />
                 </div>
                </div>
               </div>
               <div className="zakijate__about">
                <h5>Производитель ГК “Геликон Пром”</h5>
                <p>С 2012 года мы производим качественные товары, используя экологичные технологии производства. Только лучшее — всё оборудование и материалы проходят тщательную проверку. В поиске новых идей, мы постоянно обновляем конструкции производимых товаров.</p>
               </div>
          </div>
         </div>
      </section>
    </>
  );
};

export default Zakajite;
