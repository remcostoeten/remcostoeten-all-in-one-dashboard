type AvatarShellProps = {
    background?: string;
    Initials?: string;
    hasTwoLetters?: boolean;
    firstLetter?: string;
};

export default function AvatarShell({
    background = 'bg-orange',
    Initials = 'RS',
    hasTwoLetters = false,
    firstLetter = 'R',
    ...props
}: AvatarShellProps) {
    const showInitials = hasTwoLetters || Initials.length > 2;

    return (
        <div className={`grid place-items-center w-8 h-8 text-sm font-medium text-white whitespace-nowrap rounded ${background}`} {...props}>
            <p>{firstLetter}{showInitials && <span>{Initials.toUpperCase()}</span>}</p>
        </div>
    );
}