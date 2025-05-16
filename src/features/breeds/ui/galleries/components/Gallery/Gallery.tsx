import { ImageCard } from '../ImageCard/ImageCard'
import s from './Gallery.module.scss'

type Props = {
  images: string[]
}

export const Gallery = ({ images }: Props) => {
  return <div className={s.card}>{images?.map((imageUrl) => <ImageCard key={imageUrl} imageUrl={imageUrl} />)}</div>
}
