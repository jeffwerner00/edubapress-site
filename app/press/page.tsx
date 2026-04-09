export const metadata = { title: 'Press — Eduba Press' }

const serif = { fontFamily: 'var(--font-cormorant), Georgia, serif' }

export default function PressPage() {
  return (
    <>
      <header className="px-6 md:px-12 pt-20 pb-14 max-w-3xl">
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

      {/* Media Kit */}
      <section className="px-6 md:px-12 py-14 max-w-2xl">
        <p className="text-xs uppercase mb-6 font-light" style={{ letterSpacing: '0.12em', color: '#C9A84C' }}>
          Media Kit
        </p>
        <div
          className="flex items-center justify-between gap-6 flex-wrap p-8"
          style={{ border: '1px solid #2A2520' }}
        >
          <div>
            <p
              className="font-light text-lg mb-1"
              style={{ ...serif, letterSpacing: '0.03em', color: '#F0E8D6' }}
            >
              Eduba Press Media Kit
            </p>
            <p className="text-xs" style={{ letterSpacing: '0.1em', color: '#C8BC9A' }}>
              Available following Book 1 launch
            </p>
          </div>
          <span
            className="text-xs uppercase font-light px-5 py-2 cursor-not-allowed opacity-50"
            style={{ letterSpacing: '0.12em', border: '1px solid #2A2520', color: '#C8BC9A' }}
          >
            Download PDF
          </span>
        </div>
      </section>

      <hr className="section-rule" />

      {/* Coverage */}
      <section className="px-6 md:px-12 py-14 max-w-2xl">
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
      <section className="px-6 md:px-12 py-14 max-w-2xl">
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
