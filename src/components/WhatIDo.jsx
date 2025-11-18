const pillars = [
  { title: 'Research', desc: 'Neuroscience experiments, EEG/MEG analysis, neural decoding.' },
  { title: 'Design', desc: 'System architecture, UX for technical tools, data-informed flows.' },
  { title: 'Development', desc: 'Rapid prototyping, Gen‑AI integrations, full‑stack delivery.' },
  { title: 'Entrepreneurship', desc: 'From zero‑to‑one, lean validation, storytelling, partnerships.' },
]

export default function WhatIDo() {
  return (
    <section className="py-16 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-white">What I Do</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl p-6 bg-slate-900/70 ring-1 ring-white/10">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-600 mb-4" />
              <h3 className="text-white font-semibold">{p.title}</h3>
              <p className="text-sm text-slate-300 mt-1">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
