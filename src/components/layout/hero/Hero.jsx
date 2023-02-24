import React from 'react';
import ImgTwo from '../../../assets/img-two.jpg';
import { Button } from '../../ui/Button.styles.js';

import './Hero.scss';

const Hero = () => {
  return (
    <section className='section-hero'>
      <div className='hero'>
        <div className='box'>
          <span className='hero-header'>your go-to</span>
          <h1 className='heading-primary'>photograper finder app</h1>
          <p className='description'>
            Capture your unique stories and experiences in time through visual
            storytelling for your loved ones and future generations to come.
          </p>
          <Button primary href='cta'>
            Book Today
          </Button>
          {/* <Button href='cta'>Learn More</Button> */}

          <button className='testing'>Testing</button>
        </div>
        <div className='hero-gallery'>
          <img alt='Summer family photography highlights' src={ImgTwo} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
