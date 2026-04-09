'use client'

import { useState } from 'react'
import Link from 'next/link'
import { EdubaMark } from './EdubaMark'

const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/rights', label: 'Rights' },
  { href: '/press', label: 'Press' },
  { href: '/submissions', label: 'Submissions' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav style={{ borderBottom: '1px solid #2A2520' }}>
      {/* Top bar */}
      <div className="py-5 px-6 md:px-12 flex items-center justify-between">
        {/* Mark + wordmark */}
        <Link href="/" className="flex items-center gap-4 no-underline" onClick={() => setOpen(false)}>
          <EdubaMark size={28} color="#F0E8D6" />
          <span
            className="font-light text-xl uppercase"
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              letterSpacing: '0.3em',
              color: '#F0E8D6',
            }}
          >
            Eduba Press
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs uppercase transition-colors hover:text-cream"
              style={{ letterSpacing: '0.12em', color: '#C8BC9A' }}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
          style={{ color: '#C8BC9A', background: 'none', border: 'none', cursor: 'pointer', padding: '4px' }}
        >
          {open ? (
            // X icon
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <line x1="1" y1="1" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="17" y1="1" x2="1" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            // Hamburger icon
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
              <rect width="20" height="1.5" fill="currentColor" />
              <rect y="6" width="14" height="1.5" fill="currentColor" />
              <rect y="12" width="20" height="1.5" fill="currentColor" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="md:hidden px-6 pb-6 flex flex-col gap-5"
          style={{ borderTop: '1px solid #2A2520' }}
        >
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs uppercase transition-colors pt-5"
              style={{ letterSpacing: '0.12em', color: '#C8BC9A' }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
