import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { baseAPi } from './baseApi'
import { appReducer, appSlice } from './appSlice'
import { modalReducer, modalSlice } from '@/features/modal/model/modalSlice'
import { errorMiddleware } from './middleware/errorMiddleware'

export const store = configureStore({
  reducer: {
    [appSlice.name]: appReducer,
    [modalSlice.name]: modalReducer,
    [baseAPi.reducerPath]: baseAPi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseAPi.middleware, errorMiddleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
