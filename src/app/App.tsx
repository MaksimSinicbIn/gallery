import { useLocation } from 'react-router'
import { Header } from '@/common/components/Header/Header'
import { AppRouter, PATH } from '@/common/routes/AppRouter'

export const App = () => {
  const location = useLocation()

  const isHomePage = location.pathname === PATH.HOME

  return (
    <>
      {!isHomePage && <Header />}
      <main>
        <AppRouter isHomePage={isHomePage} />
      </main>
    </>
  )
}
