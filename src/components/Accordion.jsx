import React, { useState } from 'react';
import { useRef } from 'react';

import './Accordion.styles.scss';

const Accordion = () => {
  return (
    <>
      <div class='accordion'>
        <div class='item'>
          <p class='number'>01</p>
          <p class='text'>Where are these chairs assembled?</p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='icon'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M19 9l-7 7-7-7'
            />
          </svg>
          <div class='hidden-box'>
            <ul>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Quasi accusamus corporis totam tempora suscipit ab obcaecati.
              </li>
              <li>Tempora, et atque officia at consequatur laborum!</li>
              <li>Repudiandae praesentium illo voluptate in, atque enim.</li>
            </ul>
          </div>
        </div>
        {/* 
        <div class='item open'>
          <p class='number'>02</p>
          <p class='text'>How long do I have to return my chair?</p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='icon'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M19 9l-7 7-7-7'
            />
          </svg>
          <div class='hidden-box'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium dolor at sequi obcaecati cupiditate. Voluptates
              repellendus cupiditate aperiam! Incidunt amet quo neque.
            </p>
            <ul>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Quasi accusamus corporis totam tempora suscipit ab obcaecati.
              </li>
              <li>Tempora, et atque officia at consequatur laborum!</li>
              <li>Repudiandae praesentium illo voluptate in, atque enim.</li>
            </ul>
          </div>
        </div>

        <div class='item'>
          <p class='number'>03</p>
          <p class='text'>Do you ship to countries outside the EU?</p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            class='icon'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M19 9l-7 7-7-7'
            />
          </svg>
          <div class='hidden-box'>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium dolor at sequi obcaecati cupiditate. Voluptates
              repellendus cupiditate aperiam! Incidunt amet quo neque.
            </p>
            <ul>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</li>
              <li>
                Quasi accusamus corporis totam tempora suscipit ab obcaecati.
              </li>
              <li>Tempora, et atque officia at consequatur laborum!</li>
              <li>Repudiandae praesentium illo voluptate in, atque enim.</li>
            </ul>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Accordion;
