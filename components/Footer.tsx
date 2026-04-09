import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} EdubaPress. All rights reserved.
        </p>
        <nav className="flex items-center gap-6">
          {[
            { href: '/about', label: 'About' },
            { href: '/services', label: 'Services' },
            { href: '/contact', label: 'Contact' },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-gray-500 hover:text-black transition">
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  )
}
