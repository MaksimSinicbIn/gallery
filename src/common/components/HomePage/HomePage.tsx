import { Button } from '@/common/components/Button/Button'
import s from './HomePage.module.scss'
import { Link } from 'react-router'
import { PATH } from '@/common/routes/AppRouter'

export const HomePage = () => {
  return (
    <section className={s.container} aria-labelledby='section-title' aria-describedby='section-description'>
      <div className={s.wrapper}>
        <div className={s.textBlockPrimary} tabIndex={0}>
          <h1 className={s.title} id='section-title'>
            Dogs Gallery
          </h1>
          <div className={`${s.textBlockPrimary} ${s.text}`} id='section-description'>
            <p>Find your breed</p>
            <p>Browse curated collection</p>
            <p>Discover exceptional dogs worldwide</p>
          </div>
        </div>
        <div className={`${s.textBlockSecondary} ${s.text}`} id='section-description'>
          <p>"For us, they're but a page in life's story... For them, we are the entire tale."</p>
        </div>
      </div>
      <div className={s.buttonSpace}>
        <Link to={PATH.RANDOM}>
          <Button variant='outlined' title='20 random images'>
            View random dogs
          </Button>
        </Link>
        <Link to={PATH.BREEDS}>
          <Button variant='outlined' title='Chose breed'>
            Choose a breed
          </Button>
        </Link>
      </div>
    </section>
  )
}
