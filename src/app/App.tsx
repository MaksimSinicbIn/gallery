import { ErrorToast, Header } from '@/common/components'
import { AppRouter } from '@/common/routes'
import { useAddPopStateListener } from '@/common/hooks'

export const App = () => {
  useAddPopStateListener()

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
