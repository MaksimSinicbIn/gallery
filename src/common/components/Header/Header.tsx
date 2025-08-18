import { useState, useEffect, useRef } from 'react'
import { ThemeToggle } from '@/common/components/Toggle/ThemeToggle'
import { Home, MoveLeft } from 'lucide-react'
import { PATH } from '@/common/routes/AppRouter'
import { useAppNavigate } from '@/common/hooks'
import { Button } from '../Button/Button'
import { useLocation } from 'react-router'
import s from './Header.module.scss'
import clsx from 'clsx'

type ModalEventDetail = {
  isFullSize: boolean
}

type ModalToggleEvent = CustomEvent<ModalEventDetail>

export const Header = () => {
  const { goHome, goBack } = useAppNavigate()

  const location = useLocation()

  const [hasScrolled, setHasScrolled] = useState(false)

  const headerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0
      if (isScrolled !== hasScrolled) {
        setHasScrolled(isScrolled)
      }
    }

    const handleModalChange = (e: ModalToggleEvent) => {
      if (headerRef.current) {
        headerRef.current?.classList.toggle(s.headerPlaceholderHidden, e.detail.isFullSize)
      }
    }

    window.addEventListener('modalStateChange', handleModalChange as EventListener)
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('modalStateChange', handleModalChange as EventListener)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [hasScrolled])

  return (
    <header ref={headerRef}>
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
