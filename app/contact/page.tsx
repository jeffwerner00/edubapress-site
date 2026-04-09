export const metadata = { title: 'Contact — EdubaPress' }

export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto px-6 py-24">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <p className="text-gray-600 mb-10">Placeholder contact content — to be defined.</p>

      {/* Contact form placeholder */}
      <form className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="Your name"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            rows={5}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
            placeholder="How can we help?"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
