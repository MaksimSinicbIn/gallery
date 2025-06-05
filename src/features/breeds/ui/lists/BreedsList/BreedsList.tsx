import { GroupedBreeds, useGetBreedsListQuery } from '@/app/baseApi'
import { Link } from 'react-router'
import { SubBreedList } from '../SubBreedList/SubBreedList'
import { normalizeBreedName } from '@/features/breeds/utils'
import s from './BreedsList.module.scss'
import { LinearLoader } from '@/common/components/Loader/LinearLoader'

export const BreedsList = () => {
  const { data: breeds, isLoading, error } = useGetBreedsListQuery()

  if (isLoading) return <LinearLoader />
  if (error) return <div>Ошибка загрузки пород</div>

  const groupedBreeds = (breeds || []).reduce<GroupedBreeds>((groups, breed) => {
    const firstLetter = breed.name[0]
    if (!groups[firstLetter]) {
      groups[firstLetter] = []
    }
    groups[firstLetter].push(breed)
    return groups
  }, {})

  return (
    <section className={s.list}>
      {Object.entries(groupedBreeds).map(([letter, breeds]) => (
        <div className={s.group} key={letter}>
          <h2 className={s.groupTitle}>{letter}</h2>
          <ul className={s.groupList}>
            {breeds.map((breed) => (
              <li className={s.groupItem} key={breed.name}>
                {breed.subBreeds.length === 0 ? (
                  <h3>
                    <Link to={`/breeds/${normalizeBreedName(breed.name)}`}>{breed.name}</Link>
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
