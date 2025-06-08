import Masonry from 'react-masonry-css'
import { ImageCard } from '../ImageCard/ImageCard'
import { ImageCardSkeleton } from '../../../skeletons/ImageCardSkeleton/ImageCardSkeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import s from './Gallery.module.scss'

type Props = {
  images: string[]
  isLoading: boolean
}

export const Gallery = ({ images, isLoading }: Props) => {
  const breakpointColumnsObj = {
    default: 4, // 4 колонки по умолчанию
    1100: 3, // 3 колонки при ширине ≤1100px
    700: 2, // 2 колонки при ширине ≤700px
    500: 1, // 1 колонка на мобильных
  }

  return (
    <section>
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
    </section>
  )
}
