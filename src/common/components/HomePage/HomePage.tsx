import { Button } from '@/common/components/Button/Button'
import homePageImage from '@/assets/images/homePageImage.webp'
import s from './HomePage.module.scss'
import { Link } from 'react-router'
import { PATH } from '@/app/App'

export const HomePage = () => {
  return (
    <section className={s.info} aria-labelledby='section-title section-description'>
      <img className={s.image} src={homePageImage} alt='Dog image' />
      <h1 id='section-title'>Dogs Gallery</h1>
      <p id='section-description'>
        Welcome to Dogs Gallery! Here you can see images of the dog breeds you're interested in!
      </p>
      <div className={s.buttonSpace}>
        <Button variant='outlined' title='10 random images'>
          <Link to={PATH.RANDOM}>View 10 random dog images</Link>
        </Button>
        <Button variant='outlined' title='Chose breed'>
          <Link to={PATH.BREEDS}>Choose a breed you're interested in</Link>
        </Button>
      </div>
    </section>
  )
}
