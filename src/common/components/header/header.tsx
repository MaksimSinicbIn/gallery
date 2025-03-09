import { Button } from '../Button/Button'
import s from './header.module.scss'

export const Header = () => {
  return (
    <div className={s.header}>
      <Button variant="secondary">Menu</Button>
    </div>
  )
}
