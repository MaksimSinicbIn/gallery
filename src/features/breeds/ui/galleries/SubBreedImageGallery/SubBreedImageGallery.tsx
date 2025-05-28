import { useGetImagesBySubBreedQuery } from '@/app/baseApi'
import { useParams } from 'react-router'
import { Gallery } from '../components/Gallery/Gallery'
import { useCacheDogImages } from '@/common/hooks'

export const SubBreedImageGallery = () => {
  const params = useParams()
  const breed = params.breed
  const subBreed = params.subBreed
  const {
    data: images = [],
    isLoading,
    error,
  } = useGetImagesBySubBreedQuery({ breedName: breed!, subBreedName: subBreed! }, { skip: !breed || !subBreed })

  useCacheDogImages(images)

  if (!breed) return <div>No breed selected</div>
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {JSON.stringify(error)}</div>

  return <Gallery images={images} />
}
