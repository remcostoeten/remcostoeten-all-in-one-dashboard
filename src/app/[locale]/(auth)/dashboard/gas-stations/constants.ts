export const FUEL_TYPES = ['Euro95', 'Euro98', 'Diesel', 'LPG'] as const;
export type FuelType = typeof FUEL_TYPES[number];