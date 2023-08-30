import React from 'react'
import './hero.css'
const Hero = () => {
  return (
    <>
     <section className="hero-section">
      <div className="container">
        <div className="hero-section__wrapper">
           <ul className="hero-section__line-box">
            <li>
              <h3>Оплата  при получении</h3>
              <p>Возможность проверить товар перед покупкой</p>
            </li>
            <li className='line-box__line'></li>
            <li>
              <h3>Доставка по России от 1 дня</h3>
              <p>Оперативно курьером или транспортной компанией </p>
            </li>
            <li className='line-box__line'></li>
            <li>
              <h3>Рекордный срок службы</h3>
              <p>От 20 лет и более с расширенной гарантией от производителя</p>
            </li> 
           </ul>
        </div>
      </div>
     </section>
    </>
  )
}

export default Hero