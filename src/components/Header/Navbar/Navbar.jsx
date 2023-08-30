import React, { useState } from 'react'
import './navbar.css'
import sitelogo from '../../../assets/Images/svg/logoheader.svg'
import hamburger from '../../../assets/Images/svg/header.hamburger.svg'
import call from '../../../assets/Images/svg/contact.svg'
import exit from '../../../assets/Images/svg/exitheader.svg'
import OrderedMd from '../Ordered Modal/OrderedMd'
const Navbar = () => {
  const [sidebar ,setSidebar] = useState(false)
  const [modal ,setModal] = useState(false)
  return (
    <div className='navbar-section'>
  <OrderedMd setModal={setModal} modal={modal}/>
     <a href='#'>
     <img  src={sitelogo} alt="sitelogo" />
     </a>
     <div className="navbar-section__links">
        <a className='navbar-section__link' to={'/'}>О Bavaria</a>
        <span className="navbar-section__link-span">
        </span>
        <a className='navbar-section__link'  to={'/'}>Комплектация</a>
        <span className="navbar-section__link-span">
        </span>
        <a className='navbar-section__link' to={'/'}>Модели</a>
        <span className="navbar-section__link-span">
        </span>
        <a className='navbar-section__link' to={'/'}>Bavaria с WIFI</a>   
     </div>
     <div onClick={()=>setModal(true)} className="navbar-section__contact">
         <h4>8 800 250 59 32</h4>
        <a>Заказать звонок</a>
       
     </div>
       <div className="header-navbar__mobile">
        <a onClick={()=>setModal(true)} href="#">
          <img src={call} alt="" />
        </a>
       <div onClick={()=>setSidebar(!sidebar)} className="navbar__ham-box1">
        {
          sidebar ? 
             <div className="navbar__exit">
                    <img src={exit} alt="" /> 
             </div>
          : <img src={hamburger} alt="" />
        }
     
      
     </div>
     
       </div>
      {
        sidebar &&      
        <div id='navbar'  className="hamburger-sidebar">
         
          <div className='navbar-hamburger'>
          <a  onClick={()=>setSidebar(false)} className='navbar-section__link2' to={'/'}>О Bavaria</a>
          <a onClick={()=>setSidebar(false)} className='navbar-section__link2'  to={'/'}>Комплектация</a>       
          <a onClick={()=>setSidebar(false)} className='navbar-section__link2' to={'/'}>Модели</a>
          <a onClick={()=>setSidebar(false)} className='navbar-section__link2' to={'/'}>Bavaria с WIFI</a>  
          </div>
          <div onClick={()=>setModal(true)} className="hamburger__contact">
         <h4>8 800 250 59 32</h4>
        <a>Заказать звонок</a>
       
     </div>
        </div>
      }

    </div>
  )
}

export default Navbar