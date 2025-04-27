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
  }),
})

export const { useGetRandomDogImageQuery, useGetMultipleDogImagesQuery } = baseAPi
