import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/main.scss'
import { App } from '@/app/App.tsx'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
)
