import { ThemeToggle } from '@/common/components/Toggle/ThemeToggle'
import s from './Header.module.scss'
import { Home, MoveLeft } from 'lucide-react'
import { useAppNavigate } from '@/common/hooks'
import { Button } from '../Button/Button'
import { useLocation } from 'react-router'

export const Header = () => {
  const { goHome, goBack } = useAppNavigate()

  const location = useLocation()

  return (
    <header className={s['header-side']}>
      <ul className={s.headerRight}>
        <li>
          <ThemeToggle />
        </li>
        <li>
          <Button title='Home' variant='icon'>
            <Home onClick={goHome} />
          </Button>
        </li>
      </ul>
      {location.pathname !== '/home' ? (
        <ul className={s.headerLeft}>
          <li>
            <Button title='Previous page' variant='icon' onClick={goBack}>
              <MoveLeft />
            </Button>
          </li>
        </ul>
      ) : null}
    </header>
  )
}
