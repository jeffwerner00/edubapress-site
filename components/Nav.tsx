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
  return (
    <nav
      className="py-5 px-6 md:px-12 flex items-center justify-between"
      style={{ borderBottom: '1px solid #2A2520' }}
    >
      {/* Mark + wordmark */}
      <Link href="/" className="flex items-center gap-4 no-underline group">
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
            className="text-xs uppercase transition-colors"
            style={{ letterSpacing: '0.12em', color: '#C8BC9A' }}
            onMouseOver={(e) => ((e.target as HTMLElement).style.color = '#F0E8D6')}
            onMouseOut={(e) => ((e.target as HTMLElement).style.color = '#C8BC9A')}
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* Mobile menu button (placeholder — no JS toggle yet) */}
      <button
        className="md:hidden"
        aria-label="Menu"
        style={{ color: '#C8BC9A', background: 'none', border: 'none', cursor: 'pointer' }}
      >
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
          <rect width="20" height="1.5" fill="currentColor" />
          <rect y="6" width="14" height="1.5" fill="currentColor" />
          <rect y="12" width="20" height="1.5" fill="currentColor" />
        </svg>
      </button>
    </nav>
  )
}
