import Navbar from '../components/Navbar'

const roles = [
  { title: 'Product Development Associate', org: 'IYKRA', period: 'Present', points: ['Design and ship Gen‑AI solutions for internal operations', 'Lead discovery, PRDs, and delivery with stakeholders'] },
  { title: 'Co‑Founder', org: 'Mindex Neurotechnology', period: '2022‑2024', points: ['Built BCI prototypes', 'Drove partnerships and pilots'] },
  { title: 'Researcher', org: 'LIN & CIMH (Germany)', period: '2019‑2022', points: ['Neuroscience research on learning/memory', 'Clinical EEG projects'] },
]

const education = [
  { degree: "Master's — Medical Systems Engineering (BCI)", org: 'Otto von Guericke University', period: 'Germany' },
  { degree: "Bachelor's — Electrical Engineering", org: '—', period: '' },
]

export default function CVPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-12">
        <h1 className="text-3xl font-semibold">CV</h1>

        <section className="mt-6 space-y-4">
          {roles.map((r, i) => (
            <div key={i} className="rounded-2xl bg-slate-900/70 ring-1 ring-white/10 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-white font-semibold">{r.title} · {r.org}</h3>
                <span className="text-slate-400 text-sm">{r.period}</span>
              </div>
              <ul className="mt-3 list-disc pl-5 text-slate-300 text-sm space-y-1">
                {r.points.map((p, idx) => <li key={idx}>{p}</li>)}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-8">
          <h2 className="text-xl font-semibold text-white">Education</h2>
          <div className="mt-3 space-y-3">
            {education.map((e, i) => (
              <div key={i} className="rounded-2xl bg-slate-900/70 ring-1 ring-white/10 p-4">
                <div className="text-slate-200 font-medium">{e.degree}</div>
                <div className="text-slate-400 text-sm">{e.org} {e.period && `• ${e.period}`}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-8">
          <a href="#" className="inline-flex items-center rounded-lg bg-white/90 hover:bg-white text-slate-900 px-4 py-2 text-sm font-semibold transition">
            Download PDF
          </a>
        </div>
      </main>
    </div>
  )
}
