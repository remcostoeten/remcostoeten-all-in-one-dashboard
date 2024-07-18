/**
 * Helper function to get the initials of a name.
 * @param {string} name - The name to get initials from.
 * @returns {string} The initials of the name.
 */
export function getInitials(name: string): string {
    return name
        .split(' ')
        .map((n) => n[0])
        .join('')
        .slice(0, 2)
        .toUpperCase()
}
