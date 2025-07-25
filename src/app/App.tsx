import { ErrorToast } from '@/common/components/ErrorToast/ErrorToast'
import { Header } from '@/common/components/Header/Header'
import { AppRouter } from '@/common/routes/AppRouter'

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <AppRouter />
      </main>
      <ErrorToast />
    </>
  )
}
