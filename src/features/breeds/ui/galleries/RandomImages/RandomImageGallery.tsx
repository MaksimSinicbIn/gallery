import { EnhancedApiError, useGetMultipleDogImagesQuery } from '@/app/baseApi'
import { Gallery } from '../components/Gallery/Gallery'
import { useCacheDogImages } from '@/common/hooks'
import { PATH } from '@/common/routes/AppRouter'
import { useNavigate } from 'react-router'

export const RandomImageGallery = () => {
  const navigate = useNavigate()

  const { data: images = [], error, isLoading } = useGetMultipleDogImagesQuery(20)

  useCacheDogImages(images)

  if (error) {
    const apiError = error as EnhancedApiError
    if (apiError.data?.code === 404) {
      navigate(PATH.NOT_FOUND)
    }
  }

  if (error) return <div>Error: {JSON.stringify(error)}</div>

  return <Gallery isLoading={isLoading} images={images} />
}
