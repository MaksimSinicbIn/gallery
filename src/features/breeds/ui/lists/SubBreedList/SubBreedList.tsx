import { BreedItem } from '@/app/baseApi'
import s from './SubBreedList.module.scss'
import { Link } from 'react-router'
import { normalizeBreedName } from '@/features/breeds/utils'

type Props = {
  breed: BreedItem
}

export const SubBreedList = ({ breed }: Props) => {
  return (
    <div className={s.dropdown}>
      <details>
        <summary>{breed.name}</summary>
        <ul className={s.subBreedsList}>
          {breed.subBreeds.map((subBreed) => (
            <li key={subBreed}>
              <Link to={`/breeds/${normalizeBreedName(breed.name)}/${normalizeBreedName(subBreed)}`}>{subBreed}</Link>
            </li>
          ))}
        </ul>
      </details>
    </div>
  )
}
