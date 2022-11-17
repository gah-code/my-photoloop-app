import React from 'react';
import HeroImg from '../../../assets/main-header-background.png';
import { Button } from '../../buttons/Button.styles.js';

const Hero = () => {
  return (
    <section className='section-hero'>
      <div className='hero'>
        <div className='hero-text-box'>
          <h1 className='heading-primary'>
            Booking a photographer made super simple
          </h1>
          <p className='hero-description'>
            Start today and save time scheduling services for your most
            cherished
          </p>
          <Button href='cta'>Book Today</Button>
          <Button primary href='#how'>
            Learn more &darr;
          </Button>
        </div>
        <div className='hero-img-box'>
          {/* <img
            className='hero-img'
            alt='Summer family photography highlights'
            src={HeroImg}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
