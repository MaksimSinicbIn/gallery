import { useAppDispatch, useAppSelector } from '@/common/hooks'
import { selectThemeMode, toggleTheme } from '@/app/appSlice'
import { Button } from '@/common/components/Button/Button'
import { Moon, Sun } from 'lucide-react'
import s from './ThemeToggle.module.scss'

export const ThemeToggle = () => {
  const dispatch = useAppDispatch()

  const currentTheme = useAppSelector(selectThemeMode)

  const changeThemeHandler = () => {
    dispatch(toggleTheme())
  }

  return (
    <div className={s['toggle-container']}>
      <Button
        title={`Enable ${currentTheme === 'dark' ? 'light' : 'dark'} theme`}
        variant='icon'
        onClick={changeThemeHandler}
      >
        {currentTheme === 'dark' ? <Moon /> : <Sun />}
      </Button>
    </div>
  )
}
