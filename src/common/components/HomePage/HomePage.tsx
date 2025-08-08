import homePageImage1Avif from '@/assets/images/homePageImage1.avif'
import homePageImage1Webp from '@/assets/images/homePageImage1.webp'
import homePageImage2Avif from '@/assets/images/homePageImage2.avif'
import homePageImage2Webp from '@/assets/images/homePageImage2.webp'
import homePageImage3Avif from '@/assets/images/homePageImage3.avif'
import homePageImage3Webp from '@/assets/images/homePageImage3.webp'
import { PATH } from '@/common/routes/AppRouter'
import { Link } from 'react-router'
import s from './HomePage.module.scss'
import clsx from 'clsx'

export const HomePage = () => {
  return (
    <section className={s.gridContainer} aria-labelledby='section-title' aria-describedby='section-description'>
      <picture>
        <source srcSet={homePageImage1Avif} type='image/avif' />
        <img className={s.image} src={homePageImage1Webp} alt='Dogs main image' />
      </picture>
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
      <Link to={PATH.RANDOM} className={s.imageLink} aria-label='View random dogs images'>
        <div className={s.imageWrapper}>
          <picture>
            <source srcSet={homePageImage2Avif} type='image/avif' />
            <img className={s.image} src={homePageImage2Webp} alt='Dogs image for random' />
          </picture>
          <span className={s.imageOverlay}>Random Breed</span>
        </div>
      </Link>
      <Link to={PATH.BREEDS} className={s.imageLink} aria-label='Choose a dog breed'>
        <div className={s.imageWrapper}>
          <picture>
            <source srcSet={homePageImage3Avif} type='image/avif' />
            <img className={s.image} src={homePageImage3Webp} alt='Dogs image for chose breed' />
          </picture>
          <span className={s.imageOverlay}>Chose Breed</span>
        </div>
      </Link>
    </section>
  )
}
