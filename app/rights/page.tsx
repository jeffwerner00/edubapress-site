export const metadata = { title: 'Rights — Eduba Press' }

const serif = { fontFamily: 'var(--font-cormorant), Georgia, serif' }

const RIGHTS_SECTIONS = [
  {
    title: 'Foreign Rights',
    body: 'We are actively seeking international publishing partners for The Here War series. The series is available for translation and co-publication in all territories.',
    email: 'rights@edubapress.com',
  },
  {
    title: 'Film & Television',
    body: 'The Here War is a long-form series with significant screen potential. Option and adaptation inquiries are welcome.',
    email: 'rights@edubapress.com',
  },
  {
    title: 'Audio Rights',
    body: 'Audiobook rights inquiries are welcome.',
    email: 'rights@edubapress.com',
  },
  {
    title: 'All Other Inquiries',
    body: 'For permissions, excerpts, educational licensing, and other rights questions, please contact us at the address above. We respond to all serious inquiries.',
    email: 'rights@edubapress.com',
  },
]

export default function RightsPage() {
  return (
    <>
      <header className="px-6 md:px-12 pt-20 pb-14 max-w-3xl">
        <p className="text-xs uppercase mb-4 font-light" style={{ letterSpacing: '0.12em', color: '#C9A84C' }}>
          Rights
        </p>
        <h1
          className="font-light text-4xl md:text-5xl"
          style={{ ...serif, letterSpacing: '0.05em', color: '#F0E8D6' }}
        >
          Rights &amp; Licensing
        </h1>
      </header>

      <hr className="section-rule" />

      <section className="px-6 md:px-12 py-14 max-w-2xl">
        <p
          className="font-light text-lg md:text-xl leading-relaxed"
          style={{ ...serif, letterSpacing: '0.01em', color: '#C8BC9A' }}
        >
          Eduba Press controls all rights to the works in our catalog. We welcome inquiries from
          publishers, agents, producers, and licensing partners worldwide.
        </p>
      </section>

      <hr className="section-rule" />

      <section className="px-6 md:px-12 py-16 max-w-2xl space-y-14">
        {RIGHTS_SECTIONS.map((s, i) => (
          <div key={s.title}>
            {i > 0 && <hr className="section-rule mb-14" />}
            <p className="text-xs uppercase mb-5 font-light" style={{ letterSpacing: '0.12em', color: '#C9A84C' }}>
              {s.title}
            </p>
            <p
              className="font-light text-lg leading-relaxed mb-5"
              style={{ ...serif, letterSpacing: '0.01em', color: '#C8BC9A' }}
            >
              {s.title === 'Film & Television' ? (
                <><em>The Here War</em> is a long-form series with significant screen potential. Option and adaptation inquiries are welcome.</>
              ) : s.title === 'Foreign Rights' ? (
                <>We are actively seeking international publishing partners for <em>The Here War</em> series. The series is available for translation and co-publication in all territories.</>
              ) : (
                s.body
              )}
            </p>
            <a
              href={`mailto:${s.email}`}
              className="text-xs uppercase font-light transition-colors hover:text-gold"
              style={{ letterSpacing: '0.12em', color: '#F0E8D6' }}
            >
              {s.email} →
            </a>
          </div>
        ))}
      </section>
    </>
  )
}
