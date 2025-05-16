import { useGetMultipleDogImagesQuery } from '@/app/baseApi'
import { Gallery } from '../components/Gallery/Gallery'

export const RandomImageGallery = () => {
  const { data: images = [], error, isLoading } = useGetMultipleDogImagesQuery(10)

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {JSON.stringify(error)}</div>

  return <Gallery images={images} />
}
