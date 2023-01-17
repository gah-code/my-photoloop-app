import React from 'react';
import { useDispatch } from 'react-redux';

const ServiceItem = () => {
  const dispatch = useDispatch();
  const { description, id } = 'props';
  return (
    <div>
      <p className='description'>{description}</p>
    </div>
  );
};

export default ServiceItem;
