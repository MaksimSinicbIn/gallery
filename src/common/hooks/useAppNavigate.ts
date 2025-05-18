import { useNavigate } from 'react-router'

export const useAppNavigate = () => {
  const navigate = useNavigate()

  const goBack = () => navigate(-1)
  const goHome = () => navigate('/')

  return { goBack, goHome }
}
