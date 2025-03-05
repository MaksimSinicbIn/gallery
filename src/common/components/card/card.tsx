import { Button } from '../button/button'
import s from './card.module.scss'
import cardImg from '@/assets/images/testImg.webp'

export const Card = () => {
  return (
    <div className={s.card}>
      <img className={s.img} src={cardImg} alt="cardImg" />
      <Button>Delete</Button>
    </div>
  )
}
