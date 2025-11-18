import Navbar from '../components/Navbar'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="text-slate-300 mt-2">Open to full projects, consulting, and collaborations.</p>

        <form className="mt-6 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-slate-300">Name</label>
              <input className="mt-1 w-full rounded-lg bg-slate-900/70 ring-1 ring-white/10 px-3 py-2 text-sm outline-none focus:ring-orange-500" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm text-slate-300">Email</label>
              <input type="email" className="mt-1 w-full rounded-lg bg-slate-900/70 ring-1 ring-white/10 px-3 py-2 text-sm outline-none focus:ring-orange-500" placeholder="you@example.com" />
            </div>
          </div>

          <div>
            <label className="block text-sm text-slate-300">What you're open to</label>
            <div className="mt-2 flex flex-wrap gap-2">
              {['Full projects', 'Consulting', 'Collaborations'].map(o => (
                <label key={o} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 text-sm text-slate-200 ring-1 ring-white/10">
                  <input type="checkbox" className="accent-orange-600" /> {o}
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm text-slate-300">Message</label>
            <textarea rows="5" className="mt-1 w-full rounded-lg bg-slate-900/70 ring-1 ring-white/10 px-3 py-2 text-sm outline-none focus:ring-orange-500" placeholder="Tell me about your idea" />
          </div>

          <button className="inline-flex items-center rounded-lg bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 text-sm font-semibold w-fit">Send</button>
        </form>

        <div className="mt-10 text-sm text-slate-300">
          <div>Email: <a href="mailto:mondo@example.com" className="underline">mondo@example.com</a></div>
          <div className="mt-1">Social: <a className="underline" href="#">LinkedIn</a> · <a className="underline" href="#">Twitter</a> · <a className="underline" href="#">GitHub</a></div>
        </div>
      </main>
    </div>
  )
}
