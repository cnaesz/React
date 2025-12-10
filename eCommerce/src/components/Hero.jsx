import React from 'react';
import useApi from '../hooks/useApi';

import './hero.css';

export const Hero = () => {
  const { data, loading, error } = useApi('https://api.escuelajs.co/api/v1/categories');

  if (loading) console.log('loading');
  if (error) return console.log('err');

  return (
    <div className='hero'>
      <div className='hero-img'>
        <img src='./heroimg.jpg'></img>
      </div>
      <div className='herocat'>
        {data
          .sort(() => Math.random() - 0.5)
          .slice(0, 9)
          .map((product) => (
            <ul className='it' key={product.id}>
              {product.name} <i>></i>
            </ul>
          ))}
      </div>
    </div>
  );
};
