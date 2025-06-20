import { configureStore, isRejectedWithValue, Middleware, MiddlewareAPI } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { baseAPi, ErrorResponse } from './baseApi'
import { appReducer, appSlice, setError } from './appSlice'

const errorMiddleware: Middleware = (api: MiddlewareAPI) => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const payload = action.payload as { data?: ErrorResponse }
    const errorMessage = payload.data?.message || 'Unknown error'
    api.dispatch(setError(errorMessage))
  }
  return next(action)
}

export const store = configureStore({
  reducer: {
    [appSlice.name]: appReducer,
    [baseAPi.reducerPath]: baseAPi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseAPi.middleware, errorMiddleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
