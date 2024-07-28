export function extractTextFromJSON(json: any): string {
    if (typeof json === 'string') {
        try {
            json = JSON.parse(json)
        } catch (e) {
            return json
        }
    }

    if (json.type === 'doc' && Array.isArray(json.content)) {
        return json.content.map((node) => extractTextFromJSON(node)).join('\n')
    }

    if (json.type === 'paragraph' && Array.isArray(json.content)) {
        return json.content.map((node) => extractTextFromJSON(node)).join('')
    }

    if (json.type === 'text' && typeof json.text === 'string') {
        return json.text
    }

    return ''
}
