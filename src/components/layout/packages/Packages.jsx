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
            <p className='plan-name'>Primary</p>
            <p className='plan-price'>
              <span>$</span>230
            </p>
            <p className='plan-text'>comming soon</p>
          </header>
          <ul className='list'>
            <li className='list-item'>
              <ion-icon class='list-icon' name='checkmark-outline'></ion-icon>
              <span>1</span>
            </li>
            <li className='list-item'>
              <ion-icon class='list-icon' name='checkmark-outline'></ion-icon>
              <span>2</span>
            </li>
            <li className='list-item'>
              <ion-icon class='list-icon' name='checkmark-outline'></ion-icon>
              <span>3</span>
            </li>
            <li className='list-item'>
              <ion-icon class='list-icon' name='close-outline'></ion-icon>
            </li>
          </ul>
          <div className='plan-sing-up'>
            <a href='#' className='btn btn--full'>
              Start
            </a>
          </div>
        </div>
        <div className='pricing-plan pricing-plan--complete'>
          <header className='plan-header'>
            <p className='plan-name'>Complete</p>
            <p className='plan-price'>
              <span>$</span>280
            </p>
            <p className='plan-text'>comming soon</p>
          </header>
          <ul className='list'>
            <li className='list-item'>
              <ion-icon class='list-icon' name='checkmark-outline'></ion-icon>
              <span>
                <strong>comming</strong> soon
              </span>
            </li>
            <li className='list-item'>
              <ion-icon class='list-icon' name='checkmark-outline'></ion-icon>
              <span>
                <strong>comming</strong> soon
              </span>
            </li>
            <li className='list-item'>
              <ion-icon class='list-icon' name='checkmark-outline'></ion-icon>
              <strong>comming</strong> soon
            </li>
            <li className='list-item'>
              <ion-icon class='list-icon' name='checkmark-outline'></ion-icon>
              <strong>comming</strong> soon
            </li>
          </ul>
          <div className='plan-sing-up'>
            <a href='#' className='btn btn--full'>
              comming soon
            </a>
          </div>
        </div>
      </div>

      <div class='container grid'>
        <aside class='plan-details'>Prices comming soon!</aside>
      </div>

      <div class='container grid grid--4-cols'>
        <div class='feature'>
          <ion-icon class='feature-icon' name='paw-outline'></ion-icon>
          <p class='feature-title'>Details</p>
          <p class='feature-text'>
            Our subscriptions cover 365 days per year, even including major
            holidays.
          </p>
        </div>
        <div class='feature'>
          <ion-icon class='feature-icon' name='sparkles-outline'></ion-icon>
          <p class='feature-title'>Details</p>
          <p class='feature-text'>
            Our cooks only use local, fresh, and organic products to prepare
            your meals.
          </p>
        </div>
        <div class='feature'>
          <ion-icon class='feature-icon' name='camera-outline'></ion-icon>
          <p class='feature-title'>Details</p>
          <p class='feature-text'>
            All our partners only use reusable containers to package all your
            meals.
          </p>
        </div>
        <div class='feature'>
          <ion-icon class='feature-icon' name='construct-outline'></ion-icon>
          <p class='feature-title'>Details</p>
          <p class='feature-text'>
            Going on vacation? Just pause your subscription, and we refund
            unused days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Packages;
