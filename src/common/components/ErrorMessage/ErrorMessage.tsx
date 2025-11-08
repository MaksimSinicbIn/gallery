import { ERROR_MESSAGE_IMAGE } from '@/common/constants/errorMessageImage'
import s from './ErrorMessage.module.scss'
import { Button } from '@/common/components'

type Props = {
  onRetry: () => void
}

export const ErrorMessage = ({ onRetry }: Props) => {
  return (
    <div className={s.container} role='alert' aria-live='assertive'>
      <div className={s.wrapper}>
        <img className={s.image} src={ERROR_MESSAGE_IMAGE} alt='Something wrong' />
        <div className={s.textBlock}>
          <p className={s.textMain} id='error-main'>
            Something went wrong
          </p>
          <p className={s.textSecondary} id='error-details'>
            Please refresh the page
          </p>
        </div>
        <Button variant='secondary' aria-describedby='error-details' onClick={onRetry}>
          Refresh
        </Button>
      </div>
    </div>
  )
}
