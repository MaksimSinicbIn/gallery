import { Button } from '@/common/components/Button/Button'
import workInProgress from '@/assets/images/workInProgress.webm'
import s from './HomePage.module.scss'
import { Link } from 'react-router'
import { PATH } from '@/app/App'

export const HomePage = () => {
  return (
    <div className={s.info}>
      <video autoPlay muted loop>
        <source src={workInProgress} type='video/webm' />
      </video>
      Welcome to Dogs Gallery! Here you can see images of the dog breeds you're interested in!
      <div className={s.buttonSpace}>
        <Button variant='primary' title='10 random images'>
          <Link to={PATH.RANDOM}>View 10 random dog images</Link>
        </Button>
        <Button variant='primary' title='Chose breed'>
          <Link to={PATH.BREEDS}>Choose a breed you're interested in</Link>
        </Button>
      </div>
    </div>
  )
}
