import homePageImage1 from '@/assets/images/homePageImage1.avif'
import homePageImage2 from '@/assets/images/homePageImage2.avif'
import homePageImage3 from '@/assets/images/homePageImage3.avif'
import { PATH } from '@/common/routes/AppRouter'
import { Link } from 'react-router'
import s from './HomePage.module.scss'
import clsx from 'clsx'

export const HomePage = () => {
  return (
    <section className={s.gridContainer} aria-labelledby='section-title' aria-describedby='section-description'>
      <img className={s.image} src={homePageImage1} alt='Dogs main image' />
      <div className={s.textBlock} tabIndex={0}>
        <h1 className={s.title} id='section-title'>
          Dogs Gallery
        </h1>
        <div className={clsx(s.descriptionBlock, s.text)} id='section-description'>
          <p>Find your perfect breed companion</p>
          <p>Browse curated collection</p>
          <p>Discover exceptional dogs from around the world</p>
        </div>
      </div>
      <Link to={PATH.RANDOM} className={s.imageLink}>
        <a className={s.imageWrapper}>
          <img className={s.image} src={homePageImage2} alt='Dogs image for random' />
          <span className={s.imageOverlay}>Random Breed</span>
        </a>
      </Link>
      <Link to={PATH.BREEDS} className={s.imageLink}>
        <a className={s.imageWrapper}>
          <img className={s.image} src={homePageImage3} alt='Dogs image for chose breed' />
          <span className={s.imageOverlay}>Chose Breed</span>
        </a>
      </Link>
    </section>
  )
}
