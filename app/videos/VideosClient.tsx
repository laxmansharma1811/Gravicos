'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { filterVideos, getFeaturedVideos, videosData } from '@/data/videos'
import FeaturedVideo from '@/components/FeaturedVideo'
import VideoFilters from '@/components/VideoFilters'
import VideoGrid from '@/components/VideoGrid'

export default function VideosClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedLevel, setSelectedLevel] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const topFeatured = useMemo(() => {
    return getFeaturedVideos()[0] || videosData[0]
  }, [])

  const filtered = useMemo(() => {
    return filterVideos({
      category: selectedCategory,
      level: selectedLevel,
      searchQuery,
    })
  }, [selectedCategory, selectedLevel, searchQuery])

  const handleResetFilters = () => {
    setSelectedCategory('All')
    setSelectedLevel('All')
    setSearchQuery('')
  }

  return (
    <main>
      {/* Header Banner */}
      <div className="border-b border-border bg-bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-subtle opacity-50 [background-size:24px_24px] pointer-events-none" />
        
        <div className="container-page py-16 md:py-24 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4 max-w-2xl"
          >
            <span className="font-mono text-xs font-semibold tracking-widest text-accent uppercase">
              [ Educational Video Platform ]
            </span>
            <h1 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl tracking-tight text-text-primary">
              Video Library
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed border-l-2 border-primary pl-4 mt-2">
              <strong className="text-text-primary">{videosData.length}</strong> free, structured video lessons by Gravicos covering Calculus, Classical Mechanics, Electromagnetism, and Quantum Physics.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container-page py-16">
        {/* Top Featured Video Banner */}
        {selectedCategory === 'All' && selectedLevel === 'All' && searchQuery === '' && topFeatured && (
          <div className="mb-16">
            <FeaturedVideo video={topFeatured} />
          </div>
        )}

        {/* Filter Controls Bar */}
        <VideoFilters
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          selectedLevel={selectedLevel}
          onSelectLevel={setSelectedLevel}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalResults={filtered.length}
          onReset={handleResetFilters}
        />

        {/* Video Grid or Empty State */}
        <VideoGrid
          videos={filtered}
          emptyMessage={`No videos matched your criteria (${selectedCategory !== 'All' ? `Category: ${selectedCategory}, ` : ''}${selectedLevel !== 'All' ? `Level: ${selectedLevel}, ` : ''}${searchQuery ? `Search: "${searchQuery}"` : ''}).`}
        />

        {/* Channel Attribution Footer */}
        <div className="mt-20 p-8 border border-border bg-bg-inset flex flex-col items-start gap-4 max-w-3xl">
          <div className="flex items-center gap-3">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff0000" aria-hidden="true">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <h4 className="font-sans text-xl font-bold text-text-primary">
              Gravicos YouTube Channel Integration
            </h4>
          </div>

          <p className="text-base text-text-secondary leading-relaxed">
            All video tutorials shown here are authored by <strong>Gravicos</strong> and streamed directly from YouTube. Subscribe to the channel to get notified whenever new masterclasses are released.
          </p>

          <a
            href="https://www.youtube.com/@gravicos"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-2 px-5 py-2.5 bg-text-primary text-bg font-mono text-xs font-bold uppercase tracking-wider hover:bg-primary transition-colors"
          >
            Subscribe on YouTube
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </main>
  )
}
