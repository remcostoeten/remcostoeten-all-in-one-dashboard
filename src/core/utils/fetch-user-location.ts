async function fetchUserLocation() {
    const response = await fetch('https://ipapi.co/json/')
    if (!response.ok) {
        throw new Error('Failed to fetch location data')
    }
    return response.json()
}

export default fetchUserLocation
