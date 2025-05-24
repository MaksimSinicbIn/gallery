import { useEffect } from 'react'
import s from './ImageFullView.module.scss'
import { Button } from '@/common/components/Button/Button'
import { X } from 'lucide-react'

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
      <Button className={s.overlayButton} variant='icon'>
        <X />
      </Button>
      <img className={s.fullSizeImage} src={imageUrl} alt='Full size image' onClick={(e) => e.stopPropagation()} />
    </div>
  )
}
