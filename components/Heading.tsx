'use client'

import { ReactNode } from 'react'

interface HeadingProps {
  level: 1 | 2 | 3 | 4
  children: ReactNode
  className?: string
}

const typeMap: Record<number, string> = {
  1: 'type-h1',
  2: 'type-h2',
  3: 'type-h3',
  4: 'text-xl font-semibold tracking-tight text-[var(--color-text-primary)]',
}

export default function Heading({ level, children, className = '' }: HeadingProps) {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4'
  return (
    <Tag className={[typeMap[level] ?? typeMap[3], className].filter(Boolean).join(' ')}>
      {children}
    </Tag>
  )
}
