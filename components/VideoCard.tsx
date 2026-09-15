import Link from 'next/link'
import { Video } from '@/data/videos'

function formatViews(views: number): string {
  if (views >= 1000000) return (views / 1000000).toFixed(1) + 'M'
  if (views >= 1000) return (views / 1000).toFixed(1) + 'K'
  return views.toString()
}

export default function VideoCard({ video }: { video: Video }) {
  const videoDetailUrl = `/videos/${video.id}`
  const youtubeUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`

  // Level badge styling (using string classes for Tailwind or inline for explicit brand colors)
  const levelColors: Record<Video['level'], { bg: string; color: string; border: string }> = {
    Beginner: { bg: 'rgba(34, 197, 94, 0.1)', color: '#15803d', border: 'rgba(34, 197, 94, 0.2)' },
    Intermediate: { bg: 'rgba(37, 99, 235, 0.1)', color: '#1d4ed8', border: 'rgba(37, 99, 235, 0.2)' },
    Advanced: { bg: 'rgba(168, 85, 247, 0.1)', color: '#7e22ce', border: 'rgba(168, 85, 247, 0.2)' },
  }
  const levelStyle = levelColors[video.level] || levelColors.Beginner

  return (
    <article className="flex flex-col h-full bg-bg-surface border border-border transition-all duration-300 ease-out hover:border-border-strong hover:shadow-lg hover:-translate-y-1 group">
      {/* Thumbnail */}
      <Link
        href={videoDetailUrl}
        aria-label={`Watch lesson: ${video.title}`}
        className="block relative aspect-video overflow-hidden border-b border-border bg-ink-950"
      >
        <img
          src={video.thumbnail}
          alt={video.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
        />

        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
          <div className="w-12 h-12 bg-white/95 rounded-none flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="var(--color-primary)" className="ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Duration badge */}
        <span className="absolute bottom-2 right-2 bg-ink-900/90 backdrop-blur-sm text-white font-mono text-[10px] font-semibold px-1.5 py-0.5 border border-white/20">
          {video.duration}
        </span>

        {/* Category badge */}
        <span className="absolute top-2 left-2 bg-primary/90 text-white text-[10px] font-bold px-2 py-0.5 uppercase tracking-wide">
          {video.category}
        </span>

        {/* Level badge */}
        <span
          className="absolute top-2 right-2 text-[9px] font-bold px-2 py-0.5 uppercase tracking-wider backdrop-blur-sm"
          style={{
            backgroundColor: levelStyle.bg,
            color: levelStyle.color,
            border: `1px solid ${levelStyle.border}`,
          }}
        >
          {video.level}
        </span>
      </Link>

      {/* Card Content */}
      <div className="p-4 flex flex-col gap-3 flex-1">
        <Link href={videoDetailUrl} className="group-hover:text-primary transition-colors">
          <h3 className="font-sans text-base font-bold leading-tight text-text-primary line-clamp-2">
            {video.title}
          </h3>
        </Link>

        <p className="text-xs text-text-secondary leading-relaxed line-clamp-2 m-0 font-medium">
          {video.description}
        </p>

        {/* Meta row & CTAs */}
        <div className="flex items-center justify-between gap-2 mt-auto pt-4 border-t border-border">
          {/* Views & Likes */}
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 font-mono text-[10px] text-text-muted">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              {formatViews(video.views)}
            </span>
            <span className="flex items-center gap-1 font-mono text-[10px] text-text-muted">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
                <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
              </svg>
              {formatViews(video.likes)}
            </span>
          </div>

          {/* Action Links */}
          <div className="flex items-center gap-2">
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              title="Watch on YouTube"
              className="text-text-muted hover:text-red-600 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <Link
              href={videoDetailUrl}
              className="font-mono text-[10px] font-bold uppercase tracking-wider text-primary hover:text-primary-hover flex items-center gap-1"
            >
              Watch <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
