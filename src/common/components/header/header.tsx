import { ThemeToggle } from '@/common/components/Toggle/ThemeToggle'
import s from './Header.module.scss'

export const Header = () => {
  return (
    <div className={s.header}>
      <ThemeToggle />
    </div>
  )
}
