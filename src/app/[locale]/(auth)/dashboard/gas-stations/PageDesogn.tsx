import { useState } from 'react'
import { type FuelType, FUEL_TYPES } from './constants'

// In PageDesign.tsx
interface PageDesignProps {
    onCitySubmit: (city: string) => void
    onFuelTypeChange: (fuelType: FuelType) => void
}

// In FuelTypeHeader.tsx
interface FuelTypeHeaderProps {
    onFuelTypeChange: (fuelType: FuelType) => void
}

export default function FuelTypeHeader({
    onFuelTypeChange
}: FuelTypeHeaderProps) {
    const [activeFuelType, setActiveFuelType] = useState<FuelType>('Euro95')

    const handleFuelTypeChange = (fuelType: FuelType) => {
        setActiveFuelType(fuelType)
        onFuelTypeChange(fuelType)
    }

    return (
        <div className='flex items-center space-x-4 bg-[#1e2736] p-2 rounded-lg'>
            {FUEL_TYPES.map((fuelType) => (
                <button
                    key={fuelType}
                    className={`px-3 py-1 rounded ${
                        activeFuelType === fuelType
                            ? 'bg-[#3683f7] text-white'
                            : 'text-gray-300 hover:bg-[#2a374d]'
                    }`}
                    onClick={() => handleFuelTypeChange(fuelType)}
                >
                    {fuelType}
                </button>
            ))}
        </div>
    )
}
