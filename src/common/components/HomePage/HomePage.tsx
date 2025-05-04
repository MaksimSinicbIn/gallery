import { Button } from '@/common/components/Button/Button'
import workInProgress from '@/assets/images/workInProgress.webm'
import s from './HomePage.module.scss'

export const HomePage = () => {
  return (
    <div className={s.info}>
      <video autoPlay muted loop>
        <source src={workInProgress} type='video/webm' />
      </video>
      Welcome to Dogs Gallery! Here you can see images of the dog breeds you're interested in!
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
