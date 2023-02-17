import React from 'react';
import img1 from '../../../assets/img-one.jpg';

import './About.scss';

const About = () => {
  return (
    <section className='section-about'>
      <div className='container grid grid--2-cols'>
        {/* Grid One */}
        <div className='about-container'>
          <h2 className='subheading'>What we do</h2>
          <h3 className='heading-primary'>Why I Photograph</h3>
          <p className='description'>
            Users can select their preferred time, location, photographer, style
            and our API will craft a plan that matches best with your selected
            preferences.
          </p>
        </div>
        <div className=''>
          <img className='about-img' src={img1} alt='' />
        </div>
      </div>
    </section>
  );
};

export default About;
