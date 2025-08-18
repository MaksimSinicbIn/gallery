import { useMemo } from 'react'
import { EnhancedApiError } from '../types'

export const useApiError = (error: unknown) => {
  return useMemo(() => {
    return error ? (error as EnhancedApiError) : null
  }, [error])
}
