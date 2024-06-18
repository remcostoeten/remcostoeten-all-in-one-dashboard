'use client';

import { getCity } from '@/core/@server/getCity';
import { useEffect, useState } from 'react';

export default function DisplayCity() {
  const [city, setCity] = useState('Loading...');

  useEffect(() => {
    const cachedCity = localStorage.getItem('city');
    if (cachedCity) {
      setCity(cachedCity);
    } else {
      getCity()
        .then(fetchedCity => {
          localStorage.setItem('city', fetchedCity);
          setCity(fetchedCity);
        })
        .catch(error => {
          console.error(error);
          setCity('Unknown City');
        });
    }
  }, []);

  return (
    <p className='text-white'>
      {city}
    </p>
  );
}
