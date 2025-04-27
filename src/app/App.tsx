import { Header } from '@/common/components/Header/Header'
import { StartPage } from '@/common/components/StartPage/StartPage'
import { Decks } from '@/features/decks/Decks'

type Props = {
  demo: boolean
}

export const App = ({ demo = false }: Props) => {
  return (
    <>
      <Header />
      <div className='container'>{demo ? <StartPage /> : <Decks />}</div>
    </>
  )
}
