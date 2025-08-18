import { FetchBaseQueryError } from '@reduxjs/toolkit/query/react'

export interface BreedsResponse {
  message: Record<string, string[]>
  status: string
}

export interface BreedItem {
  name: string
  subBreeds: string[]
}

export type ErrorResponse = {
  status: string
  message: string
  code: number
}

export type EnhancedApiError = FetchBaseQueryError & {
  data?: ErrorResponse
}

export type GroupedBreeds = Record<string, BreedItem[]>
