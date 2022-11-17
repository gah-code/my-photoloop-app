import React from 'react';
import ImgOne from '../../../assets/img-one.jpg';
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
        <div className='grid-gallery'>
          <img
            width='230'
            height='200'
            className='hero-img'
            alt='Summer family photography highlights'
            src={ImgOne}
          />
          <img
            className='hero-img'
            alt='Summer family photography highlights'
            src={ImgOne}
          />
          <img
            width='230'
            height='200'
            className='hero-img'
            alt='Summer family photography highlights'
            src={ImgOne}
          />{' '}
          <img
            className='hero-img'
            alt='Summer family photography highlights'
            src={ImgOne}
          />
          <img
            className='hero-img'
            alt='Summer family photography highlights'
            src={ImgOne}
          />
          <img
            className='hero-img'
            alt='Summer family photography highlights'
            src={ImgOne}
          />
          <img
            className='hero-img'
            alt='Summer family photography highlights'
            src={ImgOne}
          />
          <img
            className='hero-img'
            alt='Summer family photography highlights'
            src={ImgOne}
          />
          <img
            className='hero-img'
            alt='Summer family photography highlights'
            src={ImgOne}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
