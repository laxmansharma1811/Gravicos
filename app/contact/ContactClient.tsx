'use client'

import { useState } from 'react'
import Button from '@/components/Button'

const faqs = [
  {
    q: 'I have a question about a specific video. Where should I ask?',
    a: 'The best place is the YouTube comments section on that video — you\'ll get answers faster there and others benefit too.',
  },
  {
    q: 'Can I use your content in my own course or tutorial?',
    a: 'All content is copyrighted. Contact us to discuss licensing or collaboration — we\'re generally open to it.',
  },
  {
    q: 'Do you offer 1-on-1 mentoring or code review?',
    a: 'Not currently, but it\'s something we\'re considering. Use this form to express interest.',
  },
  {
    q: 'How often do new videos come out?',
    a: 'Weekly, typically. Subscribe on YouTube and hit the notification bell to know immediately.',
  },
]

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' })
      setSubmitted(false)
    }, 4000)
  }

  return (
    <main>
      {/* Page header */}
      <div className="border-b border-border bg-bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-subtle opacity-50 [background-size:24px_24px] pointer-events-none" />
        <div className="container-page py-16 md:py-24 relative z-10">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-semibold tracking-widest text-accent uppercase mb-4 block">
              [ Communications ]
            </span>
            <h1 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl tracking-tight text-text-primary mb-6">
              Get in touch
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed border-l-2 border-primary pl-4">
              Questions, ideas, collaborations — use the form or reach us on social. We read everything and reply within 48 hours.
            </p>
          </div>
        </div>
      </div>

      <div className="container-page py-20 md:py-32">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-start">
          
          {/* Contact form */}
          <div>
            <div className="bg-bg-surface border border-border p-8 md:p-10 shadow-sm relative">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-primary" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-primary" />

              {submitted ? (
                <div className="py-16 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 border border-primary bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <h3 className="font-sans text-2xl font-bold text-text-primary mb-2">
                    Message Transmitted
                  </h3>
                  <p className="text-text-secondary font-mono text-sm">
                    We&apos;ll respond within 24–48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                  <h2 className="font-sans text-2xl font-bold text-text-primary mb-2">
                    Send a dispatch
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="font-mono text-xs font-bold uppercase tracking-wider text-text-secondary">
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full px-4 py-3 bg-bg border border-border text-text-primary text-sm font-sans focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-text-muted"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="font-mono text-xs font-bold uppercase tracking-wider text-text-secondary">
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 bg-bg border border-border text-text-primary text-sm font-sans focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-text-muted"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="subject" className="font-mono text-xs font-bold uppercase tracking-wider text-text-secondary">
                      Subject
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="Topic of inquiry"
                      className="w-full px-4 py-3 bg-bg border border-border text-text-primary text-sm font-sans focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-text-muted"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-mono text-xs font-bold uppercase tracking-wider text-text-secondary">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="State your query clearly..."
                      className="w-full px-4 py-3 bg-bg border border-border text-text-primary text-sm font-sans resize-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-text-muted"
                    />
                  </div>

                  <Button type="submit" size="lg" variant="primary" className="w-full rounded-none font-bold uppercase tracking-widest text-xs mt-2">
                    Transmit Message
                  </Button>
                </form>
              )}
            </div>
          </div>

          {/* Side panel */}
          <div className="flex flex-col gap-12">
            
            {/* YouTube link */}
            <div>
              <h2 className="font-mono text-[10px] font-bold text-text-muted uppercase tracking-widest mb-4">
                Primary Channel
              </h2>
              <a
                href="https://www.youtube.com/@gravicos"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 border border-border bg-bg-surface hover:border-primary transition-colors"
              >
                <div className="w-12 h-12 bg-red-500/10 border border-red-500/20 flex items-center justify-center shrink-0 group-hover:bg-red-500/20 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#EF4444">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="font-sans text-sm font-bold text-text-primary group-hover:text-primary transition-colors m-0">
                    YouTube Comments
                  </p>
                  <p className="font-mono text-[10px] text-text-secondary m-0 mt-1 uppercase tracking-wide">
                    Fastest response for video Qs
                  </p>
                </div>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" className="text-text-muted group-hover:text-primary transition-colors">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="font-mono text-[10px] font-bold text-text-muted uppercase tracking-widest mb-4">
                Frequent Inquiries
              </h2>
              <div className="flex flex-col border border-border bg-bg-surface divide-y divide-border">
                {faqs.map((faq, i) => (
                  <div key={i} className="p-5">
                    <p className="font-sans text-sm font-bold text-text-primary mb-2">
                      {faq.q}
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed m-0">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <p className="font-mono text-xs text-text-muted border-l-2 border-border pl-3">
              Expected latency: 24–48h
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
