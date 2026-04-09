import Link from 'next/link'

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl tracking-tight">
          EdubaPress
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-gray-600 hover:text-black transition"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          href="/contact"
          className="bg-black text-white text-sm px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          Contact
        </a>
      </div>
    </header>
  )
}
