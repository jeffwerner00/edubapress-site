import Link from 'next/link'
import { EdubaMark } from '@/components/EdubaMark'

export const metadata = { title: 'The Temple of Transactions — Eduba Press' }

const serif = { fontFamily: 'var(--font-cormorant), Georgia, serif' }

export default function TempleOfTransactionsPage() {
  return (
    <>
      {/* Back link */}
      <div className="px-6 md:px-12 pt-10 max-w-5xl mx-auto">
        <Link
          href="/"
          className="text-xs uppercase font-light transition-colors"
          style={{ letterSpacing: '0.12em', color: '#C8BC9A' }}
        >
          ← Back
        </Link>
      </div>

      {/* Book detail */}
      <div className="px-6 md:px-12 py-16 md:py-24 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-14 md:gap-20">

          {/* Cover placeholder */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div
              className="w-52 md:w-64 flex items-center justify-center"
              style={{ aspectRatio: '2/3', minHeight: '320px', background: '#141210', border: '1px solid #2A2520' }}
            >
              <div className="text-center px-6">
                <EdubaMark size={32} color="#C9A84C" strokeWidth={2.5} />
                <p
                  className="text-xs uppercase mt-5"
                  style={{ letterSpacing: '0.12em', color: '#C8BC9A', opacity: 0.35 }}
                >
                  Cover
                </p>
              </div>
            </div>
          </div>

          {/* Book info */}
          <div className="flex-1 max-w-xl">
            <p
              className="text-xs uppercase mb-3 font-light"
              style={{ letterSpacing: '0.35em', color: '#C9A84C' }}
            >
              The Here War · Book One
            </p>

            <h1
              className="font-light text-4xl md:text-5xl leading-tight mb-4"
              style={{ ...serif, letterSpacing: '0.04em', color: '#F0E8D6' }}
            >
              The Temple of
              <br />Transactions
            </h1>

            <p
              className="text-sm mb-10 font-light"
              style={{ letterSpacing: '0.2em', color: '#C8BC9A' }}
            >
              Jeff Werner
            </p>

            <hr className="section-rule mb-10" />

            <p
              className="font-light text-xl md:text-2xl leading-relaxed mb-12"
              style={{ ...serif, letterSpacing: '0.015em', color: '#C8BC9A' }}
            >
              Sumer, 2800{' '}
              <span className="text-sm uppercase" style={{ letterSpacing: '0.12em' }}>bc</span>.
              In the world&apos;s first city, a young temple administrator discovers that the gods
              who rule human devotion are at war — and that the most powerful weapon in that war
              is a clay tablet.
            </p>

            <hr className="section-rule mb-10" />

            <div className="space-y-3">
              <p
                className="text-xs uppercase font-light"
                style={{ letterSpacing: '0.12em', color: '#C9A84C' }}
              >
                Availability
              </p>
              <p
                className="font-light text-lg"
                style={{ ...serif, letterSpacing: '0.02em', color: '#C8BC9A' }}
              >
                Coming soon — hardcover, paperback, ebook
              </p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
