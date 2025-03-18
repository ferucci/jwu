import { ComponentPropsWithoutRef, ElementRef, ElementType, ForwardedRef, forwardRef } from 'react'

import { ButtonVariant } from '@/common'

import s from './button.module.scss'

type Props<T extends ElementType> = {
  as?: T
  isIcon?: boolean
  variant?: keyof typeof ButtonVariant
}

export type ButtonPropsType<T extends ElementType> = Props<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof Props<T>>

const ButtonPolymorph = <T extends ElementType = 'button'>(
  props: ButtonPropsType<T>,
  ref: ElementRef<T>
) => {
  const { as: Tag = 'button', className, isIcon, variant = ButtonVariant.primary, ...rest } = props

  const buttonClassName = `${s.button} ${isIcon && s.isIcon} ${s[String(variant)]} ${className}`

  return (
    // @ts-expect-error TS2322
    <Tag className={buttonClassName} ref={ref} {...rest} />
  )
}

export const Button = forwardRef(ButtonPolymorph) as <T extends ElementType = 'button'>(
  props: Props<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof Props<T>> & {
      ref?: ForwardedRef<ElementRef<T>>
    }
) => ReturnType<typeof ButtonPolymorph>
