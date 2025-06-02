import { EnhancedApiError, useGetImagesBySubBreedQuery } from '@/app/baseApi'
import { useNavigate, useParams } from 'react-router'
import { Gallery } from '../components/Gallery/Gallery'
import { useCacheDogImages } from '@/common/hooks'
import { PATH } from '@/common/routes/AppRouter'

export const SubBreedImageGallery = () => {
  const navigate = useNavigate()

  const params = useParams()

  const breed = params.breed

  const subBreed = params.subBreed

  const {
    data: images = [],
    isLoading,
    error,
  } = useGetImagesBySubBreedQuery({ breedName: breed!, subBreedName: subBreed! }, { skip: !breed || !subBreed })

  useCacheDogImages(images)

  if (error) {
    const apiError = error as EnhancedApiError
    if (apiError.data?.code === 404) {
      navigate(PATH.NOT_FOUND)
    }
  }

  if (!breed) return <div>No breed selected</div>
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {JSON.stringify(error)}</div>

  return <Gallery images={images} />
}
