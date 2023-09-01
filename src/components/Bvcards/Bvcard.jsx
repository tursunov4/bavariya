import  { useState } from "react";
import "./style.css";
import bvcard from '../../assets/Images/png/Kans/bvcard.webp'
const Bvcards = () => {
  const [open,setOpen] = useState(false)
  const [open2,setOpen2] = useState(false)
  const [open3,setOpen3] = useState(false)
  return (
    <>
       <section className="bvcard-section">
         <div className="container">
           <div className="bvcard__wrapper">
            <h2>С BAVARIA варить пиво сможет каждый</h2>
            <h3>3 аргумента в пользу Мюнхенской пивоварни</h3>
            <ul className="bvcard__img-list">
              <li className="bvcard__list">
                <img  className="bv__card-img" src={bvcard} alt="" />
                <div className="bvcard__img-text">
                 <span className="bvcard__img-num">1</span>
                 <h4>Универсальное крепление под болгарку</h4>
                 <div className={open ? "bvcard__imginner-text2":"bvcard__imginner-text"}>
                  <p>Для Dino подойдут самые ходовые болгарки на 115 и 125 мм:</p> 
                 <ul className="bv-card__text-inner">
                  <li> Маломощные (до 900 Вт) </li>
                  <li>Мощные (до 1,8 кВт)</li>
                 </ul>
                  <p>Выбирайте то, что нужно именно вам! Сделать гриндер мощнее можно в любой момент — достаточно просто заменить болгарку. Работайте с деревом, эпоксидкой, пластиком или переходите на более твёрдые материалы. А продуманное крепление позволит собрать и разобрать Dino за считанные секунды.</p>                  
                 </div>
                 <h5 onClick={()=>setOpen(!open)} className="bvcard__padrob">
                  {open ? "Скрыть" :'Подробнее'}
                 </h5>
                </div>

              </li>
              <li className="bvcard__list">
                <img  className="bv__card-img" src={bvcard} alt="" />
                <div className="bvcard__img-text">
                 <span className="bvcard__img-num">2</span>
                 <h4>Универсальное крепление под болгарку</h4>
                 <div className={open2 ? "bvcard__imginner-text2":"bvcard__imginner-text"}>
                  <p>Для Dino подойдут самые ходовые болгарки на 115 и 125 мм:</p> 
                 <ul className="bv-card__text-inner">
                  <li> Маломощные (до 900 Вт) </li>
                  <li>Мощные (до 1,8 кВт)</li>
                 </ul>
                  <p>Выбирайте то, что нужно именно вам! Сделать гриндер мощнее можно в любой момент — достаточно просто заменить болгарку. Работайте с деревом, эпоксидкой, пластиком или переходите на более твёрдые материалы. А продуманное крепление позволит собрать и разобрать Dino за считанные секунды.</p>                  
                 </div>
                 <h5 onClick={()=>setOpen2(!open2)} className="bvcard__padrob">
                  {open2 ? "Скрыть" :'Подробнее'}
                 </h5>
                </div>

              </li>
              <li className="bvcard__list">
                <img  className="bv__card-img" src={bvcard} alt="" />
                <div className="bvcard__img-text">
                 <span className="bvcard__img-num">3</span>
                 <h4>Универсальное крепление под болгарку</h4>
                 <div className={open3 ? "bvcard__imginner-text2":"bvcard__imginner-text"}>
                  <p>Для Dino подойдут самые ходовые болгарки на 115 и 125 мм:</p> 
                 <ul className="bv-card__text-inner">
                  <li> Маломощные (до 900 Вт) </li>
                  <li>Мощные (до 1,8 кВт)</li>
                 </ul>
                  <p>Выбирайте то, что нужно именно вам! Сделать гриндер мощнее можно в любой момент — достаточно просто заменить болгарку. Работайте с деревом, эпоксидкой, пластиком или переходите на более твёрдые материалы. А продуманное крепление позволит собрать и разобрать Dino за считанные секунды.</p>                  
                 </div>
                 <h5 onClick={()=>setOpen3(!open3)} className="bvcard__padrob">
                  {open3 ? "Скрыть" :'Подробнее'}
                 </h5>
                </div>

              </li>
            </ul>
           </div>
         </div>
       </section>
    </>
  );
};

export default Bvcards;
