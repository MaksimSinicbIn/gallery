import { useGetImagesByBreedQuery } from '@/app/baseApi'
import { DeckItem } from '../Decks/DecksList/DeckItem/DeckItem'
import s from './BreedImageGallery.module.scss'
import { Button } from '@/common/components/Button/Button'
type Props = {
  selectedBreed: string | null
  onBack: () => void
}

export const BreedImageGallery = ({ selectedBreed, onBack }: Props) => {
  const {
    data: images = [],
    isLoading,
    error,
  } = useGetImagesByBreedQuery(selectedBreed || '', { skip: !selectedBreed })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {JSON.stringify(error)}</div>

  return (
    <div>
      <div style={{ margin: `10px 10px` }}>
        <Button onClick={() => onBack()}>← Назад к списку</Button>
      </div>
      <div className={s.card}>{images?.map((imageUrl) => <DeckItem key={imageUrl} imageUrl={imageUrl} />)}</div>
    </div>
  )
}
