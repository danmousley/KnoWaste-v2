import React from 'react';
import './navbar.scss';

import logo from '../../assets/images/logo.png';

const NavBar = () => {
  return (
    <nav class='nav d-flex justify-content-between align-items-center p-3'>
      <div class='nav__title d-flex align-items-center ms-3'>
        <img src={logo}/>
        <h1>Knowaste</h1>
      </div>
      <ul class='nav__links  d-flex justify-content-around align-items-center me-3'>
        <li class='px-3 nav__link'><a href=''>How it works?</a></li>
        <li class='px-3 nav__link'><a href=''>Admin</a></li>
        <li class='px-3 nav__link'><a href='' class='btn btn-primary'>Login</a></li>
      </ul>

    </nav>
  )
}

export default NavBar
