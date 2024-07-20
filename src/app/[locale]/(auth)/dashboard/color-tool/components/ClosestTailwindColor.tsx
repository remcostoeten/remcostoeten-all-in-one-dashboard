import { findClosestTailwindColor } from '@/core/utils/colorUtils'

type ClosestTailwindColorProps = {
    hexColor: string
}

const ClosestTailwindColor: React.FC<ClosestTailwindColorProps> = ({
    hexColor
}) => {
    const closestColor = findClosestTailwindColor(hexColor)

    return (
        <div className='mt-4'>
            <h2>Closest Tailwind CSS Color</h2>
            <p>{closestColor}</p>
        </div>
    )
}

export default ClosestTailwindColor
