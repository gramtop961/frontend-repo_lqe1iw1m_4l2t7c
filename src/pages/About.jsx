import Navbar from '../components/Navbar'

const skills = {
  Neuroscience: ['EEG/MEG', 'Neural decoding', 'Signal processing'],
  'AI/ML': ['Python', 'MATLAB', 'Gen‑AI tools'],
  Development: ['Rapid prototyping', 'Cursor', 'Full‑stack basics'],
  Product: ['PRDs', 'Strategy', 'Stakeholder alignment'],
}

const timeline = [
  { time: 'Now', title: 'Product Development Associate', org: 'IYKRA', desc: 'Building Gen‑AI solutions for research and operations.' },
  { time: '2022‑2024', title: 'Co‑Founder', org: 'Mindex Neurotechnology', desc: 'BCI venture exploring assistive tech and neurofeedback.' },
  { time: '2019‑2022', title: 'Research', org: 'LIN & CIMH (Germany)', desc: 'Neuroscience research on learning/memory and clinical EEG.' },
  { time: 'M.Sc.', title: 'Medical Systems Engineering', org: 'Otto von Guericke University', desc: 'BCI specialization in Germany.' },
  { time: 'B.Eng.', title: 'Electrical Engineering', org: '—', desc: 'Foundations in circuits, signals, and systems.' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-12">
        <h1 className="text-3xl font-semibold">About</h1>

        <section className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 rounded-2xl bg-slate-900/70 ring-1 ring-white/10 p-6">
            <p className="text-slate-300">
              From Electrical Engineering to Medical Systems Engineering with a focus on Brain‑Computer Interfaces in Germany, and now driving AI product development in Indonesia. I bridge rigorous research with practical product execution.
            </p>
          </div>
          <div className="rounded-2xl bg-slate-900/70 ring-1 ring-white/10 p-6">
            <h2 className="text-white font-semibold">Toolkit</h2>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {Object.entries(skills).map(([k, vals]) => (
                <div key={k}>
                  <h3 className="text-sm text-slate-200 font-medium">{k}</h3>
                  <div className="mt-1 flex flex-wrap gap-1">
                    {vals.map(v => (
                      <span key={v} className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-white ring-1 ring-white/10">{v}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-white">Timeline</h2>
          <div className="mt-4 space-y-3">
            {timeline.map((t, i) => (
              <div key={i} className="rounded-2xl bg-slate-900/70 ring-1 ring-white/10 p-4 flex items-center justify-between">
                <div>
                  <div className="text-slate-200 font-medium">{t.title} · {t.org}</div>
                  <div className="text-slate-400 text-sm">{t.desc}</div>
                </div>
                <div className="text-slate-400 text-sm">{t.time}</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
