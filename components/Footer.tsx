import Link from 'next/link'
import { EdubaMark } from './EdubaMark'

const FOOTER_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/rights', label: 'Rights' },
  { href: '/press', label: 'Press' },
  { href: '/submissions', label: 'Submissions' },
  { href: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid #2A2520' }} className="px-6 md:px-12 py-12 mt-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        {/* Lockup */}
        <div className="flex flex-col items-center md:items-start gap-3">
          <EdubaMark size={28} color="#C9A84C" />
          <p
            className="font-light text-sm uppercase"
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              letterSpacing: '0.3em',
              color: '#F0E8D6',
            }}
          >
            Eduba Press
          </p>
          <p className="text-xs" style={{ letterSpacing: '0.15em', color: '#C8BC9A' }}>
            edubapress.com
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-3">
          {FOOTER_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-xs uppercase transition-colors"
              style={{ letterSpacing: '0.12em', color: '#C8BC9A' }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>

      <div
        className="max-w-5xl mx-auto mt-10 pt-6"
        style={{ borderTop: '1px solid #2A2520' }}
      >
        <p
          className="text-xs opacity-40"
          style={{ letterSpacing: '0.1em', color: '#C8BC9A' }}
        >
          © {new Date().getFullYear()} Eduba Press. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
