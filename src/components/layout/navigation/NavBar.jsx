import React from 'react';
import { NavButton } from './NavBar.styles.js';

const NavBar = () => {
  return (
    <header class='header'>
      <a href='#'>
        <img src='' alt='' />
      </a>
      {/* <h1
        className='heading-primary'
        style={{
          margin: '-15px 0 0 0',
          color: '#fd736c',
          fontSize: '6rem',
        }}
      >
        PHOTOLOOP
      </h1> */}

      <nav className='main-nav'>
        <ul className='main-nav-list'>
          <li>
            <Link href='#how'>How it works</Link>
          </li>
          <li>
            <Link href='#sessions'>Sessions</Link>
          </li>

          <li>
            {/* <NavButton as='a' variant='secondary' className='' href='#cta'>
              Book Today
            </NavButton> */}
          </li>
        </ul>
      </nav>

      {/* <button type='button'>
        <ion-icon class='icon-mobile-nav' name='menu-outline'></ion-icon>
        <ion-icon class='icon-mobile-nav' name='close-outline'></ion-icon>
      </button> */}
    </header>
  );
};

export default NavBar;
