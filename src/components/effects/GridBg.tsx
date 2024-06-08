// src/components/effects/GridRayBg.tsx
'use client';
import React from 'react';
import GridPattern from './GridPattern';

interface GridBackgroundProps {
  rayCount: number;
  animationDuration: number; // new prop for animation duration
}

const GridBackground: React.FC<GridBackgroundProps> = ({ rayCount, animationDuration }) => {
  return (
    <div className="relative w-full h-full">
      <GridPattern width={50} height={50} numBeams={rayCount} maxOpacity={0.7} duration={animationDuration} vRayCount={20} />
    </div>
  );
};

export default GridBackground;