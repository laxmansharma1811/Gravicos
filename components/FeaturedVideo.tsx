'use client'

import Link from 'next/link'
import { Video } from '@/data/videos'
import YouTubePlayer from './YouTubePlayer'

interface FeaturedVideoProps {
  video: Video
}

export default function FeaturedVideo({ video }: FeaturedVideoProps) {
  return (
    <div className="bg-bg-surface border border-border p-6 grid grid-cols-1 md:grid-cols-[auto_1fr] md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-8 items-start relative group transition-all duration-300 ease-out hover:border-border-strong hover:shadow-lg hover:-translate-y-1">
      {/* Corner Accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Player Column */}
      <div className="w-full h-full overflow-hidden border border-border group-hover:border-primary/50 transition-colors">
        <YouTubePlayer
          youtubeId={video.youtubeId}
          title={video.title}
          thumbnail={video.thumbnail}
          duration={video.duration}
          showAttribution={false}
        />
      </div>

      {/* Info Column */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="bg-primary text-white font-mono text-[10px] font-bold uppercase tracking-wider px-2 py-0.5">
            Featured Lesson
          </span>
          <span className="font-mono text-[10px] font-bold text-text-secondary uppercase tracking-widest">
            {video.category} • {video.level}
          </span>
        </div>

        <h2 className="font-sans text-3xl font-bold tracking-tight text-text-primary leading-tight">
          {video.title}
        </h2>

        <p className="text-sm text-text-secondary leading-relaxed">
          {video.description}
        </p>

        {/* Learning Highlights */}
        {video.learningOutcomes && video.learningOutcomes.length > 0 && (
          <div className="mt-2 border-l-2 border-border pl-4">
            <span className="font-mono text-[10px] font-bold text-text-muted uppercase tracking-widest block mb-2">
              Learning Outcomes
            </span>
            <ul className="flex flex-col gap-1.5 text-xs text-text-secondary">
              {video.learningOutcomes.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">▹</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap items-center gap-3 pt-4 mt-auto">
          <Link 
            href={`/videos/${video.id}`} 
            className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-bg bg-text-primary px-4 py-2 hover:bg-primary transition-colors"
          >
            Full Lesson Details
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>

          <a
            href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-text-primary border border-border bg-bg-surface px-4 py-2 hover:border-text-primary transition-colors"
          >
            Watch on YouTube
          </a>
        </div>
      </div>
    </div>
  )
}
