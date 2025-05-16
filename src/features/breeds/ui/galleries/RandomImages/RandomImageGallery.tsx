import { useGetMultipleDogImagesQuery } from '@/app/baseApi'
import { ImageCard } from '../components/ImageCard/ImageCard'
import s from './RandomImageGallery.module.scss'

export const RandomImageGallery = () => {
  const { data: images, error, isLoading } = useGetMultipleDogImagesQuery(10)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {JSON.stringify(error)}</div>

  return <div className={s.deck}>{images?.map((imageUrl) => <ImageCard key={imageUrl} imageUrl={imageUrl} />)}</div>
}
