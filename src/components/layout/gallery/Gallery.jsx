import React from 'react';
import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import ImgThree from '../../../assets/image3.jpg';
import './Gallery.styles.scss';

const Gallery = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  return (
    <section className='section-gallery'>
      <div className='gallery'>
        <ul className='gallery__slider' ref={ref}>
          <li className='gallery__slider-item'>test</li>
          <li>
            <img src={ImgThree} alt='' />
          </li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>
            <img src={ImgThree} alt='' />
          </li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
          <li>test</li>
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
