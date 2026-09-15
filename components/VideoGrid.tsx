'use client'

import { motion } from 'framer-motion'
import { Video } from '@/data/videos'
import VideoCard from './VideoCard'

interface VideoGridProps {
  videos: Video[]
  emptyMessage?: string
}

const containerVars = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
}

const itemVars = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 }
  }
}

export default function VideoGrid({
  videos,
  emptyMessage = 'No video lessons found.',
}: VideoGridProps) {
  if (!videos || videos.length === 0) {
    return (
      <div className="py-16 px-6 text-center border border-border bg-bg-subtle flex flex-col items-center justify-center">
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-text-muted mb-4"
        >
          <polygon points="23 7 16 12 23 17 23 7" />
          <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
        </svg>
        <p className="text-text-secondary">
          {emptyMessage}
        </p>
      </div>
    )
  }

  return (
    <motion.div
      variants={containerVars}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
    >
      {videos.map((video) => (
        <motion.div key={video.id} variants={itemVars}>
          <VideoCard video={video} />
        </motion.div>
      ))}
    </motion.div>
  )
}
