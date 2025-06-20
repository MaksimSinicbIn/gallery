import { createSlice } from '@reduxjs/toolkit'

export type ThemeMode = 'dark' | 'light'

const loadTheme = (): ThemeMode => {
  const savedTheme = localStorage.getItem('theme') as ThemeMode | null
  return savedTheme || 'dark'
}

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    themeMode: loadTheme(),
    error: null as string | null,
  },
  reducers: (create) => ({
    changeTheme: create.reducer<{ themeMode: ThemeMode }>((state, action) => {
      state.themeMode = action.payload.themeMode
      localStorage.setItem('theme', action.payload.themeMode)
    }),
    toggleTheme: create.reducer((state) => {
      const newTheme = state.themeMode === 'dark' ? 'light' : 'dark'
      state.themeMode = newTheme
      localStorage.setItem('theme', newTheme)
    }),
    setError: create.reducer<string | null>((state, action) => {
      state.error = action.payload
    }),
  }),
  selectors: {
    selectThemeMode: (state) => state.themeMode,
    selectAppError: (state) => state.error,
  },
})

export const appReducer = appSlice.reducer
export const { toggleTheme, changeTheme, setError } = appSlice.actions
export const { selectThemeMode, selectAppError } = appSlice.selectors
