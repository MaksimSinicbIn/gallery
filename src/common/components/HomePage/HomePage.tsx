import { Button } from '@/common/components/Button/Button'
import s from './HomePage.module.scss'
import { Link } from 'react-router'
import { PATH } from '@/common/routes/AppRouter'

export const HomePage = () => {
  return (
    <section className={s.container} aria-labelledby='section-title section-description'>
      <div className={s.wrapper}>
        <h1 className={s.title} id='section-title'>
          Dogs Gallery
        </h1>
        <div className={`${s.textBlock} ${s.text}`} id='section-description'>
          <span>Welcome to Dogs Gallery!</span>
          <span>Here you can see images of the dog breeds you're interested in!</span>
        </div>
        <div className={s.buttonSpace}>
          <Link to={PATH.RANDOM}>
            <Button variant='outlined' title='10 random images'>
              View random dog
            </Button>
          </Link>
          <Link to={PATH.BREEDS}>
            <Button variant='outlined' title='Chose breed'>
              Choose a breed
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
