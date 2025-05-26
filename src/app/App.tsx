import { Navigate, Route, Routes, useLocation } from 'react-router'
import { Header } from '@/common/components/Header/Header'
import { ErrorPage } from '@/common/components/ErrorPage/ErrorPage'
import { HomePage } from '@/common/components/HomePage/HomePage'
import { BreedsList } from '@/features/breeds/ui/lists/BreedsList/BreedsList'
import { BreedImageGallery } from '@/features/breeds/ui/galleries/BreedImageGallery/BreedImageGallery'
import { RandomImageGallery } from '@/features/breeds/ui/galleries/RandomImages/RandomImageGallery'
import { SubBreedImageGallery } from '@/features/breeds/ui/galleries/SubBreedImageGallery/SubBreedImageGallery'
import clsx from 'clsx'

export const PATH = {
  HOME: '/home',
  BREEDS: '/breeds',
  BREED_DETAILS: '/breeds/:breed',
  SUB_BREED: '/breeds/:breed/:subBreed',
  RANDOM: '/random',
  NOT_FOUND: '/404',
} as const

export const App = () => {
  const location = useLocation()

  const isHomePage = location.pathname === PATH.HOME

  return (
    <>
      {!isHomePage && <Header />}
      <Routes>
        <Route path={PATH.HOME} element={<HomePage />} />
        <Route path='/' element={<Navigate to={PATH.HOME} />} />
        <Route
          path='*'
          element={
            <main className={clsx('container', isHomePage ? 'fullScreen' : 'withHeader')}>
              <Routes>
                <Route path={PATH.RANDOM} element={<RandomImageGallery />} />
                <Route path={PATH.BREEDS} element={<BreedsList />} />
                <Route path={PATH.BREED_DETAILS} element={<BreedImageGallery />} />
                <Route path={PATH.SUB_BREED} element={<SubBreedImageGallery />} />
                <Route path={PATH.NOT_FOUND} element={<ErrorPage />} />
                <Route path='*' element={<Navigate to={PATH.NOT_FOUND} />} />
              </Routes>
            </main>
          }
        />
      </Routes>
    </>
  )
}
