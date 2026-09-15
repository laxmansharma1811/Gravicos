import { Metadata } from 'next'
import { statsData, creatorInfo } from '@/data/stats'
import Button from '@/components/Button'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Gravicos, a STEM education platform dedicated to helping Nepali +2 students master Mathematics and Physics for NEB board exams and entrance tests.',
}

const stats = [
  { value: statsData.subscribers, label: 'subscribers' },
  { value: statsData.videos, label: 'video lessons' },
  { value: statsData.totalViews, label: 'total views' },
  { value: statsData.engagement, label: 'satisfaction' },
]

const values = [
  {
    title: 'Intuitive physical proofs',
    body: 'Every lesson grounds mathematical equations in physical intuition. We show you why formulas work, not just how to memorize them.',
  },
  {
    title: 'First principles, then advanced physics',
    body: 'Mastering vector algebra before classical mechanics, single-variable calculus before multivariable integrals. Logical order matters.',
  },
  {
    title: '100% Free on YouTube',
    body: 'Every educational video is free on YouTube. Good STEM education should be open and accessible to all students worldwide.',
  },
]

export default function AboutPage() {
  return (
    <main>
      {/* Page header */}
      <div className="border-b border-border bg-bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-subtle opacity-50 [background-size:24px_24px] pointer-events-none" />
        <div className="container-page py-16 md:py-24 relative z-10">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-semibold tracking-widest text-accent uppercase mb-4 block">
              [ Platform Mission ]
            </span>
            <h1 className="font-sans font-black text-4xl md:text-5xl lg:text-6xl tracking-tight text-text-primary mb-6">
              About Gravicos
            </h1>
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed border-l-2 border-primary pl-4">
              An educational platform dedicated to teaching Mathematics, Physics, and STEM subjects through clear, intuitive step-by-step video lessons for NEB students.
            </p>
          </div>
        </div>
      </div>

      {/* Stats row - Metric Bar */}
      <ScrollReveal className="border-b border-border bg-bg-inset">
        <div className="container-page py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-y md:divide-y-0 divide-border border border-border">
            {stats.map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1} className="p-6 bg-bg-surface flex flex-col items-center justify-center text-center h-full w-full">
                <div className="font-sans font-black text-3xl md:text-4xl text-text-primary mb-1">
                  {s.value}
                </div>
                <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-text-muted">
                  {s.label}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Creator section */}
      <ScrollReveal>
        <section aria-label="About the creator" className="py-20 md:py-32">
          <div className="container-page max-w-5xl">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-start">
              
              {/* Creator info */}
              <div className="flex flex-col gap-6">
                <div className="w-16 h-16 border border-border bg-bg-subtle flex items-center justify-center text-primary mb-2">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
                    <path d="M20 21v-2a4 4 0 0 4-4H8a4 4 0 0 4 4v2"/>
                    <circle cx="12" cy="7" r="4"/>
                  </svg>
                </div>
                <div>
                  <h2 className="font-sans font-extrabold text-3xl md:text-4xl text-text-primary tracking-tight">
                    {creatorInfo.name}
                  </h2>
                  <p className="font-mono text-xs text-primary font-bold uppercase tracking-widest mt-2 mb-6">
                    {creatorInfo.bio}
                  </p>
                </div>
                <div className="text-base text-text-secondary leading-relaxed space-y-4">
                  <p>{creatorInfo.description}</p>
                  <p>
                    Our mission is to help students around the globe build deep comprehension in mathematics and physics, taking them from core fundamentals to advanced quantum theory without relying on rote memorization.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 mt-4">
                  <Button href="https://www.youtube.com/@gravicos" target="_blank" size="md" variant="primary" className="rounded-none font-bold px-6">
                    Subscribe on YouTube
                  </Button>
                  <Button href="/contact" size="md" variant="ghost" className="rounded-none border border-border hover:border-text-primary">
                    Get in touch
                  </Button>
                </div>
              </div>
  
              {/* Expertise & Pedagogy */}
              <div className="flex flex-col gap-12 lg:border-l lg:border-border lg:pl-12">
                
                {/* Expertise List */}
                <div>
                  <h3 className="font-mono text-[10px] font-bold text-text-muted uppercase tracking-widest mb-6">
                    Areas of expertise
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {creatorInfo.expertise.map((skill) => (
                      <span key={skill} className="font-mono text-[10px] bg-bg-surface border border-border px-3 py-1 text-text-secondary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
  
                {/* Values list */}
                <div>
                  <h3 className="font-mono text-[10px] font-bold text-text-muted uppercase tracking-widest mb-6">
                    Pedagogical Approach
                  </h3>
                  <div className="flex flex-col gap-8">
                    {values.map((v, i) => (
                      <div key={v.title} className="flex gap-4">
                        <div className="font-mono text-xs text-primary font-bold pt-1">
                          {String(i + 1).padStart(2, '0')}
                        </div>
                        <div>
                          <h4 className="font-sans text-base font-bold text-text-primary mb-1">
                            {v.title}
                          </h4>
                          <p className="text-sm text-text-secondary leading-relaxed m-0">
                            {v.body}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </main>
  )
}
