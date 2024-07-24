import React from 'react'
import { Slider } from '@/components/ui/slider'
import { cn } from '../../../../../../core/utils/cn'

interface ColorSlidersProps {
    color: { r: number; g: number; b: number }
    onChange: (newColor: { r: number; g: number; b: number }) => void
}

export function ColorSliders({ color, onChange }: ColorSlidersProps) {
    const handleSliderChange = (value: number[], channel: 'r' | 'g' | 'b') => {
        onChange({ ...color, [channel]: value[0] })
    }

    return (
        <div className='space-y-4'>
            <div>
                <label className='block text-sm font-medium text-gray-700'>
                    Red
                </label>
                <Slider
                    defaultValue={[color.r]}
                    max={255}
                    step={1}
                    className={cn('w-full')}
                    onValueChange={(value) => handleSliderChange(value, 'r')}
                />
            </div>
            <div>
                <label className='block text-sm font-medium text-gray-700'>
                    Green
                </label>
                <Slider
                    defaultValue={[color.g]}
                    max={255}
                    step={1}
                    className={cn('w-full')}
                    onValueChange={(value) => handleSliderChange(value, 'g')}
                />
            </div>
            <div>
                <label className='block text-sm font-medium text-gray-700'>
                    Blue
                </label>
                <Slider
                    defaultValue={[color.b]}
                    max={255}
                    step={1}
                    className={cn('w-full')}
                    onValueChange={(value) => handleSliderChange(value, 'b')}
                />
            </div>
        </div>
    )
}
