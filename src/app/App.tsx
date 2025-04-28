import { Header } from '@/common/components/Header/Header'
import { BreedsPage } from '@/features/BreedsPage/BreedsPage'
import { Decks } from '@/features/Decks/Decks'

type Props = {
  demo: boolean
}

export const App = ({ demo = true }: Props) => {
  return (
    <>
      <Header />
      <div className='container'>{demo ? <BreedsPage /> : <Decks />}</div>
    </>
  )
}
