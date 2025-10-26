import Masonry from 'react-masonry-css'
import { ImageCard } from '../ImageCard/ImageCard'
import { ImageCardSkeleton } from '../../skeletons/ImageCardSkeleton/ImageCardSkeleton'
import { ImageFullView } from '@/features/modal/ImageFullView/ImageFullView'
import { useAppSelector } from '@/common/hooks'
import { selectModalStatus } from '@/features/modal/modalSlice'
import 'react-loading-skeleton/dist/skeleton.css'
import s from './Gallery.module.scss'

type BreakpointColumns = {
  default: number
  [key: number]: number
}

type Props = {
  images: string[]
  isLoading: boolean
}

export const Gallery = ({ images, isLoading }: Props) => {
  const isModalOpen = useAppSelector(selectModalStatus)

  const breakpointColumnsObj: BreakpointColumns =
    images?.length === 1
      ? { default: 1 }
      : {
          default: 4,
          1200: 3,
          768: 2,
          576: 1,
        }

  return (
    <section aria-label='Gallery'>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className={s.myMasonryGrid}
        columnClassName={s.myMasonryGridColumn}
      >
        {isLoading &&
          Array(20)
            .fill(null)
            .map((_, index) => <ImageCardSkeleton key={`skeleton-${index}`} />)}
        {images?.map((imageUrl) => <ImageCard key={imageUrl} imageUrl={imageUrl} />)}
      </Masonry>
      {isModalOpen && <ImageFullView />}
    </section>
  )
}
