import { MetadataRoute } from 'next'
import { getAllVideos } from '@/data/videos'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gravicos.vercel.app'
  
  // Static routes
  const routes = ['', '/about', '/contact', '/courses', '/videos'].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1.0 : 0.8,
    })
  )

  // Dynamic video routes
  const videos = getAllVideos()
  const videoRoutes = videos.map((video) => ({
    url: `${baseUrl}/videos/${video.id}`,
    lastModified: video.uploadDate, // or new Date().toISOString()
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...videoRoutes]
}
