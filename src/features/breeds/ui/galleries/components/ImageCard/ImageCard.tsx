import { useState } from 'react'
import { ImageFullView } from '../ImageFullView/ImageFullView'
import s from './ImageCard.module.scss'

type Props = {
  imageUrl: string
}

export const ImageCard = ({ imageUrl }: Props) => {
  const [isFullSize, setIsFullSize] = useState<boolean>(false)

  const changeSizeHandler = () => {
    setIsFullSize(true)
  }

  return (
    <>
      <div className={s.card} onClick={changeSizeHandler}>
        <img className={s.cardImage} src={imageUrl} alt='Dog image' />
      </div>
      {isFullSize && <ImageFullView imageUrl={imageUrl} onClose={() => setIsFullSize(false)} />}
    </>
  )
}
