import  { useState } from 'react'
import './header.css'
import play from '../../../assets/Images/png/play.webp'
import raspochka from '../../../assets/Images/svg/raspochka.svg'
import bar from '../../../assets/Images/png/headerbar.webp'
import bar2 from '../../../assets/Images/png/headerbarmobile.webp'
import Headermodal from '../Headermodal/Headermodal'
import Headertop from '../../Headertop/Headertop'
const Headers = () => {
  const [modal, setModal] = useState(false)
  const [modal2,setModal2] = useState(false)
  return (
    <div className='header-section2'>
      <Headertop modal={modal2} setModal={setModal2}/>
      <Headermodal modal={modal} setModal={setModal}/>
      <div className="header-section__mobile-text">
      <h4>Автоматическая пивоварня</h4>
        <div className="text-wrapper__pirice-mobile">
          <h2>Bavaria</h2>
        </div>
        <h5>Варите действительно  качественное пиво</h5>
      </div>
      <div className="header-section__img-wrapper">
      
        <div className="hus">
          <img className='hus__img1' src={bar} alt="" />
          <img className='hus__img2' src={bar2} alt="" />
          <div onClick={()=>setModal(true)} className="img-box__text">
            <img src={play} alt="" />
            <span>Видеообзор пивоварни</span>
          </div>

        </div>
      </div>
      <div className="header-section__text-wrapper">
        <h4>Автоматическая пивоварня</h4>
        <div className="text-wrapper__pirice">
          <h2>Bavaria</h2>
        </div>
        <h5>Варите действительно качественное пиво</h5>
        <ul className="text-wrapper__about">
          <li>
            <h6>Дистанционное управление</h6>
            <p>Занимайтесь своими делами, пока Bavaria делает пиво за вас</p>
          </li>
          <li>
            <h6>Чиллер — в подарок</h6>
            <p>Ускорьте процесс варки с помощью погружного чиллера</p>
          </li>
          <li>
            <h6>Персональная библиотека рецептов</h6>
            <p>Сохраняйте любимые рецепты в памяти устройства</p>
          </li>
          <li>
            <h6>Внушительный результат</h6>
            <p>Получайте от 20 до 100 бутылок за один раз</p>
          </li>
        </ul>
      <div className="img-wrapper__box">
        <div className="img-wrapper__box-text">
          <del>64290 ₽</del>
          <h5>44990 ₽</h5>
        </div>
        <button onClick={()=>setModal2(true)} className='img-wrapper__raspochka header__btn--hover'>Заказать</button>
        <button className='img-wrapper__raspochka2 header__btn--hover1'>
          <img src={raspochka} alt="raspochkan" />
          Рассрочка
        </button>
      </div>
      </div>
    </div>
  )
}

export default Headers