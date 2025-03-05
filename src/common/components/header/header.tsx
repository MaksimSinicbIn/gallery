import { Button } from '../button/button'
import s from './header.module.scss'

export const Header = () => {
  return (
    <div className={s.header}>
      <Button className={s.button}>Menu</Button>
    </div>
  )
}
