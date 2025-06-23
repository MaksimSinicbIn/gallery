import { ERROR_MESSAGE_IMAGE } from '@/common/constants/errorMessageImage'
import s from './ErrorMessage.module.scss'
import { Button } from '../Button/Button'

type Props = {
  onRetry: () => void
}

export const ErrorMessage = ({ onRetry }: Props) => {
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <img className={s.image} src={ERROR_MESSAGE_IMAGE} alt='Something wrong' />
        <div className={s.textBlock}>
          <p className={s.textMain}>Something went wrong</p>
          <p className={s.textSecondary}>Please refresh the page</p>
        </div>
        <Button variant='secondary' onClick={onRetry}>
          Refresh
        </Button>
      </div>
    </div>
  )
}
