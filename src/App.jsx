import React, { Fragment } from 'react';
import './styles/style.css';
import GlobalStyle from './theme/globalStyles';
import Hero from './components/layout/hero/Hero';
import NavBar from './components/layout/navigation/NavBar';
import Packages from './components/layout/packages/Packages';
import Services from './components/layout/services/Services';

import IconOne from './assets/icons/Wedding-Expanded-Outline-Individual_Camera.png';
import LifeTouch from './assets/life-touch.png';
import Gilroy from './assets/gilroy-gardens-logo.png';
import GeorgeStreet from './assets/george-street.png';
import './App.scss';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      {/* <NavBar /> */}
      <Hero />
      <div className='container'>
        <span className='subheading'>
          {/* mom-and-pop start-ups industry non-profit */}
          "We are a photography company at the core
        </span>
        <h2 className='heading-secondary--center'>
          with a major focus on using technology to save our consumers time
          through elegant design.
        </h2>
      </div>

      <section className='section-sessions'>
        <div className='container'>
          <span className='subheading'>Services</span>
          <h2 className='heading-secondary'>Crafted sessions</h2>
        </div>
        <Services />
      </section>

      <section className='section-gallery'>
        <Packages />
      </section>
    </Fragment>
  );
}

export default App;
