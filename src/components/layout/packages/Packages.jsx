import React from 'react';
import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import './Packages.styles.scss';

const Packages = () => {
  const ref = useRef(null);
  const { scrollXProgress } = useScroll({ container: ref });
  return (
    <div className='packages'>
      <ul className='packages__slider' ref={ref}>
        <li className='packages__slider-item'>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
    </div>
  );
};

export default Packages;
