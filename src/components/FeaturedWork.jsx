import { Link } from 'react-router-dom'

const projects = [
  {
    slug: 'neural-decoding',
    title: 'Neural Decoding Research',
    tags: ['Research', 'EEG', 'MEG'],
    blurb: 'Decoding intent and perception from EEG/MEG signals for cognitive-state understanding.',
  },
  {
    slug: 'mindex-neurotechnology',
    title: 'Mindex Neurotechnology (BCI)',
    tags: ['End-to-End', 'Startup'],
    blurb: 'Co-founded a neurotech venture building brain-computer interface solutions.',
  },
  {
    slug: 'iykra-genai',
    title: 'Gen‑AI Products @ IYKRA',
    tags: ['Product', 'Development'],
    blurb: 'Shipped internal Gen‑AI tools improving workflows and knowledge retrieval.',
  },
  {
    slug: 'conversation-practice',
    title: 'Conversation Practice Tool',
    tags: ['Design', 'Development'],
    blurb: 'Interactive language practice assistant with realistic prompts and scoring.',
  },
]

function Tag({ children }) {
  return <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-white ring-1 ring-white/10">{children}</span>
}

export default function FeaturedWork() {
  return (
    <section id="work" className="py-16 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white">Featured Work</h2>
          <Link to="/work" className="text-sm text-slate-300 hover:text-white">View all</Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((p) => (
            <Link key={p.slug} to={`/work/${p.slug}`} className="group rounded-2xl bg-gradient-to-b from-slate-800/60 to-slate-900/80 ring-1 ring-white/10 p-5 hover:translate-y-[-2px] transition transform">
              <div className="h-28 rounded-xl bg-gradient-to-br from-orange-500/30 to-red-600/30 mb-4 ring-1 ring-white/10" />
              <h3 className="text-white font-semibold group-hover:text-white/90">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-300/90">{p.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
