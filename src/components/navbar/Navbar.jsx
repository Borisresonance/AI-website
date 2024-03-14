import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icon/ri';

import './navbar.css';

function Navbar() {
  return (
    <div className='gpt3_navbar'>
      <div className='gtp3_navbar-links'>
        <div className='gtp3_navbar-links_logo'>
          <img src={logo} alt="logo" srcset="" />
        </div>
      </div>
    </div>
  )
}

export default Navbar