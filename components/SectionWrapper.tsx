'use client'

import { ReactNode } from 'react'

interface SectionWrapperProps {
  children: ReactNode
  className?: string
  id?: string
  size?: 'sm' | 'md' | 'lg'
  as?: 'section' | 'div' | 'article'
}

export default function SectionWrapper({
  children,
  className = '',
  id,
  size = 'md',
  as: Tag = 'section',
}: SectionWrapperProps) {
  const sizeClass = size === 'sm' ? 'section-sm' : 'section'

  return (
    <Tag
      id={id}
      className={[sizeClass, className].filter(Boolean).join(' ')}
    >
      <div className="container-page">
        {children}
      </div>
    </Tag>
  )
}
