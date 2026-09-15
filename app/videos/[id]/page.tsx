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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: video.title,
    description: video.description,
    thumbnailUrl: [video.thumbnail],
    uploadDate: video.uploadDate,
    contentUrl: `https://www.youtube.com/watch?v=${video.youtubeId}`,
    embedUrl: `https://www.youtube.com/embed/${video.youtubeId}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VideoDetailClient video={video} />
    </>
  )
}
