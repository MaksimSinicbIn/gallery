import Skeleton from 'react-loading-skeleton'
import s from '../../galleries/components/ImageCard/ImageCard.module.scss'

export const ImageCardSkeleton = () => {
  const getRandomHeight = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  return (
    <div className={s.card}>
      <Skeleton
        width={'302.5px'}
        height={`${getRandomHeight(170, 571)}px`}
        baseColor={'var(--color-skeleton-base)'}
        highlightColor={'var(--color-skeleton-highlight)'}
        borderRadius={`0.5rem`}
      />
    </div>
  )
}
