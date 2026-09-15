'use client'

import { useState } from 'react'

interface YouTubePlayerProps {
  youtubeId: string
  title: string
  thumbnail?: string
  duration?: string
  showAttribution?: boolean
  autoPlayOnLoad?: boolean
}

export default function YouTubePlayer({
  youtubeId,
  title,
  thumbnail,
  duration,
  showAttribution = true,
  autoPlayOnLoad = false,
}: YouTubePlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlayOnLoad)

  // High-res YouTube thumbnail fallback if thumbnail prop not provided
  const fallbackThumbnail = `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg`
  const imageSrc = thumbnail || fallbackThumbnail
  const youtubeUrl = `https://www.youtube.com/watch?v=${youtubeId}`

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      {/* Aspect ratio container 16:9 */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/9',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          backgroundColor: '#0f172a', // Dark backdrop for video player
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-md)',
        }}
      >
        {isPlaying ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              display: 'block',
            }}
          />
        ) : (
          <button
            onClick={() => setIsPlaying(true)}
            aria-label={`Play video lesson: ${title}`}
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              padding: 0,
              margin: 0,
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              display: 'block',
              textAlign: 'left',
              overflow: 'hidden',
            }}
          >
            {/* Facade Image */}
            <img
              src={imageSrc}
              alt={title}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform 400ms ease, opacity 300ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.03)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
              }}
            />

            {/* Dark vignette overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.2) 0%, rgba(15, 23, 42, 0.7) 100%)',
                transition: 'background 300ms ease',
              }}
            />

            {/* Center Play Button Overlay */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '68px',
                height: '68px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary)',
                color: '#ffffff',
                boxShadow: '0 8px 24px rgba(37, 99, 235, 0.4)',
                transition: 'transform 200ms ease, background-color 200ms ease',
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                style={{ marginLeft: '3px' }}
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>

            {/* Top Left Attribution Badge */}
            <span
              style={{
                position: 'absolute',
                top: '12px',
                left: '12px',
                padding: '4px 10px',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(4px)',
                color: '#f8fafc',
                fontSize: 'var(--text-xs)',
                fontWeight: 600,
                letterSpacing: '0.02em',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#ff0000" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
              Gravicos Video Lesson
            </span>

            {/* Duration Badge */}
            {duration && (
              <span
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  right: '12px',
                  backgroundColor: 'rgba(15, 23, 42, 0.9)',
                  color: '#ffffff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  fontWeight: 600,
                  padding: '3px 8px',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                {duration}
              </span>
            )}
          </button>
        )}
      </div>

      {/* Attribution Footer */}
      {showAttribution && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 12px',
            borderRadius: 'var(--radius-md)',
            backgroundColor: 'var(--color-bg-subtle)',
            border: '1px solid var(--color-border)',
            fontSize: 'var(--text-xs)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--color-primary)',
                display: 'inline-block',
              }}
            />
            <span style={{ color: 'var(--color-text-secondary)' }}>
              Source: <strong>Gravicos YouTube Channel</strong>
            </span>
          </div>

          <a
            href={youtubeUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--color-primary)',
              fontWeight: 600,
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            Watch on YouTube
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      )}
    </div>
  )
}
