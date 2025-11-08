import { useMemo } from 'react'
import { EnhancedApiError } from '@/common/types'

export const useApiError = (error: unknown) => {
  return useMemo(() => {
    return error ? (error as EnhancedApiError) : null
  }, [error])
}
