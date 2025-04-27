import { useGetMultipleDogImagesQuery } from '@/app/baseApi'
import { DeckItem } from './DeckItem/DeckItem'
import s from './DecksList.module.scss'

export const DecksList = () => {
  const { data: images, error, isLoading } = useGetMultipleDogImagesQuery(10)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {JSON.stringify(error)}</div>

  return <div className={s.deck}>{images?.map((imageUrl) => <DeckItem key={imageUrl} imageUrl={imageUrl} />)}</div>
}
