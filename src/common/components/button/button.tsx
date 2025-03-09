import { ComponentPropsWithoutRef, ElementType } from 'react'
import s from './button.module.scss'
import clsx from 'clsx'

type ButtonVarriant = 'primary' | 'secondary' | 'outlined'

type Props<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  variant?: ButtonVarriant
  className?: string
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: Props<T>) => {
  const { as, variant = 'primary', className, fullWidth, ...restProps } = props

  const Component = as ?? 'button'

  return <Component className={clsx(s[variant], s.button, fullWidth && s.fullWidth, className)} {...restProps} />
}
