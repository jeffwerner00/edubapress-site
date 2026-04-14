export const metadata = { title: 'Press — Eduba Press' }

const serif = { fontFamily: 'var(--font-cormorant), Georgia, serif' }

export default function PressPage() {
  return (
    <>
      <header className="px-6 md:px-12 pt-20 pb-14 max-w-3xl mx-auto">
        <p className="text-xs uppercase mb-4 font-light" style={{ letterSpacing: '0.12em', color: '#C9A84C' }}>
          Press
        </p>
        <h1
          className="font-light text-4xl md:text-5xl"
          style={{ ...serif, letterSpacing: '0.05em', color: '#F0E8D6' }}
        >
          Press &amp; Media
        </h1>
      </header>

      <hr className="section-rule" />

      {/* Press Kit */}
      <section className="px-6 md:px-12 py-14 max-w-2xl mx-auto">
        <p className="text-xs uppercase mb-6 font-light" style={{ letterSpacing: '0.12em', color: '#C9A84C' }}>
          Press Kit
        </p>
        <div
          className="p-8"
          style={{ border: '1px solid #2A2520' }}
        >
          <p
            className="font-light text-lg mb-3"
            style={{ ...serif, letterSpacing: '0.03em', color: '#F0E8D6' }}
          >
            Press Kit
          </p>
          <p className="text-xs" style={{ letterSpacing: '0.1em', color: '#C8BC9A' }}>
            Available on request.{' '}Contact{' '}
            <a href="mailto:press@edubapress.com" style={{ color: '#C9A84C' }}>press@edubapress.com</a>.
          </p>
        </div>
      </section>

      <hr className="section-rule" />

      {/* Coverage */}
      <section className="px-6 md:px-12 py-14 max-w-2xl mx-auto">
        <p className="text-xs uppercase mb-6 font-light" style={{ letterSpacing: '0.12em', color: '#C9A84C' }}>
          Coverage
        </p>
        <p
          className="font-light text-lg leading-relaxed"
          style={{ ...serif, letterSpacing: '0.01em', color: '#C8BC9A' }}
        >
          Reviews, features, and press coverage will appear here.
        </p>
      </section>

      <hr className="section-rule" />

      {/* Press Inquiries */}
      <section className="px-6 md:px-12 py-14 max-w-2xl mx-auto">
        <p className="text-xs uppercase mb-6 font-light" style={{ letterSpacing: '0.12em', color: '#C9A84C' }}>
          Press Inquiries
        </p>
        <p
          className="font-light text-lg leading-relaxed mb-6"
          style={{ ...serif, letterSpacing: '0.01em', color: '#C8BC9A' }}
        >
          We are happy to provide review copies, author interviews, and supporting materials for
          editorial coverage. Please allow five business days for a response.
        </p>
        <a
          href="mailto:press@edubapress.com"
          className="text-xs uppercase font-light transition-colors"
          style={{ letterSpacing: '0.12em', color: '#F0E8D6' }}
        >
          press@edubapress.com →
        </a>
      </section>
    </>
  )
}
