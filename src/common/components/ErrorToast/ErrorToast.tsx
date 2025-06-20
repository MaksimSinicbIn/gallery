import { selectAppError, setError } from '@/app/appSlice'
import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'

export const ErrorToast = () => {
  const errorMessage = useAppSelector(selectAppError)

  const dispatch = useAppDispatch()

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage)
      dispatch(setError(null))
    }
  }, [errorMessage])
  return <ToastContainer position='top-center' theme='dark' autoClose={5000} />
}
