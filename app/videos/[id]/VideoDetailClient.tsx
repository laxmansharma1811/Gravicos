'use client'

import Link from 'next/link'
import { Video, getVideoById } from '@/data/videos'
import YouTubePlayer from '@/components/YouTubePlayer'
import RelatedVideos from '@/components/RelatedVideos'

interface VideoDetailClientProps {
  video: Video
}

function formatViews(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(0)}K`
  return String(n)
}

export default function VideoDetailClient({ video }: VideoDetailClientProps) {
  const nextVideo = video.nextVideoId ? getVideoById(video.nextVideoId) : null

  return (
    <main style={{ paddingBottom: '64px' }}>
      {/* Top Breadcrumb Bar */}
      <div
        style={{
          borderBottom: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg-subtle)',
          padding: '16px 0',
        }}
      >
        <div className="container-page">
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: 'var(--text-xs)' }}>
            <Link href="/" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
              Home
            </Link>
            <span style={{ color: 'var(--color-text-muted)' }}>/</span>
            <Link href="/videos" style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
              Videos
            </Link>
            <span style={{ color: 'var(--color-text-muted)' }}>/</span>
            <span
              style={{
                color: 'var(--color-text-primary)',
                fontWeight: 600,
                maxWidth: '30ch',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap',
              }}
            >
              {video.title}
            </span>
          </nav>
        </div>
      </div>

      <div className="container-page section-sm">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '32px',
          }}
        >
          {/* Main Column (Player + Overview + Outcomes + Sequence) */}
          <div style={{ gridColumn: 'span 12 / span 12' }} className="lg:col-span-8">
            {/* Embedded Player */}
            <YouTubePlayer
              youtubeId={video.youtubeId}
              title={video.title}
              thumbnail={video.thumbnail}
              duration={video.duration}
              showAttribution={true}
            />

            {/* Video Title & Meta Bar */}
            <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span className="badge badge-primary">{video.category}</span>
                <span
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    padding: '2px 8px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: 'var(--color-bg-subtle)',
                    border: '1px solid var(--color-border)',
                    color: 'var(--color-text-secondary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.04em',
                  }}
                >
                  {video.level} Level
                </span>
                <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-muted)' }}>
                  Published {video.uploadDate}
                </span>
              </div>

              <h1
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: 'var(--color-text-primary)',
                  lineHeight: 1.25,
                  margin: 0,
                }}
              >
                {video.title}
              </h1>

              {/* Engagement Stats */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  paddingBottom: '16px',
                  borderBottom: '1px solid var(--color-border)',
                  fontSize: 'var(--text-xs)',
                  color: 'var(--color-text-secondary)',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  {formatViews(video.views)} views
                </span>

                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
                    <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                  </svg>
                  {formatViews(video.likes)} likes
                </span>

                <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  {video.duration} duration
                </span>
              </div>
            </div>

            {/* About This Lesson */}
            <div style={{ marginTop: '24px' }}>
              <h2 className="type-h3" style={{ fontSize: 'var(--text-lg)', marginBottom: '10px' }}>
                About This Lesson
              </h2>
              <p className="type-body" style={{ fontSize: 'var(--text-base)', lineHeight: 1.6, margin: 0 }}>
                {video.description}
              </p>
            </div>

            {/* What You Will Learn (Structured Checklist) */}
            {video.learningOutcomes && video.learningOutcomes.length > 0 && (
              <div
                style={{
                  marginTop: '28px',
                  padding: '24px',
                  borderRadius: 'var(--radius-xl)',
                  backgroundColor: 'var(--color-bg-subtle)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: 'var(--text-base)',
                    fontWeight: 700,
                    color: 'var(--color-text-primary)',
                    margin: '0 0 16px 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2.5">
                    <polyline points="9 11 12 14 22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                  </svg>
                  What You Will Learn
                </h3>

                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'grid', gap: '12px' }}>
                  {video.learningOutcomes.map((outcome, idx) => (
                    <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <span
                        style={{
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          backgroundColor: 'rgba(37, 99, 235, 0.1)',
                          color: 'var(--color-primary)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '11px',
                          fontWeight: 700,
                          flexShrink: 0,
                          marginTop: '2px',
                        }}
                      >
                        ✓
                      </span>
                      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)', lineHeight: 1.5 }}>
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Target Audience & Prerequisites */}
            <div
              style={{
                marginTop: '24px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
                gap: '16px',
              }}
            >
              {/* Target Audience */}
              <div
                style={{
                  padding: '18px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-bg)',
                }}
              >
                <h4 style={{ margin: '0 0 6px 0', fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-secondary)', letterSpacing: '0.04em' }}>
                  Who Is This For?
                </h4>
                <p style={{ margin: 0, fontSize: 'var(--text-xs)', color: 'var(--color-text-primary)', lineHeight: 1.5 }}>
                  {video.targetAudience}
                </p>
              </div>

              {/* Prerequisites */}
              {video.prerequisites && video.prerequisites.length > 0 && (
                <div
                  style={{
                    padding: '18px',
                    borderRadius: 'var(--radius-lg)',
                    border: '1px solid var(--color-border)',
                    backgroundColor: 'var(--color-bg)',
                  }}
                >
                  <h4 style={{ margin: '0 0 6px 0', fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-secondary)', letterSpacing: '0.04em' }}>
                    Prerequisites
                  </h4>
                  <ul style={{ margin: 0, paddingLeft: '16px', fontSize: 'var(--text-xs)', color: 'var(--color-text-primary)' }}>
                    {video.prerequisites.map((pre, i) => (
                      <li key={i}>{pre}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Next Lesson Learning Sequence Banner */}
            {nextVideo && (
              <div
                style={{
                  marginTop: '28px',
                  padding: '20px 24px',
                  borderRadius: 'var(--radius-xl)',
                  backgroundColor: 'var(--color-bg)',
                  border: '2px dashed var(--color-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '16px',
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      display: 'block',
                      marginBottom: '4px',
                    }}
                  >
                    Recommended Next Lesson
                  </span>
                  <h4 style={{ margin: 0, fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                    {nextVideo.title}
                  </h4>
                </div>

                <Link href={`/videos/${nextVideo.id}`} className="btn btn-primary btn-sm" style={{ flexShrink: 0 }}>
                  Watch Next Lesson →
                </Link>
              </div>
            )}
          </div>

          {/* Sidebar Column (Channel Info + Action Buttons) */}
          <div style={{ gridColumn: 'span 12 / span 12' }} className="lg:col-span-4">
            <div
              style={{
                position: 'sticky',
                top: '80px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              {/* Creator Card */}
              <div
                style={{
                  padding: '24px',
                  borderRadius: 'var(--radius-xl)',
                  backgroundColor: 'var(--color-bg-subtle)',
                  border: '1px solid var(--color-border)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '16px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: '1.25rem',
                      flexShrink: 0,
                    }}
                  >
                    G
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                      {video.channelName}
                    </h3>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)' }}>
                      Educational Content Creator
                    </span>
                  </div>
                </div>

                <p style={{ margin: 0, fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  This video lesson is produced by <strong>Gravicos</strong>. Subscribe on YouTube to stay up-to-date with new tutorials.
                </p>

                <a
                  href={video.channelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-md"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Subscribe on YouTube
                </a>

                <a
                  href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-md"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Watch on YouTube.com
                </a>
              </div>

              {/* Quick Navigation Card */}
              <div
                style={{
                  padding: '20px',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-bg)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                }}
              >
                <h4 style={{ margin: 0, fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                  More Learning Resources
                </h4>
                <Link
                  href="/videos"
                  style={{
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-primary)',
                    textDecoration: 'none',
                    fontWeight: 600,
                  }}
                >
                  ← Browse all {video.category} video lessons
                </Link>
                <Link
                  href="/courses"
                  style={{
                    fontSize: 'var(--text-xs)',
                    color: 'var(--color-primary)',
                    textDecoration: 'none',
                    fontWeight: 600,
                  }}
                >
                  Explore full structured courses
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Related Lessons Section */}
        <RelatedVideos currentVideoId={video.id} />
      </div>
    </main>
  )
}
