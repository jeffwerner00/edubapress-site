export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24">
      {/* Hero */}
      <section className="text-center mb-24">
        <h1 className="text-5xl font-bold mb-6">Welcome to EdubaPress</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Placeholder tagline — Nova will define the design direction.
        </p>
        <a
          href="/contact"
          className="inline-block bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition"
        >
          Get in Touch
        </a>
      </section>

      {/* Features placeholder */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {['Feature One', 'Feature Two', 'Feature Three'].map((f) => (
          <div key={f} className="border border-gray-200 rounded-xl p-8">
            <div className="w-10 h-10 bg-gray-100 rounded-lg mb-4" />
            <h3 className="font-semibold text-lg mb-2">{f}</h3>
            <p className="text-gray-500 text-sm">Placeholder copy — to be defined with Nova.</p>
          </div>
        ))}
      </section>
    </div>
  )
}
