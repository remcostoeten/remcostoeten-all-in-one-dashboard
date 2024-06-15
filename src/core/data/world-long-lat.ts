export interface Province {
    country: string
    name: string
    lat: number
    lng: number
}

export const provinces: Province[] = [
    { country: 'NL', name: 'Drenthe', lat: 52.941, lng: 6.6144 },
    { country: 'NL', name: 'Flevoland', lat: 52.5271, lng: 5.5952 },
    { country: 'NL', name: 'Friesland', lat: 53.1642, lng: 5.7818 },
    { country: 'NL', name: 'Gelderland', lat: 52.0617, lng: 5.9395 },
    { country: 'NL', name: 'Groningen', lat: 53.2194, lng: 6.5665 },
    { country: 'NL', name: 'Limburg', lat: 51.4416, lng: 5.4697 },
    { country: 'NL', name: 'North Brabant', lat: 51.4827, lng: 5.2322 },
    { country: 'NL', name: 'North Holland', lat: 52.52, lng: 4.7885 },
    { country: 'NL', name: 'Overijssel', lat: 52.4442, lng: 6.5016 },
    { country: 'NL', name: 'South Holland', lat: 51.9715, lng: 4.6552 },
    { country: 'NL', name: 'Utrecht', lat: 52.0907, lng: 5.1214 },
    { country: 'NL', name: 'Zeeland', lat: 51.5128, lng: 3.8601 }
]

export const countries: Province[] = [
    { country: 'FR', name: 'France', lat: 46.6034, lng: 1.8883 },
    { country: 'DE', name: 'Germany', lat: 51.1657, lng: 10.4515 },
    { country: 'IT', name: 'Italy', lat: 41.8719, lng: 12.5674 },
    { country: 'ES', name: 'Spain', lat: 40.4637, lng: -3.7492 },
    { country: 'PL', name: 'Poland', lat: 51.9194, lng: 19.1451 },
    { country: 'RO', name: 'Romania', lat: 45.9432, lng: 24.9668 },
    { country: 'NL', name: 'Netherlands', lat: 52.1326, lng: 5.2913 },
    { country: 'BE', name: 'Belgium', lat: 50.8503, lng: 4.3517 },
    { country: 'GR', name: 'Greece', lat: 39.0742, lng: 21.8243 },
    { country: 'PT', name: 'Portugal', lat: 39.3999, lng: -8.2245 },
    { country: 'CZ', name: 'Czech Republic', lat: 49.8175, lng: 15.473 },
    { country: 'HU', name: 'Hungary', lat: 47.1625, lng: 19.5033 },
    { country: 'SE', name: 'Sweden', lat: 60.1282, lng: 18.6435 },
    { country: 'AT', name: 'Austria', lat: 47.5162, lng: 14.5501 },
    { country: 'CH', name: 'Switzerland', lat: 46.8182, lng: 8.2275 },
    { country: 'BG', name: 'Bulgaria', lat: 42.7339, lng: 25.4858 },
    { country: 'DK', name: 'Denmark', lat: 56.2639, lng: 9.5018 },
    { country: 'FI', name: 'Finland', lat: 61.9241, lng: 25.7482 },
    { country: 'SK', name: 'Slovakia', lat: 48.669, lng: 19.699 },
    { country: 'NO', name: 'Norway', lat: 60.472, lng: 8.4689 },
    { country: 'IE', name: 'Ireland', lat: 53.1424, lng: -7.6921 },
    { country: 'HR', name: 'Croatia', lat: 45.1, lng: 15.2 },
    { country: 'SI', name: 'Slovenia', lat: 46.1512, lng: 14.9955 },
    { country: 'LV', name: 'Latvia', lat: 56.8796, lng: 24.6032 },
    { country: 'EE', name: 'Estonia', lat: 58.5953, lng: 25.0136 },
    { country: 'CY', name: 'Cyprus', lat: 35.1264, lng: 33.4299 },
    { country: 'LU', name: 'Luxembourg', lat: 49.8153, lng: 6.1296 },
    { country: 'MT', name: 'Malta', lat: 35.9375, lng: 14.3754 },
    { country: 'IS', name: 'Iceland', lat: 64.9631, lng: -19.0208 },
    { country: 'LI', name: 'Liechtenstein', lat: 47.166, lng: 9.5554 },
    { country: 'ME', name: 'Montenegro', lat: 42.7087, lng: 19.3744 },
    { country: 'MK', name: 'North Macedonia', lat: 41.6086, lng: 21.7453 },
    { country: 'AL', name: 'Albania', lat: 41.1533, lng: 20.1683 },
    { country: 'RS', name: 'Serbia', lat: 44.0165, lng: 21.0059 },
    {
        country: 'BA',
        name: 'Bosnia and Herzegovina',
        lat: 43.9159,
        lng: 17.6791
    },
    { country: 'MD', name: 'Moldova', lat: 47.4116, lng: 28.3699 },
    { country: 'UA', name: 'Ukraine', lat: 48.3794, lng: 31.1656 },
    { country: 'BY', name: 'Belarus', lat: 53.7098, lng: 27.9534 },
    { country: 'RU', name: 'Russia', lat: 61.524, lng: 105.3188 }
]

export interface Continent {
    name: string
    lat: number
    lng: number
}

export const continents: Continent[] = [
    { name: 'Africa', lat: 1.6508, lng: 10.2679 },
    { name: 'Antarctica', lat: -82.8628, lng: 135.0 },
    { name: 'Asia', lat: 34.0479, lng: 100.6197 },
    { name: 'Europe', lat: 54.526, lng: 15.2551 },
    { name: 'North America', lat: 54.526, lng: -105.2551 },
    { name: 'Australia', lat: -25.2744, lng: 133.7751 },
    { name: 'South America', lat: -8.7832, lng: -55.4915 }
]
