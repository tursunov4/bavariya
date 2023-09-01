import "./style.css";
import phonetext from '../../assets/Images/png/mangephone-item.webp'
import phone from '../../assets/Images/png/mangephone.webp'
import wife from '../../assets/Images/png/mangewife.webp'
import arrow from '../../assets/Images/png/mange-arrow.webp'
import arrow2 from '../../assets/Images/png/mange-arrow2.webp'
import mangeelip from '../../assets/Images/png/mangeelip.webp'
import { useState } from "react";
const Manage = () => {
  const [type ,setType] = useState(false)
  return (
    <>
      <section className="manage">
        <div className="container">
           <div className="mange__wrapper">
            <h2>Управляйте пивоварней со своего смартфона</h2>
            <h3>В мобильном приложении, благодаря блоку управления с WiFi</h3>
            <div className="mange__wrapper-images">
              <div className="mange__images1">
                    <img src={phonetext} alt="" />
                    <img src={phone} alt="" />
              </div>
              <div className="mange__imges2">
                <img src={wife} alt="" />
                <img src={arrow} alt="" />
                <img src={arrow2} alt="" />
              </div>
              <div className="mange__imge3">
                <img src={mangeelip} alt="" />
              </div>
            </div>
             <div className="mange__wrapper-text">
                <div className="mange-wife__type">
                  <button className={type && "mage-wife__wife"}>{type ? "Пивоварня c WiFi" :"Пивоварня без WiFi"}</button>
                  <p onClick={()=>setType(!type)}>{type ? "Пивоварня без WiFi" : "Пивоварня c WiFi"}</p>
                </div>
               <table>
                <thead>
                  <tr>
                    <th><h4>Функции</h4></th>
                    <th ><button className="mange__tablebtn" >Пивоварня <br /> без WiFi</button></th>
                     <th><button className="mange__tablebtn mangebtn2">Пивоварня  <br /> c WiFi</button></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Дисплей</td>
                    <td className={type ?"mange__td-block" :''} >Текстовый</td>
                    <td  className={type ?"" :'mange__td-block'}>Графический </td>
                  </tr>
                  <tr>
                    <td>Режим варки</td>
                    <td className={type ?"mange__td-block" :''} >Ручной и автоматический</td>
                    <td  className={type ?"" :'mange__td-block'}>Ручной и автоматический </td>
                  </tr>
                  <tr>
                    <td>Режим варки</td>
                    <td className={type ?"mange__td-block" :''} >10</td>
                    <td  className={type ?"" :'mange__td-block'}>8</td>
                  </tr>
                  <tr>
                    <td>Сохранение рецептов</td>
                    <td className={type ?"mange__td-block" :''} ><span className="mange__tabletrue">✓</span></td>
                    <td  className={type ?"" :'mange__td-block'}><span className="mange__tabletrue">✓</span></td>
                  </tr>
                  <tr>
                    <td>Звуковая сигнализация</td>
                    <td className={type ?"mange__td-block" :''} ><span className="mange__tabletrue">✓</span></td>
                    <td  className={type ?"" :'mange__td-block'}><span className="mange__tabletrue">✓</span></td>
                  </tr>
                  <tr>
                    <td>Количество температурных пауз в автоматическом режиме</td>
                    <td className={type ?"mange__td-block" :''} >6 + температура засыпи</td>
                    <td  className={type ?"" :'mange__td-block'}>6 + температура засыпи</td>
                  </tr>
                  <tr>
                    <td>Удаленное управление-контроль пивоварней через WiFi</td>
                    <td className={type ?"mange__td-block" :''} ><span className="mange__tablefalse">×</span></td>
                    <td  className={type ?"" :'mange__td-block'}><span className="mange__tabletrue">✓</span></td>
                  </tr>
                  <tr>
                    <td>Работа с сервером wifi.bavaria-beer.ru  </td>
                    <td className={type ?"mange__td-block" :''} ><span className="mange__tablefalse">×</span></td>
                    <td  className={type ?"" :'mange__td-block'}><span className="mange__tabletrue">✓</span></td>
                  </tr>
                  <tr>
                    <td>Работа с мобильным приложением  </td>
                    <td className={type ?"mange__td-block" :''} ><span className="mange__tablefalse">×</span></td>
                    <td  className={type ?"" :'mange__td-block'}><span className="mange__tabletrue">✓</span></td>
                  </tr>
                  <tr>
                    <td className="mange__costtd">Стоимость  </td>
                    <td className={type ?"mange__td-block mange__costtd" :'mange__costtd'} ><p className="mange__cost">45 999 ₽</p> </td>
                    <td  className={type ?"mange__costtd" :'mange__td-block mange__costtd'}><p className="mange__cost">55 999 ₽</p> </td>
                  </tr>
                  <tr className="mobile__dnone">
                    <td className="mange__costtd">  </td>
                    <td className={type ?"mange__td-block mange__costtd" :'mange__costtd'} > <button className=" mange__wifeciti2 header__btn--hover1">Заказать</button> </td>
                    <td  className={type ?"mange__costtd" :'mange__td-block mange__costtd '}> <button className="mange__wifeciti header__btn--hover1">Заказать</button> </td>
                  </tr>
                </tbody>
               </table>
               <button className={type ? "mange-zakaz__btn2" : "mange-zakaz__btn"}>Заказать</button>
             </div>
           </div>
        </div>
      </section>
    </>
  );
};

export default Manage;
