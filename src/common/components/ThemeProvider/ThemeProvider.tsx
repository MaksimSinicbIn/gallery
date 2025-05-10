import { selectThemeMode } from '@/app/appSlice'
import { useAppSelector } from '@/common/hooks'
import { useEffect } from 'react'

type Props = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: Props) => {
  const currentTheme = useAppSelector(selectThemeMode)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme)
  }, [currentTheme])

  return <div>{children}</div>
}
