export const BREED_NAME_CORRECTIONS = {
  germanshepherd: 'German Shepherd',
  mexicanhairless: 'Mexican Hairless',
  shihtzu: 'Shih Tzu',
  stbernard: 'St. Bernard',
  cotondetulear: 'Coton de Tulear',
} as const

export type BreedKey = keyof typeof BREED_NAME_CORRECTIONS
