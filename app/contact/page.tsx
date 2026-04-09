export const metadata = { title: 'Contact — Eduba Press' }

const serif = { fontFamily: 'var(--font-cormorant), Georgia, serif' }

const CONTACTS = [
  { label: 'General Inquiries', email: 'info@edubapress.com' },
  { label: 'Rights & Licensing', email: 'rights@edubapress.com' },
  { label: 'Press & Media', email: 'press@edubapress.com' },
]

export default function ContactPage() {
  return (
    <>
      <header className="px-6 md:px-12 pt-20 pb-14 max-w-3xl">
        <p className="text-xs uppercase mb-4 font-light" style={{ letterSpacing: '0.12em', color: '#C9A84C' }}>
          Contact
        </p>
        <h1
          className="font-light text-4xl md:text-5xl"
          style={{ ...serif, letterSpacing: '0.05em', color: '#F0E8D6' }}
        >
          Contact
        </h1>
      </header>

      <hr className="section-rule" />

      <section className="px-6 md:px-12 py-16 max-w-2xl space-y-12">
        {CONTACTS.map((c, i) => (
          <div key={c.label}>
            {i > 0 && <hr className="section-rule mb-12" />}
            <p className="text-xs uppercase mb-4 font-light" style={{ letterSpacing: '0.12em', color: '#C9A84C' }}>
              {c.label}
            </p>
            <a
              href={`mailto:${c.email}`}
              className="font-light text-xl transition-colors"
              style={{ ...serif, letterSpacing: '0.03em', color: '#F0E8D6' }}
            >
              {c.email}
            </a>
          </div>
        ))}

        <div>
          <hr className="section-rule mb-12" />
          <p className="text-xs uppercase mb-4 font-light" style={{ letterSpacing: '0.12em', color: '#C9A84C' }}>
            Mailing Address
          </p>
          <p
            className="font-light text-lg"
            style={{ ...serif, letterSpacing: '0.02em', color: '#C8BC9A' }}
          >
            Address to be added.
          </p>
        </div>
      </section>

      <hr className="section-rule" />

      <section className="px-6 md:px-12 py-14 max-w-xl">
        <p
          className="font-light text-lg leading-relaxed"
          style={{ ...serif, letterSpacing: '0.01em', color: '#C8BC9A' }}
        >
          We read every message. We respond to serious inquiries within five business days.
        </p>
      </section>
    </>
  )
}
