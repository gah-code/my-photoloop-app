import React, { Fragment } from 'react';
import GlobalStyle from './theme/globalStyles';
import Hero from './components/layout/hero/Hero';
import NavBar from './components/layout/navigation/NavBar';
import './App.scss';

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <NavBar />
      <Hero />
      <section className='section-one'>
        <div className='container'>
          <span className='subheading'>Services</span>
          <h2 className='heading-secondary'>Crafted sessions</h2>
        </div>

        <div className='container grid grid--2-cols'>
          <div className='step-text-box'>
            <p className='step-number'>01</p>
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
