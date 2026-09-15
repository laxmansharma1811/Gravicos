import { Metadata } from 'next'
import VideosClient from './VideosClient'

export const metadata: Metadata = {
  title: 'Video Library for NEB Science & Management',
  description: 'Explore free video lessons on Physics, Mathematics, Calculus, and more for Nepali +2 students.',
  openGraph: {
    title: 'NEB +2 Physics & Maths Video Library — Gravicos',
    description: 'Free, high-quality video tutorials on NEB Class 11 & 12 subjects.',
    type: 'website',
  },
}

export default function VideosPage() {
  return <VideosClient />
}
