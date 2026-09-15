'use client'

import { motion } from 'framer-motion'
import Button from './Button'
import { videosData } from '@/data/videos'

import { statsData } from '@/data/stats'

const stemTopics = [
  { label: 'Calculus', bg: 'rgba(37,99,235,0.05)', color: '#2563EB' },
  { label: 'Mechanics', bg: 'rgba(5,150,105,0.05)', color: '#059669' },
  { label: 'Electromagnetism', bg: 'rgba(147,51,234,0.05)', color: '#9333EA' },
  { label: 'Algebra', bg: 'rgba(217,119,6,0.05)', color: '#D97706' },
  { label: 'Quantum Physics', bg: 'rgba(220,38,38,0.05)', color: '#DC2626' },
]

function ScienceVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full aspect-[4/3] bg-bg-surface border border-border overflow-hidden"
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern-subtle opacity-60 [background-size:24px_24px] pointer-events-none" />

      {/* Axis Lines */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border-strong opacity-50" />
      <div className="absolute top-1/2 left-0 right-0 h-px bg-border-strong opacity-50" />

      {/* Mathematical Elements */}
      <div className="absolute inset-0 p-6 flex flex-col justify-between font-mono text-sm text-text-muted">
        <div className="flex justify-between items-start">
          <span className="text-primary font-bold">f(x)</span>
          <span className="text-xs">t = 0.0</span>
        </div>
        
        {/* Animated Sine Wave using SVG */}
        <div className="absolute inset-0 flex items-center justify-center opacity-70">
          <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="none">
            <motion.path
              d="M 0,100 Q 50,20 100,100 T 200,100 T 300,100 T 400,100"
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M 0,100 Q 50,180 100,100 T 200,100 T 300,100 T 400,100"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="2"
              strokeDasharray="4 4"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <div className="flex justify-between items-end relative z-10">
          <div>
            <span className="text-accent block font-bold">∇ × E = -∂B/∂t</span>
            <span className="text-xs opacity-75">Maxwell's Equation</span>
          </div>
          <div className="text-right">
            <span className="text-ink-600 block font-bold">Δx Δp ≥ ℏ/2</span>
            <span className="text-xs opacity-75">Uncertainty Principle</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative bg-bg-surface overflow-hidden border-b border-border">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-3/4 max-w-4xl aspect-square bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="container-page pt-24 pb-20 md:pt-32 md:pb-28">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Typography & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8"
          >
            <div className="flex items-center gap-3 font-mono text-xs font-semibold uppercase tracking-widest text-text-muted">
              <span className="text-accent">[ gravicos ]</span>
              <span className="w-1 h-1 bg-border-strong rounded-full" />
              <span>Nepali +2 NEB Science</span>
            </div>

            <h1 className="font-sans font-black text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] leading-[1.05] tracking-tighter text-text-primary text-balance">
              Master Physics & Maths for <span className="text-primary">NEB.</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed text-text-secondary max-w-2xl text-balance">
              First-principles video lessons by Gravicos for Nepali +2 students. We strip away memorization to build deep intuition in Calculus, Mechanics, and Business Mathematics.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/videos" size="lg" variant="primary" className="rounded-none px-8 font-bold border border-primary hover:bg-bg hover:text-primary transition-colors">
                Watch Lessons →
              </Button>
              <Button href="/courses" size="lg" variant="ghost" className="rounded-none border border-border hover:border-text-primary hover:bg-transparent">
                View Syllabus
              </Button>
            </div>

            {/* Structured Stats */}
            <div className="mt-6 pt-8 border-t border-border grid grid-cols-3 gap-6 sm:gap-12 max-w-lg">
              {[
                { value: statsData.subscribers, label: 'Subscribers' },
                { value: statsData.videos, label: 'Video Lessons' },
                { value: statsData.totalViews, label: 'Total Views' },
              ].map((stat, i) => (
                <div key={stat.label} className="flex flex-col gap-1">
                  <span className="font-sans font-extrabold text-2xl sm:text-3xl tracking-tight text-text-primary">
                    {stat.value}
                  </span>
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-text-muted">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Visual Element */}
          <div className="flex flex-col gap-6 relative">
            <ScienceVisual />
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {stemTopics.map((tech) => (
                <span
                  key={tech.label}
                  className="px-3 py-1.5 font-mono text-xs font-semibold border border-border"
                  style={{ backgroundColor: tech.bg, color: tech.color }}
                >
                  {tech.label}
                </span>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
