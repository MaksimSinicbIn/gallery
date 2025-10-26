import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Button } from '@/common/components/Button/Button'
import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { closeModal, selectModalData } from '@/features/modal/modalSlice'
import { X } from 'lucide-react'
import s from './ImageFullView.module.scss'

export const ImageFullView = () => {
  const portal = document.getElementById('portal')

  const { isOpen, imageUrl } = useAppSelector(selectModalData)

  const dispatch = useAppDispatch()

  const handleClose = () => {
    dispatch(closeModal())
  }

  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    document.body.style.setProperty('--scrollbar-width', `${scrollbarWidth}px`)
    document.body.classList.add('scrollbarLock')

    const closeModalOnKeyDownHandler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }
    document.addEventListener('keydown', closeModalOnKeyDownHandler)

    return () => {
      document.body.classList.remove('scrollbarLock')
      document.body.style.removeProperty('--scrollbar-width')
      document.removeEventListener('keydown', closeModalOnKeyDownHandler)
    }
  }, [])

  if (!portal) return null
  if (!isOpen) return null
  if (!imageUrl) return null

  return createPortal(
    <div className={s.fullViewOverlay} onClick={handleClose}>
      <Button className={s.overlayButton} variant='icon'>
        <X />
      </Button>
      <img className={s.fullSizeImage} src={imageUrl} alt='Full size image' onClick={(e) => e.stopPropagation()} />
    </div>,
    portal
  )
}
