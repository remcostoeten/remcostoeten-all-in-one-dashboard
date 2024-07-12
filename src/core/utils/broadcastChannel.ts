export const createBroadcastChannel = (channelName: string) => {
    if (typeof window !== 'undefined') {
        return new BroadcastChannel(channelName)
    }
    return null
}
