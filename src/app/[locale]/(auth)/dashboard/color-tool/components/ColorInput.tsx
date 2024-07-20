import { Input } from '@/components/ui/input'

type ColorInputProps = {
    label: string
    value: number
    onChange: (value: number) => void
}

export default function ColorInput({ label, value, onChange }: ColorInputProps) {
    return (
        <div>
            <label>{label}</label>
            <Input
                type='text'
                value={value}
                onChange={(e) => onChange(Number(e.target.value))}
                placeholder={label}
            />
        </div>
    )
}

