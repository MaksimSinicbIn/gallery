import { useGetImagesByBreedQuery } from '@/app/baseApi'
import { useParams } from 'react-router'
import { Gallery } from '../components/Gallery/Gallery'
import { useCacheDogImages } from '@/common/hooks'

export const BreedImageGallery = () => {
  const params = useParams()
  const breed = params.breed
  const { data: images = [], isLoading, error } = useGetImagesByBreedQuery(breed || '', { skip: !breed })

  useCacheDogImages(images)

  if (!breed) return <div>No breed selected</div>
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {JSON.stringify(error)}</div>

  return <Gallery images={images} />
}
