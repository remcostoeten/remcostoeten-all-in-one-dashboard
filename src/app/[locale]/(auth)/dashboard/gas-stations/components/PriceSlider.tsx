'use client'

import { useState } from 'react';
import fetchGasStations from '@/core/utils/api';

type FuelType = 'Euro 95' | 'Euro 98' | 'Diesel' | 'Gas';

const fuelTypeMap: Record<FuelType, number> = {
  'Euro 95': 1,
  'Euro 98': 2,
  'Diesel': 3,
  'Gas': 4,
};

export default function FuelTypeHeader() {
  const [activeFuelType, setActiveFuelType] = useState<FuelType>('Euro 95');

  const handleFuelTypeChange = async (fuelType: FuelType) => {
    setActiveFuelType(fuelType);
    const fuelTypeNumber = fuelTypeMap[fuelType];

    try {
      const response = await fetchGasStations('', fuelTypeNumber);
      console.log(response);
    } catch (error) {
      console.error('Error fetching gas stations:', error);
    }
  };

  return (
    <div className="flex items-center space-x-4 bg-[#1e2736] p-2 rounded-lg">
      {Object.keys(fuelTypeMap).map((fuelType) => (
        <button
          key={fuelType}
          className={`px-3 py-1 rounded ${
            activeFuelType === fuelType
              ? 'bg-[#3683f7] text-white'
              : 'text-gray-300 hover:bg-[#2a374d]'
          }`}
          onClick={() => handleFuelTypeChange(fuelType as FuelType)}
        >
          {fuelType}
        </button>
      ))}
    </div>
  );
}