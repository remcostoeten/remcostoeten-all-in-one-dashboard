'use client';

import { mix, transform } from 'framer-motion';
import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        top: position.y,
        left: position.x,
        width: '100px',
        height: '100px',
        background: 'rgba(255, 255, 255, 0.1)',
        pointerEvents: 'none',
        mixBlendMode: 'screen',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};

export default CustomCursor;