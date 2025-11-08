import { BreedItem } from '@/common/types'
import { Link } from 'react-router'
import { normalizeBreedName } from '@/common/utils'
import s from './SubBreedList.module.scss'

type Props = {
  breed: BreedItem
}

export const SubBreedList = ({ breed }: Props) => {
  return (
    <div aria-label={`Sub-breeds of ${breed.name}`}>
      <details>
        <summary>
          <h3>{breed.name}</h3>
        </summary>
        <ul className={s.subList}>
          {breed.subBreeds.map((subBreed) => (
            <li key={subBreed}>
              <h4>
                <Link
                  to={`/breeds/${normalizeBreedName(breed.name)}/${normalizeBreedName(subBreed)}`}
                  aria-label={`View ${subBreed} images (sub-breed of ${breed.name})`}
                >
                  {subBreed}
                </Link>
              </h4>
            </li>
          ))}
        </ul>
      </details>
    </div>
  )
}
