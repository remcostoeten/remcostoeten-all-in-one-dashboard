export default function Hearts({ numHearts = 8 }: { numHearts?: number }) {
    return (
        <span
            id='hearts'
            className='!-left-[100%] absolute  pointer-events-none'
        >
            {Array.from({ length: numHearts }, (_, i) => (
                <span key={i} className={`heart${i + 1}`}>
                    &hearts;
                </span>
            ))}
        </span>
    )
}
