import React from 'react';
// import ImgOne from '../../../assets/img-one.jpg';
import ImgTwo from '../../../assets/img-two.jpg';
// import ImgThree from '../../../assets/image3.jpg';
// import ImgFour from '../../../assets/img4.jpg';
// import ImgFive from '../../../assets/img5.jpg';
// import ImgSix from '../../../assets/hero.png';
import { Button } from '../../ui/Button.styles.js';

import './Hero.scss';

const Hero = () => {
  return (
    <section className='section-hero'>
      <div className='hero'>
        <div className='box'>
          <h1 className='heading-primary'>
            your go-to premium local photograper finder app
            {/* finding a premium local photogapher made simple */}
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
        <div className='gallery'>
          <img alt='Summer family photography highlights' src={ImgTwo} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
