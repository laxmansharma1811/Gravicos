import { Metadata } from 'next'
import VideosClient from './VideosClient'

export const metadata: Metadata = {
  title: 'Video Library — Gravicos',
  description: 'Explore free educational video lessons on React, Next.js 14, TypeScript, modern CSS, and web performance. Created by Gravicos.',
  openGraph: {
    title: 'Video Library — Gravicos',
    description: 'Free, high-quality video tutorials on modern web development.',
    type: 'website',
  },
}

export default function VideosPage() {
  return <VideosClient />
}
