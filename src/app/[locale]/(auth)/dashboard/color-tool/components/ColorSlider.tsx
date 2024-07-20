import { Input } from '@/components/ui/input'

type ColorInputProps = {
    label: string
    value: number
    onChange: (value: number) => void
}

const ColorInput: React.FC<ColorInputProps> = ({ label, value, onChange }) => {
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

export default ColorInput
