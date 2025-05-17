import s from './ImageCard.module.scss'

type Props = {
  imageUrl: string
}

export const ImageCard = ({ imageUrl }: Props) => {
  return (
    <div className={s.card}>
      <img className={s['card-image']} src={imageUrl} alt='Random dog' />
    </div>
  )
}
