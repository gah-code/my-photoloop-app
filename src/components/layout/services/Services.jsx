import React from 'react';
import Img from '../../../assets/FamilySection.png';

import './Services.scss';

const Services = () => {
  return (
    <>
      <div className='container grid grid__2-cols'>
        <div className='step-text-box'>
          <p className='step-number'>01</p>
          <h3 className='heading-tertiary'>using a tech-centric approach.</h3>
          <p className='description'>
            Users can use our web app to select their preferred season,
            location, and photographer. Our API will create a custom plan or
            "photo sesh," as we call it
          </p>
        </div>
        <div className='service-img-box'>
          <img className='service-img' src={Img} alt='' />
        </div>
        <div className='service-img-box'>
          <img className='service-img' src={Img} alt='' />
        </div>
        <div className='step-text-box'>
          {/* <p className='step-number'>01</p> */}
          <h3 className='heading-tertiary'>
            Tell us what you would like to capture
          </h3>
          <p className='step-description'>
            Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow!
          </p>
        </div>
      </div>
    </>
  );
};

export default Services;
