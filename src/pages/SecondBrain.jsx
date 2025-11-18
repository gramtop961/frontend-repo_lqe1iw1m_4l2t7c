import Navbar from '../components/Navbar'

const POSTS = [
  { title: 'Design Systems for AI Tools', cat: 'Design Systems', read: '6 min', date: 'Sep 2024', excerpt: 'Principles to keep complex AI interfaces simple and robust.' },
  { title: 'Shipping with Local Models', cat: 'Development', read: '8 min', date: 'Aug 2024', excerpt: 'Practical workflows for privacy‑first prototyping.' },
  { title: 'Product Strategy as a System', cat: 'Product Strategy', read: '7 min', date: 'Jul 2024', excerpt: 'Connecting discovery, delivery, and learning loops.' },
  { title: 'Workflow Building Blocks', cat: 'Workflows', read: '5 min', date: 'Jun 2024', excerpt: 'Create reusable bricks for fast iteration.' },
  { title: 'Growing in T‑Shape', cat: 'Career Growth', read: '4 min', date: 'May 2024', excerpt: 'Depth meets breadth for durable product careers.' },
]

export default function SecondBrainPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-12">
        <section className="rounded-2xl bg-gradient-to-br from-orange-600/20 to-red-700/20 ring-1 ring-white/10 p-8">
          <h1 className="text-3xl font-semibold">Second Brain</h1>
          <p className="text-slate-200 mt-2 max-w-3xl">Notes, patterns, and experiments on design systems, development, and product strategy. Featured ideas at the top, then latest entries.</p>
        </section>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {POSTS.map((p, i) => (
            <article key={i} className="rounded-2xl bg-slate-900/70 ring-1 ring-white/10 p-5">
              <div className="text-xs text-slate-300 flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-full bg-white/10 text-white ring-1 ring-white/10">{p.cat}</span>
                <span>•</span>
                <span>{p.read}</span>
                <span>•</span>
                <span>{p.date}</span>
              </div>
              <h3 className="text-white font-semibold mt-2">{p.title}</h3>
              <p className="text-sm text-slate-300 mt-1">{p.excerpt}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  )
}
