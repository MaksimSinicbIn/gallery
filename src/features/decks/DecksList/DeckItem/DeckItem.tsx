import { Button } from '@/common/components/Button/Button'
import s from './DeckItem.module.scss'
import cardImg from '@/assets/images/proj.webp'

export const DeckItem = () => {
  return (
    <div className={s.card}>
      <img className={s.img} src={cardImg} alt="cardImg" />
      <div className={s.settings}>
        <h2 className={s.title}>Hello</h2>
        <p className={s.text}>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
        <div className={s.buttonSpace}>
          <Button variant="secondary">Delete</Button>
          <Button variant="secondary">Update</Button>
        </div>
      </div>
    </div>
  )
}
