import { Metadata } from 'next'
import CoursesSection from '@/components/CoursesSection'
import FeaturedVideos from '@/components/FeaturedVideos'
import Button from '@/components/Button'

export const metadata: Metadata = {
  title: 'NEB +2 Courses & Learning Paths',
  description: 'Structured learning paths for NEB Class 11 & 12 Science/Management students. Master Calculus, Physics, and Mathematics step-by-step.',
}

export default function CoursesPage() {
  return (
    <main>
      {/* Page header */}
      <div className="border-b border-border bg-bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-subtle opacity-50 [background-size:24px_24px] pointer-events-none" />
        
        <div className="container-page py-16 md:py-24 relative z-10">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="font-mono text-xs font-semibold tracking-widest text-accent uppercase">
              [ Curriculum Paths ]
            </span>
            <h1 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl tracking-tight text-text-primary">
              Structured Learning
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed border-l-2 border-primary pl-4 mt-2">
              Follow our curriculum paths sequentially to build absolute mathematical and physical intuition, or jump directly to the level you need.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <Button href="/videos" size="lg" variant="primary" className="rounded-none font-bold">
                Explore Video Lessons →
              </Button>
              <Button href="https://www.youtube.com/@gravicos" target="_blank" size="lg" variant="ghost" className="rounded-none border border-border hover:border-text-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                Watch on YouTube
              </Button>
            </div>
          </div>
        </div>
      </div>

      <CoursesSection />

      {/* Recommended Video Tutorials Integration */}
      <FeaturedVideos />
    </main>
  )
}
