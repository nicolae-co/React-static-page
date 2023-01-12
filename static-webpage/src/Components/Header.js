import React from "react";
import reactLogo from '../reactSvg.svg'

function Header() {
    return (
      <header>
        <nav className='nav'>
          <img src={reactLogo} alt='react logo' className="nav-logo"/>
          <h3 className="nav-text">ReactFacts</h3>
          <h4 className="nav-title">React Course - Project 1</h4>
        </nav>
        </header>
    )
  }

export default Header
