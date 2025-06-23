import { useMemo } from 'react'
import { EnhancedApiError } from '@/app/baseApi'

export const useApiError = (error: unknown) => {
  return useMemo(() => {
    return error ? (error as EnhancedApiError) : null
  }, [error])
}
