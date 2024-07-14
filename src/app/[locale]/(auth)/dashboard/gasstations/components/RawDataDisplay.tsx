import React from 'react'

type RawDataDisplayProps = {
    data: any
}

export const RawDataDisplay: React.FC<RawDataDisplayProps> = ({ data }) => {
    return (
        <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
            {JSON.stringify(data, null, 2)}
        </pre>
    )
}
