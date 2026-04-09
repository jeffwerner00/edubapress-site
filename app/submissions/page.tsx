import Link from 'next/link'

export const metadata = { title: 'Submissions — Eduba Press' }

const serif = { fontFamily: 'var(--font-cormorant), Georgia, serif' }

export default function SubmissionsPage() {
  return (
    <main className="px-6 md:px-12 pt-24 pb-36 max-w-2xl">
      <p className="text-xs uppercase mb-4 font-light" style={{ letterSpacing: '0.12em', color: '#C9A84C' }}>
        Submissions
      </p>
      <h1
        className="font-light text-4xl md:text-5xl mb-12"
        style={{ ...serif, letterSpacing: '0.05em', color: '#F0E8D6' }}
      >
        Submissions
      </h1>

      <div className="border-l-2 pl-8 mb-10" style={{ borderColor: '#2A2520' }}>
        <p
          className="font-light text-xl md:text-2xl leading-relaxed"
          style={{ ...serif, letterSpacing: '0.01em', color: '#F0E8D6' }}
        >
          Eduba Press is{' '}
          <strong className="font-normal" style={{ color: '#F0E8D6' }}>
            not currently accepting
          </strong>{' '}
          unsolicited manuscript submissions.
        </p>
      </div>

      <div
        className="space-y-5 font-light text-lg leading-relaxed"
        style={{ ...serif, letterSpacing: '0.01em', color: '#C8BC9A' }}
      >
        <p>
          We are a focused imprint with a defined publishing program. This may change in the future.
          Check back here for updates, or subscribe to our newsletter to be notified if our
          submissions policy changes.
        </p>
        <p>Thank you for your interest in Eduba Press.</p>
      </div>

      <div className="mt-14">
        <Link
          href="/#newsletter"
          className="text-xs uppercase font-light transition-colors"
          style={{ letterSpacing: '0.12em', color: '#F0E8D6' }}
        >
          Subscribe to our newsletter →
        </Link>
      </div>
    </main>
  )
}
