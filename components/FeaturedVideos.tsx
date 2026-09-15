'use client'

import Link from 'next/link'
import { getFeaturedVideos, videosData } from '@/data/videos'
import VideoCard from './VideoCard'
import YouTubePlayer from './YouTubePlayer'

export default function FeaturedVideos() {
  const featuredVideo = getFeaturedVideos()[0] || videosData[0]
  const listVideos = videosData.slice(1, 4)

  return (
    <section aria-label="Video Lessons" className="relative">
      <div className="container-page py-16 md:py-24">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-border pb-6">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-semibold tracking-wide text-accent uppercase mb-3 block">
              [ Video Ecosystem ]
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-text-primary mb-3">
              Core Video Lessons
            </h2>
            <p className="text-base text-text-secondary">
              Free, structured tutorials covering Calculus, Mechanics, Electromagnetism, and Quantum Physics.
            </p>
          </div>

          <Link
            href="/videos"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-bg-inset border border-border hover:border-text-primary text-text-primary font-mono text-xs font-bold uppercase tracking-wider transition-colors"
          >
            Explore Library
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Featured Showcase Layout - Technical Split */}
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-6 mb-12">
          
          {/* Main Hero Video */}
          <div className="bg-bg-surface border border-border flex flex-col p-4 md:p-6">
            <div className="border border-border mb-6">
              <YouTubePlayer
                youtubeId={featuredVideo.youtubeId}
                title={featuredVideo.title}
                thumbnail={featuredVideo.thumbnail}
                duration={featuredVideo.duration}
                showAttribution={false}
              />
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="bg-primary text-white font-mono text-[10px] font-bold px-2 py-0.5 uppercase tracking-wide">
                  {featuredVideo.category}
                </span>
                <span className="font-mono text-[10px] font-bold text-text-secondary uppercase tracking-widest">
                  {featuredVideo.level}
                </span>
              </div>
              <h3 className="font-sans text-2xl font-bold text-text-primary leading-tight">
                {featuredVideo.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-2 max-w-prose">
                {featuredVideo.description}
              </p>
              
              <div className="pt-4 border-t border-border mt-auto">
                <Link 
                  href={`/videos/${featuredVideo.id}`} 
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-mono text-sm font-bold tracking-tight transition-colors"
                >
                  Watch Full Lesson & Notes <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Secondary Video Cards Column (Index List) */}
          <div className="flex flex-col gap-6">
            <div className="font-mono text-xs font-semibold text-text-muted border-b border-border pb-2 uppercase tracking-widest">
              Recent Additions
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {listVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Channel Banner Note */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 border border-border bg-bg-inset">
          <div className="flex items-center gap-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff0000" className="shrink-0">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <div>
              <p className="font-sans text-sm font-bold text-text-primary m-0 leading-none mb-1">
                Official Content Source: Gravicos YouTube Channel
              </p>
              <p className="font-mono text-[10px] text-text-secondary m-0 tracking-wide uppercase">
                All video lessons are hosted and embedded via YouTube.
              </p>
            </div>
          </div>

          <a
            href="https://www.youtube.com/@gravicos"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 font-mono text-xs font-bold text-primary hover:text-primary-hover uppercase tracking-wider"
          >
            Visit Channel →
          </a>
        </div>
      </div>
    </section>
  )
}
