import { BreedImageGallery } from '@/features/galleries/ui/BreedImageGallery/BreedImageGallery'
import { RandomImageGallery } from '@/features/galleries/ui/RandomImages/RandomImageGallery'
import { SubBreedImageGallery } from '@/features/galleries/ui/SubBreedImageGallery/SubBreedImageGallery'
import { BreedsList } from '@/features/lists/ui/BreedsList/BreedsList'
import { MainLayout } from '@/common/components/Layout/MainLayout'
import { ErrorPage } from '@/common//components/ErrorPage/ErrorPage'
import { HomePage } from '@/common//components/HomePage/HomePage'
import { Routes, Route, Navigate } from 'react-router'

export const PATH = {
  HOME: '/home',
  RANDOM: '/random',
  BREEDS: '/breeds',
  BREED_DETAILS: '/breeds/:breed',
  SUB_BREED: '/breeds/:breed/:subBreed',
  NOT_FOUND: '/not_found',
} as const

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={PATH.HOME} element={<HomePage />} />
        <Route path='/' element={<Navigate to={PATH.HOME} />} />
        <Route path={PATH.RANDOM} element={<RandomImageGallery />} />
        <Route path={PATH.BREEDS} element={<BreedsList />} />
        <Route path={PATH.BREED_DETAILS} element={<BreedImageGallery />} />
        <Route path={PATH.SUB_BREED} element={<SubBreedImageGallery />} />
        <Route path={PATH.NOT_FOUND} element={<ErrorPage />} />
        <Route path='*' element={<Navigate to={PATH.NOT_FOUND} />} />
      </Route>
    </Routes>
  )
}
