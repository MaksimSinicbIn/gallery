import { ErrorToast } from '@/common/components/ErrorToast/ErrorToast'
import { Header } from '@/common/components/Header/Header'
import { AppRouter, PATH } from '@/common/routes/AppRouter'
import { useLocation } from 'react-router'

export const App = () => {
  const location = useLocation()

  const isHomePage = location.pathname === PATH.HOME

  return (
    <>
      {!isHomePage && <Header />}
      <main>
        <AppRouter />
      </main>
      <ErrorToast />
    </>
  )
}
