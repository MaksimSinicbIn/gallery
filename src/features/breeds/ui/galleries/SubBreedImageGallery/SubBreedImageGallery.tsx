import { EnhancedApiError, useGetImagesBySubBreedQuery } from '@/app/baseApi'
import { useNavigate, useParams } from 'react-router'
import { Gallery } from '../components/Gallery/Gallery'
import { useCacheDogImages } from '@/common/hooks'
import { PATH } from '@/common/routes/AppRouter'
import { LinearLoader } from '@/common/components/Loader/LinearLoader'
import { useEffect } from 'react'

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

  useEffect(() => {
    if (error) {
      const apiError = error as EnhancedApiError
      if (apiError.data?.code === 404) {
        navigate(PATH.NOT_FOUND)
      }
    }
  }, [error, navigate])

  if (isLoading) return <LinearLoader />
  if (error) return <div>Error: {JSON.stringify(error)}</div>

  return <Gallery isLoading={isLoading} images={images} />
}
