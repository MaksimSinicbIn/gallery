// Для одиночного значения
export const normalizeBreedName = (breed: string): string => breed.toLowerCase().replace(/[ .]/g, '')
