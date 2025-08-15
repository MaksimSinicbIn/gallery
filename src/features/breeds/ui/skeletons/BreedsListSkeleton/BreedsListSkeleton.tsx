import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import s from '../../lists/BreedsList/BreedsList.module.scss'
import '@/styles/base/_skeleton.scss'

export const BreedsListSkeleton = () => {
  const mockSkeletonData = {
    A: 6,
    B: 12,
    C: 11,
    D: 8,
    E: 3,
    F: 2,
    G: 4,
    H: 3,
    K: 5,
    L: 4,
    M: 9,
    N: 1,
    O: 2,
    P: 12,
    R: 5,
    S: 14,
    T: 2,
    V: 1,
    W: 4,
  }

  return (
    <SkeletonTheme baseColor={'var(--color-skeleton-base)'} highlightColor={'var(--color-skeleton-highlight)'}>
      {Object.entries(mockSkeletonData).map(([letter, count]) => (
        <div className={s.group} key={`skeleton-${letter}`}>
          <h2 className={s.groupTitle}>
            <Skeleton height={28} width={28} borderRadius={'2rem'} className='skeletonSafariFix' />
          </h2>
          <ul className={s.groupList}>
            {Array(count)
              .fill(null)
              .map((_, index) => (
                <li className={s.groupItem} key={`skeleton-${index}`}>
                  <h3>
                    <Skeleton width={150} borderRadius={'0.5rem'} className='skeletonSafariFix' />
                  </h3>
                </li>
              ))}
          </ul>
        </div>
      ))}
    </SkeletonTheme>
  )
}
