import { EdubaMark } from '@/components/EdubaMark'

export const metadata = { title: 'Eduba Press' }

const serif = { fontFamily: 'var(--font-cormorant), Georgia, serif' }

export default function Home() {
  return (
    <>
      {/* Hero */}
      <header className="px-6 md:px-12 pt-24 pb-20 md:pt-36 md:pb-28 text-center max-w-3xl mx-auto">
        <div className="flex justify-center mb-10">
          <EdubaMark size={52} color="#C9A84C" strokeWidth={2} />
        </div>
        <p
          className="text-xs uppercase mb-8 font-light"
          style={{ letterSpacing: '0.3em', color: '#C9A84C' }}
        >
          Eduba Press
        </p>
        <h1
          className="font-light text-4xl md:text-5xl lg:text-6xl leading-tight mb-7"
          style={{ ...serif, letterSpacing: '0.04em', color: '#F0E8D6' }}
        >
          Stories from the foundation<br className="hidden md:block" /> of civilization.
        </h1>
        <p
          className="text-sm md:text-base leading-relaxed max-w-xl mx-auto font-light"
          style={{ letterSpacing: '0.02em', color: '#C8BC9A' }}
        >
          We publish work that reaches back — to the origins of cities,
          <br className="hidden md:block" /> of gods, of the written word itself.
        </p>
      </header>

      <hr className="section-rule" />

      {/* Featured Book */}
      <section className="px-6 md:px-12 py-20 md:py-28 max-w-5xl mx-auto">
        <p
          className="text-xs uppercase mb-12 text-center font-light"
          style={{ letterSpacing: '0.3em', color: '#C9A84C' }}
        >
          Now Available
        </p>

        <div className="flex flex-col md:flex-row items-start gap-12 md:gap-16">
          {/* Book cover placeholder */}
          <div className="flex-shrink-0 mx-auto md:mx-0">
            <div
              className="w-48 md:w-56 flex items-center justify-center"
              style={{ aspectRatio: '2/3', minHeight: '280px', background: '#141210', border: '1px solid #2A2520' }}
            >
              <div className="text-center px-4">
                <EdubaMark size={28} color="#C9A84C" strokeWidth={2.5} />
                <p
                  className="text-xs uppercase mt-4"
                  style={{ letterSpacing: '0.12em', color: '#C8BC9A', opacity: 0.4 }}
                >
                  Cover
                </p>
              </div>
            </div>
          </div>

          {/* Book info */}
          <div className="flex-1">
            <p
              className="text-xs uppercase mb-4 font-light"
              style={{ letterSpacing: '0.3em', color: '#C9A84C' }}
            >
              The Here War · Book One
            </p>
            <h2
              className="font-light text-3xl md:text-4xl leading-tight mb-2"
              style={{ ...serif, letterSpacing: '0.05em', color: '#F0E8D6' }}
            >
              The Temple of Transactions
            </h2>
            <p
              className="text-sm mb-8 font-light"
              style={{ letterSpacing: '0.1em', color: '#C8BC9A' }}
            >
              Jeff Werner
            </p>
            <p
              className="text-base leading-relaxed mb-10 font-light"
              style={{ letterSpacing: '0.015em', color: '#C8BC9A', maxWidth: '480px' }}
            >
              Sumer, 2800{' '}
              <span className="text-xs uppercase" style={{ letterSpacing: '0.12em' }}>bc</span>.
              In the world&apos;s first city, a young temple administrator discovers that the gods
              who rule human devotion are at war — and that the most powerful weapon in that war
              is a clay tablet.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="/books/temple-of-transactions"
                className="px-7 py-3 text-xs uppercase font-light transition-colors"
                style={{
                  letterSpacing: '0.12em',
                  border: '1px solid #2A2520',
                  color: '#C8BC9A',
                }}
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <hr className="section-rule" />

      {/* Mission */}
      <section className="px-6 md:px-12 py-20 md:py-28 max-w-2xl mx-auto text-center">
        <p
          className="font-light text-xl md:text-2xl leading-relaxed"
          style={{ ...serif, letterSpacing: '0.02em', color: '#F0E8D6' }}
        >
          Eduba Press is an independent publisher committed to stories told at the scale of human
          history. We believe the past is not distant — it is the architecture everything else
          is built on. We are looking for the stories that belong here.
        </p>
      </section>

      <hr className="section-rule" />

      {/* Newsletter */}
      <section
        id="newsletter"
        className="px-6 md:px-12 py-16 md:py-20 max-w-xl mx-auto text-center"
      >
        <p
          className="text-xs uppercase mb-4 font-light"
          style={{ letterSpacing: '0.3em', color: '#C9A84C' }}
        >
          Stay Informed
        </p>
        <h3
          className="font-light text-2xl mb-3"
          style={{ ...serif, letterSpacing: '0.06em', color: '#F0E8D6' }}
        >
          New releases, author notes,
          <br />and news from Eduba Press.
        </h3>
        <p
          className="text-xs leading-relaxed mb-8 font-light"
          style={{ letterSpacing: '0.08em', color: '#C8BC9A' }}
        >
          We publish rarely and write only when we have something worth saying.
        </p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-5 py-3 text-sm font-light focus:outline-none transition-colors"
            style={{
              background: '#141210',
              border: '1px solid #2A2520',
              color: '#F0E8D6',
            }}
          />
          <button
            type="submit"
            className="px-7 py-3 text-xs uppercase font-light transition-colors whitespace-nowrap"
            style={{
              letterSpacing: '0.12em',
              background: '#F0E8D6',
              color: '#1A1A1A',
            }}
          >
            Subscribe
          </button>
        </form>
      </section>
    </>
  )
}
