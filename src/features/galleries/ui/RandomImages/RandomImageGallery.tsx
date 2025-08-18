import { useEffect } from 'react'
import { useGetMultipleDogImagesQuery } from '@/app/baseApi'
import { Gallery } from '../components/Gallery/Gallery'
import { useApiError, useCacheDogImages } from '@/common/hooks'
import { PATH } from '@/common/routes/AppRouter'
import { useNavigate } from 'react-router'
import { ErrorMessage } from '@/common/components/ErrorMessage/ErrorMessage'

export const RandomImageGallery = () => {
  const navigate = useNavigate()

  const { data: images = [], refetch, error, isError, isLoading } = useGetMultipleDogImagesQuery(20)

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
