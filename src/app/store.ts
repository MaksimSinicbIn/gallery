import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { baseAPi } from './baseApi'
import { appReducer, appSlice } from './appSlice'

export const store = configureStore({
  reducer: {
    [appSlice.name]: appReducer,
    [baseAPi.reducerPath]: baseAPi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseAPi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
