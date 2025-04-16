import { useState } from 'react'
import { Button } from '../Button/Button'
import s from './header.module.scss'

export const Header = () => {
  const [open, setOpen] = useState(false)

  const openMenu = () => setOpen(!open)
  console.log(open)

  return (
    <div className={s.header}>
      <Button variant='secondary' onClick={openMenu}>
        Menu
      </Button>
    </div>
  )
}
