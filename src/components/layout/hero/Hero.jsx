import React from 'react';
import ImgOne from '../../../assets/img-one.jpg';
import ImgTwo from '../../../assets/img-two.jpg';
import { Button } from '../../buttons/Button.styles.js';

const Hero = () => {
  return (
    <section className='section-hero'>
      <div className='hero'>
        <div className='hero-text-box'>
          <h1 className='heading-primary' style={{ margin: '0 0 0 -2px' }}>
            Booking a
          </h1>
          <h1 className='heading-primary'> photographer made super simple</h1>

          <p className='hero-description'>
            Start today and save time scheduling services for your most
            cherished
          </p>
          <Button primary href='cta'>
            Book Today
          </Button>
        </div>
        <div className='grid-gallery'>
          <img
            width='230'
            height='200'
            className='hero-img'
            alt='Summer family photography highlights'
            src={ImgTwo}
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
            src={ImgTwo}
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
            src={ImgTwo}
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
