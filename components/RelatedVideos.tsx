'use client'

import { getRelatedVideos } from '@/data/videos'
import VideoGrid from './VideoGrid'

interface RelatedVideosProps {
  currentVideoId: string
  title?: string
}

export default function RelatedVideos({
  currentVideoId,
  title = 'Related Video Lessons',
}: RelatedVideosProps) {
  const related = getRelatedVideos(currentVideoId, 3)

  if (!related || related.length === 0) return null

  return (
    <section aria-label="Related video lessons" style={{ marginTop: '48px', paddingTop: '36px', borderTop: '1px solid var(--color-border)' }}>
      <div style={{ marginBottom: '24px' }}>
        <h3
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'var(--text-xl)',
            fontWeight: 700,
            color: 'var(--color-text-primary)',
            letterSpacing: '-0.02em',
            margin: '0 0 6px 0',
          }}
        >
          {title}
        </h3>
        <p className="type-body" style={{ fontSize: 'var(--text-sm)', margin: 0 }}>
          Continue building your web development skills with these related topics.
        </p>
      </div>

      <VideoGrid videos={related} />
    </section>
  )
}
