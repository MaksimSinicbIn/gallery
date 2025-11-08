import { ErrorToast, Header } from '@/common/components'
import { AppRouter } from '@/common/routes'

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
