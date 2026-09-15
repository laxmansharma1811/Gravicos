'use client'

import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
  as?: 'div' | 'article' | 'li'
}

export default function Card({
  children,
  className = '',
  hover = false,
  onClick,
  as: Tag = 'div',
}: CardProps) {
  return (
    <Tag
      className={[
        'card',
        hover ? 'cursor-pointer' : '',
        className,
      ].filter(Boolean).join(' ')}
      onClick={onClick}
    >
      {children}
    </Tag>
  )
}
