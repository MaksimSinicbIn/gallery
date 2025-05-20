import { useEffect } from 'react'
import s from './ImageFullView.module.scss'

type Props = {
  imageUrl: string
  onClose: () => void
}

export const ImageFullView = ({ imageUrl, onClose }: Props) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'

    const closeModalOnKeyDownHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', closeModalOnKeyDownHandler)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', closeModalOnKeyDownHandler)
    }
  }, [onClose])

  return (
    <div className={s.fullViewOverlay} onClick={onClose}>
      <img className={s.fullSizeImage} src={imageUrl} alt='Full size image' onClick={(e) => e.stopPropagation()} />
    </div>
  )
}
