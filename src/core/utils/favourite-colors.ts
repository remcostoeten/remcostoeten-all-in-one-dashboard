export const getFavoriteColors = (): string[] => {
    const favorites = localStorage.getItem('favoriteColors')
    return favorites ? JSON.parse(favorites) : []
}

export const addColorToFavorites = (color: string) => {
    let favorites = getFavoriteColors()
    if (!favorites.includes(color)) {
        favorites = [color, ...favorites]
        localStorage.setItem('favoriteColors', JSON.stringify(favorites))
    }
}

export const removeColorFromFavorites = (color: string) => {
    let favorites = getFavoriteColors()
    favorites = favorites.filter((fav) => fav !== color)
    localStorage.setItem('favoriteColors', JSON.stringify(favorites))
}
