import React, { useState } from 'react';
import './navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../../assets/images/logo.png';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  
  const [ isNavOpen, setIsNavOpen ] = useState(false);

  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  }

  const displayMobileNav = isNavOpen ? "mobile-visible" : "";
  
  return (
    <nav className={`nav ${displayMobileNav}`}>
      <div className='nav__title'>
        <div className='logo'>
          <img className='logo__img' src={logo}/>
          <h1>Knowaste</h1>
        </div>
        <div className='nav__icon-container'>
          <FontAwesomeIcon className='nav__close nav__icon' icon={faTimes} size='2x' onClick={handleClick}/>
        </div>
      </div>
      <ul className='nav__links'>
        <li className='nav__link'><a href=''>How it works?</a></li>
        <li className='nav__link'><a href=''>Admin</a></li>
        <li className='nav__link'><a href='' class='btn btn-primary'>Login</a></li>
      </ul>
      <div className='nav__icon-container'>
        <FontAwesomeIcon className='nav__hamburger nav__icon' icon={faBars} size='3x' onClick={handleClick}/>
      </div>
    </nav>

  )
}

export default NavBar
