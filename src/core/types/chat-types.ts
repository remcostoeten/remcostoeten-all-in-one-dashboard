export interface ChatMessage {
    name: string
    message: string
    timestamp: string
    img: string
}

export interface ChatFile {
    name: string
    messages: ChatMessage[]
}
