import React from 'react';
import ImgOne from '../../../assets/img-one.jpg';
import ImgTwo from '../../../assets/img-two.jpg';
import ImgThree from '../../../assets/image3.jpg';
import ImgFour from '../../../assets/img4.jpg';
import ImgFive from '../../../assets/img5.jpg';
import ImgSix from '../../../assets/hero.png';
import { Button } from '../../buttons/Button.styles.js';

import './Hero.scss';

const Hero = () => {
  return (
    <section className='section-hero'>
      <div className='hero'>
        <div className='hero-text-box'>
          <h1
            className='heading-primary'
            style={{
              margin: '-15px 0 0 0',
              color: '#fd736c',
              fontSize: '6rem',
            }}
          >
            PHOTOLOOP
          </h1>
          <h1 className='heading-primary'>
            your go-to premium local photograper finder app
            {/* finding a premium local photogapher made simple */}
          </h1>

          <p className='hero-description'>
            {/* A Photography App made by photographers,for seeker who love
            capturing momments. Start today and save time scheduling services
            for your most cherished. */}
            Capture your unique stories and experiences in time through visual
            storytelling for your present loved ones and future generations to
            come.
          </p>
          <Button primary href='cta'>
            Book Today
          </Button>
          <Button href='cta'>Learn More</Button>
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
            src={ImgThree}
          />{' '}
          <img
            className='hero-img'
            alt='Summer family photography highlights'
            src={ImgFour}
          />
          <img
            className='hero-img'
            alt='Summer family photography highlights'
            src={ImgSix}
          />
          <img
            className='hero-img'
            alt='Summer family photography highlights'
            src={ImgFive}
          />
          <img
            className='hero-img'
            alt='Summer family photography highlights'
            src={ImgOne}
          />
          <img
            className='hero-img'
            alt='Summer family photography highlights'
            src={ImgSix}
          />
          <img
            className='hero-img'
            alt='Summer family photography highlights'
            src={ImgThree}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
