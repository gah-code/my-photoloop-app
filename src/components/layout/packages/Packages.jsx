import React from 'react';
// import { AiOutlineCheck } from 'react-icons/ai';
import './Packages.styles.scss';

const Packages = () => {
  return (
    <section className='section-packages'>
      <div className='container'>
        <span className='subheading'>Packages</span>
        <h2 className='heading-secondary'>Family Packages</h2>
      </div>

      <div className='container grid grid--2-cols'>
        <div className='pricing-plan pricing-plan--starter'>
          <header className='plan-header'>
            <p className='plan-name'>Starter</p>
            <p className='plan-price'>
              <span>$</span>399
            </p>
            <p className='plan-text'>per month. That's just $13 per meal!</p>
          </header>
          <ul className='list'>
            <li className='list-item'>
              <ion-icon class='list-icon' name='checkmark-outline'></ion-icon>
              <span>1 meal per day</span>
            </li>
            <li className='list-item'>
              <ion-icon class='list-icon' name='checkmark-outline'></ion-icon>
              <span>Order from 11am to 9pm</span>
            </li>
            <li className='list-item'>
              <ion-icon class='list-icon' name='checkmark-outline'></ion-icon>
              <span>Delivery is free</span>
            </li>
            <li className='list-item'>
              <ion-icon class='list-icon' name='close-outline'></ion-icon>
            </li>
          </ul>
          <div className='plan-sing-up'>
            <a href='#' className='btn btn--full'>
              Start eating well
            </a>
          </div>
        </div>
        <div className='pricing-plan pricing-plan--complete'>
          <header className='plan-header'>
            <p className='plan-name'>Complete</p>
            <p className='plan-price'>
              <span>$</span>649
            </p>
            <p className='plan-text'>per month. That's just $11 per meal!</p>
          </header>
          <ul className='list'>
            <li className='list-item'>
              <ion-icon class='list-icon' name='checkmark-outline'></ion-icon>
              <span>
                <strong>2 meals</strong> per day
              </span>
            </li>
            <li className='list-item'>
              <ion-icon class='list-icon' name='checkmark-outline'></ion-icon>
              <span>
                Order <strong>24/7</strong>
              </span>
            </li>
            <li className='list-item'>
              <ion-icon class='list-icon' name='checkmark-outline'></ion-icon>
              <span>Delivery is free</span>
            </li>
            <li className='list-item'>
              <ion-icon class='list-icon' name='checkmark-outline'></ion-icon>
              <span>Get access to latest recipes</span>
            </li>
          </ul>
          <div className='plan-sing-up'>
            <a href='#' className='btn btn--full'>
              Start eating well
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
