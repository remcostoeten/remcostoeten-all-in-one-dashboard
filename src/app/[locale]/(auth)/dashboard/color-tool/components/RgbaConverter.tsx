import React, { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Flex } from '../../../../../../components/shared/atoms/Flex'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'

type RgbaConverterProps = {
    value?: { r: number; g: number; b: number; a?: number }
    onChange: (value: { r: number; g: number; b: number; a?: number }) => void
    size?: 'small' | 'medium' | 'large'
}

export default function RgbaConverter({
    value = { r: 0, g: 0, b: 0 },
    onChange,
    size = 'small'
}: RgbaConverterProps) {
    const [isRgba, setIsRgba] = useState(false)

    const sizes = {
        small: 'w-12',
        medium: 'w-16',
        large: 'w-24'
    }

    const handlePaste = (
        e: React.ClipboardEvent<HTMLInputElement>,
        channel: 'r' | 'g' | 'b' | 'a'
    ) => {
        e.preventDefault()
        const pastedText = e.clipboardData.getData('text')
        const values = pastedText.split(',').map(Number)

        if (values.length >= 3 && values.every((v) => !isNaN(v))) {
            if (channel === 'r' || channel === 'g' || channel === 'b') {
                const index = channel === 'r' ? 0 : channel === 'g' ? 1 : 2

                onChange({
                    ...value,
                    [channel]: Math.min(255, Math.max(0, values[index]))
                })
            } else if (channel === 'a' && values.length >= 4) {
                onChange({ ...value, a: Math.min(1, Math.max(0, values[3])) })
            }
        } else {
            // If not a valid RGB/RGBA string, just set the pasted value for this input
            const newValue =
                channel === 'a'
                    ? Math.min(1, Math.max(0, Number(pastedText)))
                    : Math.min(255, Math.max(0, Number(pastedText)))

            onChange({ ...value, [channel]: newValue })
        }
    }

    const handleInputChange = (
        channel: 'r' | 'g' | 'b' | 'a',
        newValue: number
    ) => {
        onChange({ ...value, [channel]: newValue })
    }

    return (
        <Flex direction='col' items='center' className='space-y-2'>
            <div className='flex items-center space-x-2'>
                <Switch
                    id='rgba-mode'
                    checked={isRgba}
                    onCheckedChange={setIsRgba}
                />
                <Label htmlFor='rgba-mode'>RGBA Mode</Label>
            </div>
            {['r', 'g', 'b', ...(isRgba ? ['a'] : [])].map((channel) => (
                <Flex key={channel} direction='col' items='center'>
                    <label className='text-text py-0.5'>
                        {channel.toUpperCase()}
                    </label>
                    <Input
                        className={`${sizes[size]} items-center text-center`}
                        type='number'
                        value={
                            value &&
                            value[channel as keyof typeof value] !== undefined
                                ? value[channel as keyof typeof value]
                                : 0
                        }
                        onChange={(e) =>
                            handleInputChange(
                                channel as 'r' | 'g' | 'b' | 'a',
                                Number(e.target.value)
                            )
                        }
                        onPaste={(e) =>
                            handlePaste(e, channel as 'r' | 'g' | 'b' | 'a')
                        }
                        placeholder={
                            size === 'large' ? '#fff' : channel.toUpperCase()
                        }
                        min={0}
                        max={channel === 'a' ? 1 : 255}
                        step={channel === 'a' ? 0.1 : 1}
                    />
                </Flex>
            ))}
        </Flex>
    )
}
