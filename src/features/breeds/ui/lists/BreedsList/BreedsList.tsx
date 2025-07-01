import { GroupedBreeds, useGetBreedsListQuery } from '@/app/baseApi'
import { Link } from 'react-router'
import { SubBreedList } from '../SubBreedList/SubBreedList'
import { normalizeBreedName } from '@/features/breeds/utils'
import { BreedsListSkeleton } from '../../skeletons/BreedsListSkeleton/BreedsListSkeleton'
import { ErrorMessage } from '@/common/components/ErrorMessage/ErrorMessage'
import { useApiError } from '@/common/hooks'
import 'react-loading-skeleton/dist/skeleton.css'
import s from './BreedsList.module.scss'

export const BreedsList = () => {
  const { data: breeds, refetch, error, isError, isLoading } = useGetBreedsListQuery()

  const apiError = useApiError(error)

  if (isError) {
    if (apiError?.status === 'FETCH_ERROR' || apiError?.status === 'TIMEOUT_ERROR') {
      return <ErrorMessage onRetry={refetch} />
    }
  }

  const groupedBreeds = (breeds || []).reduce<GroupedBreeds>((groups, breed) => {
    const firstLetter = breed.name[0]
    if (!groups[firstLetter]) {
      groups[firstLetter] = []
    }
    groups[firstLetter].push(breed)
    return groups
  }, {})

  return (
    <section className={s.list} aria-label='Breeds list'>
      {isLoading && <BreedsListSkeleton />}
      {Object.entries(groupedBreeds).map(([letter, breeds]) => (
        <div className={s.group} key={letter} aria-labelledby={`group-${letter}`}>
          <h2 className={s.groupTitle} id={`group-${letter}`}>
            {letter}
          </h2>
          <ul className={s.groupList} aria-label={`Breeds starting with ${letter}`}>
            {breeds.map((breed) => (
              <li className={s.groupItem} key={breed.name}>
                {breed.subBreeds.length === 0 ? (
                  <h3>
                    <Link to={`/breeds/${normalizeBreedName(breed.name)}`} aria-label={`View ${breed.name} images `}>
                      {breed.name}
                    </Link>
                  </h3>
                ) : (
                  <SubBreedList breed={breed} />
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
