import { Navigate, Route, Routes } from 'react-router'
import { ErrorPage } from '@/common/components/ErrorPage/ErrorPage'
import { Header } from '@/common/components/Header/Header'
import { HomePage } from '@/common/components/HomePage/HomePage'
import { BreedImageGallery } from '@/features/BreedsList/BreedImageGallery/BreedImageGallery'
import { BreedsList } from '@/features/BreedsList/BreedsList'
import { RandomImageGallery } from '@/features/RandomImages/RandomImageGallery'

export const PATH = {
  HOME: '/home',
  BREEDS: '/breeds',
  BREED_DETAILS: '/breeds/:breed',
  RANDOM: '/random',
  NOT_FOUND: '/404',
} as const

export const App = () => {
  return (
    <>
      <Header />
      <div className='container'>
        <Routes>
          <Route path={PATH.HOME} element={<HomePage />} />
          <Route path='/' element={<Navigate to={PATH.HOME} />} />
          <Route path={PATH.RANDOM} element={<RandomImageGallery />} />
          <Route path={PATH.BREEDS} element={<BreedsList />} />
          <Route path={PATH.BREED_DETAILS} element={<BreedImageGallery />} />
          <Route path={PATH.NOT_FOUND} element={<ErrorPage />} />
          <Route path='*' element={<Navigate to={PATH.NOT_FOUND} />} />
        </Routes>
      </div>
    </>
  )
}
