import { ComponentPropsWithoutRef, ElementType } from 'react'
import s from './button.module.scss'

type Props<T extends ElementType = 'button'> = {
  as?: T
} & ComponentPropsWithoutRef<T>

export const Button = (props: Props) => {
  const { children } = props
  return <button className={s.primary}>{children}</button>
}
