import { BREED_NAME_CORRECTIONS, BreedKey } from '@/common/constants'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface BreedsResponse {
  message: Record<string, string[]>
  status: string
}

export interface BreedItem {
  name: string
  subBreeds: string[]
}

export type GroupedBreeds = Record<string, BreedItem[]>

export const baseAPi = createApi({
  reducerPath: 'dogsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dog.ceo/api/',
  }),
  endpoints: (builder) => ({
    getRandomDogImage: builder.query<string, void>({
      query: () => 'breeds/image/random',
      transformResponse: (response: { message: string }) => response.message,
    }),
    getMultipleDogImages: builder.query<string[], number>({
      query: (count) => `breeds/image/random/${count}`,
      transformResponse: (response: { message: string[] }) => response.message,
    }),
    getBreedsList: builder.query<BreedItem[], void>({
      query: () => `breeds/list/all`,
      transformResponse: (response: BreedsResponse) =>
        Object.entries(response.message).map(([breed, subBreeds]) => ({
          name: BREED_NAME_CORRECTIONS[breed as BreedKey] || breed.charAt(0).toUpperCase() + breed.slice(1),
          subBreeds: subBreeds.map((sub) => sub.charAt(0).toUpperCase() + sub.slice(1)),
        })),
    }),
    getImagesByBreed: builder.query<string[], string>({
      query: (breed) => `breed/${breed}/images`,
      transformResponse: (response: { message: string[] }) => response.message.slice(0, 10),
    }),
    getImagesBySubBreed: builder.query<string[], { breedName: string; subBreedName: string }>({
      query: ({ breedName, subBreedName }) => `breed/${breedName}/${subBreedName}/images`,
      transformResponse: (response: { message: string[] }) => response.message.slice(0, 10),
    }),
  }),
})

export const {
  useGetRandomDogImageQuery,
  useGetMultipleDogImagesQuery,
  useGetBreedsListQuery,
  useGetImagesByBreedQuery,
  useGetImagesBySubBreedQuery,
} = baseAPi
