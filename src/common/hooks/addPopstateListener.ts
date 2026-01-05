import { useEffect } from 'react'
import { useAppDispatch } from '.'
import { closeModal } from '@/features/modal'

export const useAddPopStateListener = () => {
  const dispatch = useAppDispatch()

  useEffect(() => {
    const handlePopState = () => {
      dispatch(closeModal())
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])
}
