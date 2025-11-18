import Navbar from '../components/Navbar'
import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const ALL_PROJECTS = [
  { slug: 'neural-decoding', title: 'Neural Decoding Research', categories: ['Research'], summary: 'Decoding cognitive states from EEG/MEG data.' },
  { slug: 'mindex-neurotechnology', title: 'Mindex Neurotechnology (BCI)', categories: ['End-to-End','Development','Design'], summary: 'Co-founded BCI startup delivering prototypes and pilots.' },
  { slug: 'iykra-genai', title: 'Gen‑AI Products @ IYKRA', categories: ['Development','Product'], summary: 'Internal Gen‑AI tools for research and operations.' },
  { slug: 'conversation-practice', title: 'Conversation Practice Tool', categories: ['Design','Development'], summary: 'Language practice assistant with prompts and scoring.' },
  { slug: 'local-llm', title: 'Local LLM Interface', categories: ['Development'], summary: 'Lightweight UI for running local models and workflows.' },
]

const FILTERS = ['All', 'Research', 'Design', 'Development', 'End-to-End']

function Tag({ children }) {
  return <span className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-white ring-1 ring-white/10">{children}</span>
}

export default function WorkPage() {
  const [filter, setFilter] = useState('All')
  const projects = useMemo(() => {
    if (filter === 'All') return ALL_PROJECTS
    return ALL_PROJECTS.filter(p => p.categories.includes(filter))
  }, [filter])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-12">
        <h1 className="text-3xl font-semibold">Work</h1>

        <div className="mt-6 flex flex-wrap gap-2">
          {FILTERS.map(f => (
            <button key={f} onClick={() => setFilter(f)} className={`px-3 py-1.5 rounded-full text-sm ring-1 ring-white/10 ${filter===f? 'bg-white/20 text-white':'bg-white/5 text-slate-300 hover:bg-white/10'}`}>
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(p => (
            <Link key={p.slug} to={`/work/${p.slug}`} className="group rounded-2xl bg-slate-900/70 ring-1 ring-white/10 p-5 hover:translate-y-[-2px] transition">
              <div className="h-36 rounded-xl bg-gradient-to-br from-orange-500/30 to-red-600/30 mb-4 ring-1 ring-white/10" />
              <h3 className="text-white font-semibold">{p.title}</h3>
              <p className="text-sm text-slate-300 mt-1">{p.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.categories.map(c => <Tag key={c}>{c}</Tag>)}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
