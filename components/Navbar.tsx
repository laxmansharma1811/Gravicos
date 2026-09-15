'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ThemeToggle from './ThemeToggle'

const navLinks = [
  { name: 'Videos', href: '/videos' },
  { name: 'Courses', href: '/courses' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setIsOpen(false), [pathname])

  return (
    <header
      role="banner"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-bg border-b border-transparent'
      }`}
    >
      <div className="container-page">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <Link
            href="/"
            aria-label="Gravicos — home"
            className="flex items-center gap-3 group"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden border border-border group-hover:border-primary transition-all duration-300 ease-out flex shrink-0 shadow-sm group-hover:shadow-md group-hover:scale-105">
              <img src="https://yt3.googleusercontent.com/RxdcgkBLG7YEgti937GBA6lPc3urEE0_tIS_anKz1_dHeO9jqrhauMcN1iSeTADdjRk6y0Mqjw=s160-c-k-c0x00ffffff-no-rj" alt="Gravicos Logo" className="w-full h-full object-cover" />
            </div>
            <span className="font-sans font-extrabold text-lg tracking-tight text-text-primary">
              Gravicos
            </span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-colors duration-300 ease-out relative ${
                    isActive ? 'text-primary' : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary"
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <motion.a
              href="https://www.youtube.com/@gravicos"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-bg bg-primary px-4 py-2 shadow-sm"
              aria-label="Subscribe on YouTube"
            >
              <motion.svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                aria-hidden="true"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </motion.svg>
              Subscribe
            </motion.a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden p-2 text-text-primary hover:bg-bg-subtle transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                {isOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t border-border bg-bg-surface"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="container-page py-4 flex flex-col">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block py-3 font-mono text-sm font-bold uppercase tracking-wider border-b border-border/50 ${
                      isActive ? 'text-primary' : 'text-text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
              <div className="pt-6">
                <a
                  href="https://www.youtube.com/@gravicos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-primary text-white font-mono text-xs font-bold uppercase tracking-widest py-3 hover:bg-primary-hover transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  Subscribe on YouTube
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
