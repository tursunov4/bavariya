import React, { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Headers from './HeaderSection/Header'
import './header.css'
const Header = () => {
  return (
    <header>
        <section className='header-section'>
            <div className="container">
            <Navbar/>
            <Headers />
         </div>
        </section>
    </header>
  )
}

export default Header