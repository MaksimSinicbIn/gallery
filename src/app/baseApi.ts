import { BREED_NAME_CORRECTIONS, BreedKey } from '@/common/constants'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

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
    getBreedsList: builder.query<string[], void>({
      query: () => `breeds/list/all`,
      transformResponse: (response: { message: Record<string, string[]> }) =>
        Object.keys(response.message).map(
          (breed) => BREED_NAME_CORRECTIONS[breed as BreedKey] || breed.charAt(0).toUpperCase() + breed.slice(1)
        ),
    }),
  }),
})

export const { useGetRandomDogImageQuery, useGetMultipleDogImagesQuery, useGetBreedsListQuery } = baseAPi
