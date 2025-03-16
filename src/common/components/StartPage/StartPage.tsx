import { Button } from '@/common/components/Button/Button'
import workInProgress from '@/assets/images/workInProgress.webm'
import s from './StartPage.module.scss'

export const StartPage = () => {
  return (
    <div className={s.info}>
      <video autoPlay muted loop>
        <source src={workInProgress} type='video/webm' />
      </video>
      Welcome to Gallery! Here you can upload your images for yourself and your friends!
      <div className={s.buttonSpace}>
        <Button variant='primary' title='Sing In'>
          Sing In
        </Button>
        <Button variant='primary' title='Sing Up'>
          Sing Up
        </Button>
      </div>
    </div>
  )
}
