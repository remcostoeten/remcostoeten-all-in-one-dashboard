export function formatDate(dateString: string): string {
    const date = new Date(dateString)

    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

export function formatDateLabel(timestamp: string) {
    return new Date(timestamp).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })
}
