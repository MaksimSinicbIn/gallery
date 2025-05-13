import { GroupedBreeds, useGetBreedsListQuery } from '@/app/baseApi'
import { Link } from 'react-router'
import s from './BreedsList.module.scss'

export const BreedsList = () => {
  const { data: breeds, isLoading, error } = useGetBreedsListQuery()

  if (isLoading) return <div>Загрузка...</div>
  if (error) return <div>Ошибка загрузки пород</div>

  const groupedBreeds = (breeds || []).reduce<GroupedBreeds>((groups, breed) => {
    const firstLetter = breed[0]
    if (!groups[firstLetter]) {
      groups[firstLetter] = []
    }
    groups[firstLetter].push(breed)
    return groups
  }, {})

  const normalizeBreedName = (breed: string) => {
    return breed
      .split('')
      .map((el) => el.toLowerCase())
      .filter((el) => el !== ' ' && el !== '.')
      .join('')
  }

  return (
    <div className={s.list}>
      {Object.entries(groupedBreeds).map(([letter, breeds]) => (
        <div className={s.group} key={letter}>
          <h2>{letter}</h2>
          <ul>
            {breeds.map((breed) => (
              <li key={breed}>
                <Link to={`/breeds/${normalizeBreedName(breed)}`}>{breed}</Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
