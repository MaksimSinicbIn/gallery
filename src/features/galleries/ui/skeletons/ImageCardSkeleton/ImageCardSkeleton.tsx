import Skeleton from 'react-loading-skeleton'
import s from '../../components/ImageCard/ImageCard.module.scss'
import '@/styles/base/_skeleton.scss'

export const ImageCardSkeleton = () => {
  const getRandomHeight = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  return (
    <div className={s.card}>
      <Skeleton
        width={'100%'}
        height={`${getRandomHeight(170, 571)}px`}
        baseColor={'var(--color-skeleton-base)'}
        highlightColor={'var(--color-skeleton-highlight)'}
        borderRadius={`0.5rem`}
        className='skeletonSafariFix'
      />
    </div>
  )
}
