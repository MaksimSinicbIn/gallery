import { GroupedBreeds, useGetBreedsListQuery } from '@/app/baseApi'
import s from './BreedsList.module.scss'
import { useState } from 'react'
import { BreedImageGallery } from '../BreedImageGallery/BreedImageGallery'

export const BreedsList = () => {
  const [selectedBreed, setSelectedBreed] = useState<string | null>(null)
  const { data: breeds, isLoading, error } = useGetBreedsListQuery()

  const groupedBreeds =
    breeds?.reduce<GroupedBreeds>((groups, breed) => {
      const firstLetter = breed[0]
      ;(groups[firstLetter] ??= []).push(breed)
      return groups
    }, {} as GroupedBreeds) ?? {}

  const normalizeBreedName = (breed: string) => {
    return breed
      .split('')
      .map((el) => el.toLowerCase())
      .filter((el) => el.toLowerCase() && el !== ' ')
      .join('')
  }

  if (isLoading) return <div>Загрузка...</div>
  if (error) return <div>Ошибка загрузки пород</div>

  return (
    <div className={s.list}>
      {selectedBreed ? (
        <BreedImageGallery selectedBreed={selectedBreed} onBack={() => setSelectedBreed(null)} />
      ) : (
        Object.entries(groupedBreeds).map(([letter, breeds]) => (
          <div className={s.group} key={letter}>
            <h2>{letter}</h2>
            <ul>
              {breeds.map((breed) => (
                <li onClick={() => setSelectedBreed(normalizeBreedName(breed))} key={breed}>
                  {breed}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  )
}
