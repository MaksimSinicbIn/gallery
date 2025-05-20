import Masonry from 'react-masonry-css'
import s from './Gallery.module.scss'
import { ImageCard } from '../ImageCard/ImageCard'

type Props = {
  images: string[]
}

export const Gallery = ({ images }: Props) => {
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
        className={s['my-masonry-grid']} // Класс для контейнера
        columnClassName={s['my-masonry-grid_column']} // Класс для колонок
      >
        {images?.map((imageUrl) => <ImageCard key={imageUrl} imageUrl={imageUrl} />)}
      </Masonry>
    </section>
  )
}
