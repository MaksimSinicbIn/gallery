import { useEffect } from 'react'
import s from './ImageFullView.module.scss'
import { Button } from '@/common/components/Button/Button'
import { X } from 'lucide-react'
import { createPortal } from 'react-dom'

type Props = {
  imageUrl: string
  onClose: () => void
}

export const ImageFullView = ({ imageUrl, onClose }: Props) => {
  const portal = document.getElementById('portal')

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`)
    document.body.classList.add('scrollbarLock')

    const closeModalOnKeyDownHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', closeModalOnKeyDownHandler)

    return () => {
      document.body.classList.remove('scrollbarLock')
      document.body.style.removeProperty('--scrollbar-width')
      document.removeEventListener('keydown', closeModalOnKeyDownHandler)
    }
  }, [onClose])

  if (!portal) return null

  return createPortal(
    <div className={s.fullViewOverlay} onClick={onClose}>
      <Button className={s.overlayButton} variant='icon'>
        <X />
      </Button>
      <img className={s.fullSizeImage} src={imageUrl} alt='Full size image' onClick={(e) => e.stopPropagation()} />
    </div>,
    portal
  )
}
