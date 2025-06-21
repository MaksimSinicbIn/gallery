import { Middleware, MiddlewareAPI, isRejectedWithValue } from '@reduxjs/toolkit'
import { EnhancedApiError } from '../baseApi'
import { setError } from '../appSlice'

export const errorMiddleware: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const payload = action.payload as EnhancedApiError
    if (payload.status === 'FETCH_ERROR') {
      api.dispatch(setError('Network error'))
    } else if (payload.data?.code === 400) {
      api.dispatch(setError('Invalid request'))
    } else if (payload.data?.code === 500) {
      api.dispatch(setError('Internal Server Error'))
    } else {
      const errorMessage = payload.data?.message || 'Unknown error'
      api.dispatch(setError(errorMessage))
    }
  }
  return next(action)
}
