'use client'

import { ReactNode } from 'react'

interface ParagraphProps {
  children: ReactNode
  size?: 'sm' | 'base' | 'lg'
  muted?: boolean
  className?: string
}

const sizeMap = {
  sm:   'type-small',
  base: 'type-body',
  lg:   'type-body-lg',
}

export default function Paragraph({
  children,
  size = 'base',
  muted = false,
  className = '',
}: ParagraphProps) {
  return (
    <p
      className={[
        sizeMap[size],
        muted ? 'text-[var(--color-text-muted)]' : '',
        className,
      ].filter(Boolean).join(' ')}
    >
      {children}
    </p>
  )
}
