'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  href?: string
  target?: string
  rel?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  icon?: ReactNode
  iconRight?: ReactNode
}

const sizeMap = {
  sm: 'btn-sm',
  md: 'btn-md',
  lg: 'btn-lg',
}

const variantMap = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
  outline: 'btn-outline-primary',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  target,
  rel,
  disabled,
  type = 'button',
  icon,
  iconRight,
}: ButtonProps) {
  const classes = [
    'btn',
    sizeMap[size],
    variantMap[variant],
    disabled ? 'opacity-50 pointer-events-none' : '',
    className,
  ].filter(Boolean).join(' ')

  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
      {iconRight && <span className="shrink-0">{iconRight}</span>}
    </>
  )

  if (href) {
    const isExternal = href.startsWith('http')
    if (isExternal) {
      return (
        <a href={href} target={target} rel={rel || 'noopener noreferrer'} className={classes}>
          {content}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {content}
    </button>
  )
}
