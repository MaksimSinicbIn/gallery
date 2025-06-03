import { BreedItem } from '@/app/baseApi'
import s from './SubBreedList.module.scss'
import { Link } from 'react-router'
import { normalizeBreedName } from '@/features/breeds/utils'

type Props = {
  breed: BreedItem
}

export const SubBreedList = ({ breed }: Props) => {
  return (
    <section>
      <details>
        <summary>
          <h3>{breed.name}</h3>
        </summary>
        <ul className={s.subList}>
          {breed.subBreeds.map((subBreed) => (
            <li key={subBreed}>
              <h4>
                <Link to={`/breeds/${normalizeBreedName(breed.name)}/${normalizeBreedName(subBreed)}`}>{subBreed}</Link>
              </h4>
            </li>
          ))}
        </ul>
      </details>
    </section>
  )
}
