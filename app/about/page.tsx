export const metadata = { title: 'About — Eduba Press' }

const serif = { fontFamily: 'var(--font-cormorant), Georgia, serif' }

export default function AboutPage() {
  return (
    <>
      <header className="px-6 md:px-12 pt-20 pb-14 max-w-3xl">
        <p className="text-xs uppercase mb-4 font-light" style={{ letterSpacing: '0.12em', color: '#C9A84C' }}>
          About
        </p>
        <h1
          className="font-light text-4xl md:text-5xl"
          style={{ ...serif, letterSpacing: '0.05em', color: '#F0E8D6' }}
        >
          Eduba Press
        </h1>
      </header>

      <hr className="section-rule" />

      <section className="px-6 md:px-12 py-16 md:py-20 max-w-2xl">
        <p className="text-xs uppercase mb-8 font-light" style={{ letterSpacing: '0.12em', color: '#C9A84C' }}>
          The Name
        </p>
        <div
          className="space-y-6 font-light text-lg md:text-xl leading-relaxed"
          style={{ ...serif, letterSpacing: '0.01em', color: '#C8BC9A' }}
        >
          <p>
            In ancient Sumer, the é-dub-ba was the tablet house — the school where young scribes
            learned to press meaning into clay. It was the first institution built specifically to
            preserve human knowledge. Every administrative record, every legal contract, every hymn
            and epic that survived from the world&apos;s earliest civilization passed through a room
            like this one.
          </p>
          <p>We named this press after it deliberately.</p>
          <p>
            Publishing is an act of preservation. What we choose to print, bind, and send into the
            world is a claim about what matters — about which stories deserve to outlast the moment
            they were written in. The é-dub-ba understood that. So do we.
          </p>
        </div>
      </section>

      <hr className="section-rule" />

      <section className="px-6 md:px-12 py-16 md:py-20 max-w-2xl">
        <p className="text-xs uppercase mb-8 font-light" style={{ letterSpacing: '0.12em', color: '#C9A84C' }}>
          What We Publish
        </p>
        <div
          className="space-y-6 font-light text-lg md:text-xl leading-relaxed"
          style={{ ...serif, letterSpacing: '0.01em', color: '#C8BC9A' }}
        >
          <p>
            Eduba Press specializes in historical fiction operating at civilizational scale —
            stories set at the hinge points of human history, where the choices made by individuals
            shaped everything that came after.
          </p>
          <p>
            Our flagship series,{' '}
            <em>The Here War</em> by Jeff Werner, spans seventy volumes and five thousand years —
            from the first cities of Sumer to the twentieth century. It is among the most ambitious
            works of historical fiction ever attempted. We are proud to be its publisher.
          </p>
        </div>
      </section>

      <hr className="section-rule" />

      <section className="px-6 md:px-12 py-16 md:py-20 max-w-2xl">
        <p className="text-xs uppercase mb-8 font-light" style={{ letterSpacing: '0.12em', color: '#C9A84C' }}>
          Who We Are
        </p>
        <div
          className="space-y-6 font-light text-lg md:text-xl leading-relaxed"
          style={{ ...serif, letterSpacing: '0.01em', color: '#C8BC9A' }}
        >
          <p>
            Eduba Press is an independent imprint. We are small by design and serious by conviction.
            We do not publish quickly. We publish carefully.
          </p>
          <p>We are based in the United States.</p>
        </div>
      </section>
    </>
  )
}
