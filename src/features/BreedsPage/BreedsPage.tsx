import { GroupedBreeds, useGetBreedsListQuery } from '@/app/baseApi'
import s from './BreedsPage.module.scss'

export const BreedsPage = () => {
  const { data: breeds, isLoading, error } = useGetBreedsListQuery()

  const groupedBreeds =
    breeds?.reduce<GroupedBreeds>((groups, breed) => {
      const firstLetter = breed[0]
      ;(groups[firstLetter] ??= []).push(breed)
      return groups
    }, {} as GroupedBreeds) ?? {}

  if (isLoading) return <div>Загрузка...</div>
  if (error) return <div>Ошибка загрузки пород</div>

  return (
    <div className={s.list}>
      {Object.entries(groupedBreeds).map(([letter, breeds]) => (
        <div className={s.group} key={letter}>
          <h2>{letter}</h2>
          <ul>
            {breeds.map((breed) => (
              <li key={breed}>{breed}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
