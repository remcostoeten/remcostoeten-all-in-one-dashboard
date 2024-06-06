// @ts-nocheck
'use client';

import { IBM_Plex_Mono, IBM_Plex_Sans } from 'next/font/google';
import React, { useState } from 'react';

const plexmono = IBM_Plex_Mono({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

const plexsans = IBM_Plex_Sans({
  weight: ['200', '300', '400', '500', '600', '700'],
  subsets: ['latin'],
});

interface FontShowcaseProps {}

const FontShowcase: React.FC<FontShowcaseProps> = () => {
  const [font, setFont] = useState('plexmono');

  const toggleFont = () => {
    setFont(font === 'plexmono' ? 'plexsans' : 'plexmono');
  };

  return (
    <div className={plexsans.className}>
      <button onClick={toggleFont}>Toggle Font</button>
      <h1 className="text-3xl font-bold">Heading 1 (Bold)</h1>
      <h2 className="text-2xl">Heading 2 (Regular)</h2>
      <h3 className="text-xl font-bold">Heading 3 (Bold)</h3>
      <h4 className="text-lg">Heading 4 (Regular)</h4>
      <p className="mb-4 rounded-md bg-gray-100 px-4 py-2">
        Paragraph text with some body copy.
      </p>
      <span className="italic text-gray-500">
        Inline text with a different style.
      </span>
      <div className="pre rounded-md bg-gray-200 p-3">
        Preformatted text with a monospaced font.
      </div>
    </div>
  );
};

export default FontShowcase;
