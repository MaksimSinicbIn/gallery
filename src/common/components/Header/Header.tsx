import { useState, useEffect } from 'react'
import { ThemeToggle } from '@/common/components/Toggle/ThemeToggle'
import { Home, MoveLeft } from 'lucide-react'
import { PATH } from '@/common/routes/AppRouter'
import { useAppNavigate } from '@/common/hooks'
import { Button } from '../Button/Button'
import { useLocation } from 'react-router'
import s from './Header.module.scss'
import clsx from 'clsx'

export const Header = () => {
  const { goHome, goBack } = useAppNavigate()

  const location = useLocation()

  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      if (isScrolled !== hasScrolled) {
        setHasScrolled(isScrolled)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasScrolled])

  return (
    <header className={s.header}>
      <nav aria-label='Control'>
        <ul className={clsx(s.headerRight, hasScrolled && s.headerScrolled)}>
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
      {location.pathname !== PATH.HOME && location.pathname !== PATH.NOT_FOUND && (
        <nav aria-label='Back'>
          <ul className={clsx(s.headerLeft, hasScrolled && s.headerScrolled)}>
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
