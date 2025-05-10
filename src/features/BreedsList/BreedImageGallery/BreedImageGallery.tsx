import { useGetImagesByBreedQuery } from '@/app/baseApi'
import { useParams } from 'react-router'
import { ImageCard } from '@/common/components/ImageCard/ImageCard'
import s from './BreedImageGallery.module.scss'

export const BreedImageGallery = () => {
  const params = useParams()
  const breed = params.breed
  const { data: images = [], isLoading, error } = useGetImagesByBreedQuery(breed || '', { skip: !breed })

  if (!breed) return <div>No breed selected</div>
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {JSON.stringify(error)}</div>

  return (
    <div>
      <div className={s.card}>{images?.map((imageUrl) => <ImageCard key={imageUrl} imageUrl={imageUrl} />)}</div>
    </div>
  )
}
