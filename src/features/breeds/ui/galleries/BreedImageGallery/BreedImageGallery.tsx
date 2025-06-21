import { EnhancedApiError, useGetImagesByBreedQuery } from '@/app/baseApi'
import { useNavigate, useParams } from 'react-router'
import { Gallery } from '../components/Gallery/Gallery'
import { useCacheDogImages } from '@/common/hooks'
import { PATH } from '@/common/routes/AppRouter'
import { useEffect } from 'react'

export const BreedImageGallery = () => {
  const navigate = useNavigate()

  const params = useParams()

  const breed = params.breed

  const { data: images = [], isLoading, error } = useGetImagesByBreedQuery(breed || '', { skip: !breed })

  useCacheDogImages(images)

  useEffect(() => {
    if (error) {
      const apiError = error as EnhancedApiError
      if (apiError.data?.code === 404) {
        navigate(PATH.NOT_FOUND)
      }
    }
  }, [error, navigate])

  if (error) return <div>Error: {JSON.stringify(error)}</div>

  return <Gallery isLoading={isLoading} images={images} />
}
