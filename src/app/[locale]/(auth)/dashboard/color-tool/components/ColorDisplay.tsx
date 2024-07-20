import {
    generateCssVariable,
    generateTailwindConfig
} from '@/core/utils/colorUtils'

type ColorDisplayProps = {
    hexColor: string
    onColorCopy: (color: string) => void
}

const ColorDisplay: React.FC<ColorDisplayProps> = ({
    hexColor,
    onColorCopy
}) => {
    return (
        <div className='mt-4'>
            <h2>CSS Variable</h2>
            <input
                type='text'
                value={generateCssVariable('custom-color', hexColor)}
                readOnly
                onClick={(e) => onColorCopy(e.target.value)}
            />
            <h2>Tailwind CSS Config</h2>
            <pre
                style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}
                onClick={() =>
                    onColorCopy(generateTailwindConfig('customColor', hexColor))
                }
            >
                {generateTailwindConfig('customColor', hexColor)}
            </pre>
        </div>
    )
}

export default ColorDisplay
