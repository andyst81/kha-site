import React from 'react';
import kha from '../images/kha.png';
import menu from "../images/kha-menu.pdf"
import './style.scss';

export default function Navbar() {
  const [isActive, setisActive] = React.useState(false)

  return (
    <nav className='navbar  gallery-nav' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a href='/' className='navbar-item'>
          <img
            src={kha}
            alt='Logo'
            width='80'
          />
        </a>

        <a
          onClick={() => {
            setisActive(!isActive)
          }}
          role='button'
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label='menu'
          aria-expanded='false'
          data-target='navbarBasicExample'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div id='navbarBasicExample' className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className='navbar-end'>
          <div className='navbar-item'>
					<a href='/' className='navbar-item'>
              Home
            </a>
            <a href='/gallery' className='navbar-item'>
              Gallery
            </a>
            <a href={menu} className='navbar-item'>
              Menu
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}