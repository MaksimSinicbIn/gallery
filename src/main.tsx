import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@/styles/main.scss'
import { App } from '@/app/App.tsx'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { BrowserRouter } from 'react-router'
import { ThemeProvider } from './common/components/ThemeProvider/ThemeProvider'

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(
      (registration) => {
        console.log('SW registered:', registration)
      },
      (err) => {
        console.log('SW registration failed:', err)
      }
    )
  })
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </StrictMode>
)
