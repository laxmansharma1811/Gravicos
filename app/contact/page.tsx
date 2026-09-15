import { Metadata } from 'next'
import ContactClient from './ContactClient'

export const metadata: Metadata = {
  title: 'Contact — Gravicos',
  description: 'Get in touch with Gravicos. Questions, collaborations, or feedback — we\'d love to hear from you.',
}

export default function ContactPage() {
  return <ContactClient />
}
