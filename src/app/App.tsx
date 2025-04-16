import { Header } from '@/common/components/Header/Header'
import { StartPage } from '@/common/components/StartPage/StartPage'
import { DecksList } from '@/features/decks/DecksList/DecksList'

type Props = {
  demo: boolean
}

export const App = ({ demo = false }: Props) => {
  return (
    <>
      <Header />
      <div className='container'>{demo ? <StartPage /> : <DecksList />}</div>
    </>
  )
}
