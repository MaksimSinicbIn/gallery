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
    <header className={s.headerSide}>
      <nav aria-label='Control'>
        <ul className={s.headerRight}>
          <li>
            <ThemeToggle />
          </li>
          <li>
            <Button aria-label='Home' title='Home' variant='icon'>
              <Home onClick={goHome} />
            </Button>
          </li>
        </ul>
      </nav>
      {location.pathname !== '/home' && (
        <nav aria-label='Back'>
          <ul className={s.headerLeft}>
            <li>
              <Button aria-label='Back' title='Previous page' variant='icon' onClick={goBack}>
                <MoveLeft />
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
