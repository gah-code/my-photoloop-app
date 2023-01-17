import React from 'react';
import ImgTwo from '../../../assets/img-two.jpg';
import { Button } from '../../ui/Button.styles.js';

import './Hero.scss';

const Hero = () => {
  return (
    <section className='section-hero'>
      <div className='hero'>
        <div className='box'>
          <h1 className='heading-primary'>
            your go-to premium local photograper finder app
          </h1>
          <p className='description'>
            Capture your unique stories and experiences in time through visual
            storytelling for your loved ones and future generations to come.
          </p>
          <Button primary href='cta'>
            Book Today
          </Button>
          <Button href='cta'>Learn More</Button>
        </div>
        <div className='hero-gallery'>
          <img alt='Summer family photography highlights' src={ImgTwo} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
