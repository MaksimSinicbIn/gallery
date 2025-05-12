import { ThemeToggle } from '@/common/components/Toggle/ThemeToggle'
import s from './Header.module.scss'

export const Header = () => {
  return (
    <header className={s.header}>
      <ThemeToggle />
    </header>
  )
}
