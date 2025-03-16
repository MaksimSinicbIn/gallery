import { Header } from '@/common/components/Header/Header'
import { DecksList } from '@/features/decks/DecksList/DecksList'

export const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <DecksList />
      </div>
    </>
  )
}
