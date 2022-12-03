import React, { Fragment } from 'react';
import './styles/style.css';
import GlobalStyle from './theme/globalStyles';
import Hero from './components/layout/hero/Hero';
import NavBar from './components/layout/navigation/NavBar';

import IconOne from './assets/icons/Wedding-Expanded-Outline-Individual_Camera.png';
import LifeTouch from './assets/life-touch.png';
import Gilroy from './assets/gilroy-gardens-logo.png';
import GeorgeStreet from './assets/george-street.png';
import './App.scss';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <NavBar />
      <Hero />

      <section className='section-companies'>
        <div className='container'>
          <span className='subheading'>
            mom-and-pop start-ups industry non-profit
          </span>
          <h2 className='heading-secondary--center'>
            Our photographers work with a wide variety of companies
          </h2>
        </div>

        <div className='container grid grid--3-cols'>
          <div className='item'>
            <img src={LifeTouch} alt='' />
          </div>
          <div className='item'>
            <img src={Gilroy} alt='' />
          </div>
          <div className='item'>
            <img src={GeorgeStreet} alt='' />
          </div>
        </div>
      </section>
      <section className='section'>
        <div className='container'>
          <span className='subheading'>Services</span>
          <h2 className='heading-secondary'>Crafted sessions</h2>
        </div>

        <div className='container grid grid--2-cols'>
          <div className='step-text-box'>
            {/* <p className='step-number'>01</p> */}
            <h3 className='heading-tertiary'>
              Tell us what you would like to capture
            </h3>
            <p className='step-descriptioni'>
              Never again waste time thinking about what to eat! Omnifood AI
              will create a 100% personalized weekly meal plan just for you. It
              makes sure you get all the nutrients and vitamins you need, no
              matter what diet you follow!
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default App;
