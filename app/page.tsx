import { Metadata } from 'next'
import HeroSection from '@/components/HeroSection'
import FeaturedVideos from '@/components/FeaturedVideos'
import CoursesSection from '@/components/CoursesSection'
import Button from '@/components/Button'
import ScrollReveal from '@/components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Gravicos — Physics & Maths for NEB +2 Science Students',
  description: 'Free, high-quality video lessons on Physics and Mathematics for Nepali +2 Science and Management students. Master NEB exams with Gravicos.',
}

// Learning benefits — Physics & Mathematics focus
const benefits = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: 'Intuitive Physical Proofs',
    body: 'Understand the physical and geometric intuition behind complex calculus and physics formulas step by step.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'First-Principles Curriculum',
    body: 'Beginner to advanced, every topic builds logically on core principles without skipping steps or hand-waving.',
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
        <rect x="2" y="3" width="20" height="14" rx="0" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: '100% Free Video Lessons',
    body: 'All educational videos are streamed directly from YouTube. Free access for students, educators, and lifelong learners.',
  },
]

export default function Home() {
  return (
    <>
      <HeroSection />
      
      <ScrollReveal className="border-t border-border bg-bg-subtle relative overflow-hidden">
        {/* Subtle grid background */}
        <div className="absolute inset-0 bg-grid-pattern-subtle opacity-50 [background-size:32px_32px] pointer-events-none" />
        <FeaturedVideos />
      </ScrollReveal>

      <ScrollReveal>
        <CoursesSection />
      </ScrollReveal>

      {/* Benefits section - Technical Editorial Grid */}
      <section aria-label="Why Gravicos" className="border-t border-border bg-bg-surface">
        <div className="container-page py-16 md:py-24">
          
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border pb-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-semibold tracking-wide text-accent uppercase mb-4 block">
                [ Pedagogical Approach ]
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-text-primary mb-4">
                Structured for Deep Comprehension.
              </h2>
              <p className="text-lg text-text-secondary max-w-prose">
                We believe in rigorous, first-principles education. Our curriculum is designed to build absolute mathematical and physical intuition for NEB students.
              </p>
            </div>
            <div className="shrink-0">
              <div className="h-16 w-16 border border-border flex items-center justify-center text-text-muted">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M12 3v18M3 12h18" />
                  <circle cx="12" cy="12" r="6" />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border border border-border">
            {benefits.map((b, i) => (
              <ScrollReveal key={b.title} delay={i * 0.1} className="bg-bg-surface p-8 md:p-10 flex flex-col gap-6 relative group h-full">
                <div className="absolute top-4 right-4 font-mono text-xs text-border-strong group-hover:text-primary transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="text-primary">{b.icon}</div>
                <div>
                  <h3 className="font-sans text-xl font-bold text-text-primary mb-3">
                    {b.title}
                  </h3>
                  <p className="text-base text-text-secondary leading-relaxed">
                    {b.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section - Brutalist/Technical */}
      <ScrollReveal>
        <section aria-label="Subscribe" className="border-t border-border bg-ink-950 text-ink-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-20 [background-size:64px_64px] pointer-events-none" />
          
          <div className="container-page py-20 md:py-32 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="flex flex-col items-start gap-8 border-l-4 border-primary pl-6 md:pl-10">
                <h2 className="font-sans font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-ink-50">
                  Master Mathematics & Physics.
                </h2>
                <p className="text-xl text-ink-400 max-w-xl font-light">
                  Subscribe on YouTube and follow our structured learning paths to master Calculus, Classical Mechanics, Electromagnetism, and Quantum Physics.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    href="https://www.youtube.com/@gravicos"
                    target="_blank"
                    size="lg"
                    variant="primary"
                    className="rounded-none border-2 border-primary hover:bg-primary-hover shadow-[4px_4px_0_0_var(--color-primary-hover)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                    icon={
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    }
                  >
                    Subscribe on YouTube
                  </Button>
                  <Button 
                    href="/videos" 
                    size="lg" 
                    variant="ghost"
                    className="rounded-none border-2 border-ink-700 text-ink-300 hover:text-ink-50 hover:border-ink-50"
                  >
                    Explore Video Lessons
                  </Button>
                </div>
              </div>
              
              <div className="hidden lg:flex justify-end">
                <div className="w-64 h-64 border border-ink-800 relative">
                   <div className="absolute top-0 left-0 w-full h-full border-t border-l border-primary/30 origin-top-left scale-150 rotate-45" />
                   <div className="absolute inset-4 border border-ink-800 rounded-full flex items-center justify-center text-primary font-mono text-xs">
                      [ END_OF_PAGE ]
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  )
}
