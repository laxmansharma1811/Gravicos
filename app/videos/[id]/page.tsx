import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getVideoById, videosData } from '@/data/videos'
import VideoDetailClient from './VideoDetailClient'

interface PageProps {
  params: {
    id: string
  }
}

export function generateStaticParams() {
  return videosData.map((video) => ({
    id: video.id,
  }))
}

export function generateMetadata({ params }: PageProps): Metadata {
  const video = getVideoById(params.id)

  if (!video) {
    return {
      title: 'Video Not Found — Gravicos',
    }
  }

  return {
    title: `${video.title} — Gravicos`,
    description: video.description,
    openGraph: {
      title: video.title,
      description: video.description,
      images: [video.thumbnail],
      type: 'video.other',
    },
  }
}

export default function VideoDetailPage({ params }: PageProps) {
  const video = getVideoById(params.id)

  if (!video) {
    notFound()
  }

  return <VideoDetailClient video={video} />
}
