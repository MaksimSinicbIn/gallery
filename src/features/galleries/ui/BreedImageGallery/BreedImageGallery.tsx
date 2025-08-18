import { useEffect } from 'react'
import { useGetImagesByBreedQuery } from '@/app/baseApi'
import { useNavigate, useParams } from 'react-router'
import { Gallery } from '../components/Gallery/Gallery'
import { useApiError, useCacheDogImages } from '@/common/hooks'
import { ErrorMessage } from '@/common/components/ErrorMessage/ErrorMessage'
import { PATH } from '@/common/routes/AppRouter'

export const BreedImageGallery = () => {
  const navigate = useNavigate()

  const params = useParams()

  const breed = params.breed

  const {
    data: images = [],
    refetch,
    error,
    isError,
    isLoading,
  } = useGetImagesByBreedQuery(breed || '', { skip: !breed })

  useCacheDogImages(images)

  const apiError = useApiError(error)

  useEffect(() => {
    if (isError) {
      if (apiError?.data?.code === 404) {
        navigate(PATH.NOT_FOUND)
      }
    }
  }, [apiError, isError, navigate])

  if (isError) {
    if (apiError?.status === 'FETCH_ERROR' || apiError?.status === 'TIMEOUT_ERROR') {
      return <ErrorMessage onRetry={refetch} />
    }
  }

  return <Gallery isLoading={isLoading} images={images} />
}
