import { useState, useEffect } from 'react'
import { Button, ThemeToggle } from '@/common/components'
import { Home, MoveLeft } from 'lucide-react'
import { PATH } from '@/common/routes'
import { useAppNavigate, useAppSelector } from '@/common/hooks'
import { selectModalStatus } from '@/features/modal/model/modalSlice'
import { useLocation } from 'react-router'
import s from './Header.module.scss'
import clsx from 'clsx'

export const Header = () => {
  const isModalOpen = useAppSelector(selectModalStatus)

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

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [hasScrolled])

  return (
    <header className={clsx(isModalOpen && s.headerPlaceholderHidden)}>
      <nav>
        <ul aria-label='Main controls' className={clsx(s.headerRight, hasScrolled && s.headerScrolled)}>
          <li>
            <ThemeToggle aria-label='Switch theme' />
          </li>
          <li>
            <Button aria-label='Home' title='Home' variant='icon'>
              <Home aria-hidden='true' onClick={goHome} />
            </Button>
          </li>
        </ul>
      </nav>
      {location.pathname !== PATH.HOME && location.pathname !== PATH.NOT_FOUND && (
        <nav>
          <ul aria-label='Navigation' className={clsx(s.headerLeft, hasScrolled && s.headerScrolled)}>
            <li>
              <Button aria-label='Return to previous page' title='Previous page' variant='icon' onClick={goBack}>
                <MoveLeft aria-hidden='true' />
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
