import wrongDoor from '@/assets/images/wrongDoor.webp'
import s from './ErrorPage.module.scss'
import { useAppNavigate } from '@/common/hooks'
import { Button } from '../Button/Button'

export const ErrorPage = () => {
  const { goHome } = useAppNavigate()

  return (
    <div aria-labelledby='error-title error-description' className={s.container}>
      <div className={s.wrapper}>
        <div className={s.textBlock}>
          <h2 id='section-error' className={s.title}>
            Oops!
          </h2>
          <p id='section-error' className={s.text}>
            You got the wrong door, buddy!
          </p>
        </div>
        <img className={s.image} src={wrongDoor} alt='drujok_pirojok' />
        <Button variant='secondary' onClick={goHome}>
          Return to Home Page
        </Button>
      </div>
    </div>
  )
}
