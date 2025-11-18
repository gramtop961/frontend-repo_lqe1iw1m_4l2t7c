import React from 'react'
import Navbar from '../components/Navbar'

const CATEGORIES = ['All', 'Templates', 'Tools', 'Guides']

const PRODUCTS = [
  { title: 'Research Ops Template', cat: 'Templates', desc: 'Plan, track, and synthesize research with ease.', price: '$19', link: 'https://gumroad.com' },
  { title: 'PRD Wizard', cat: 'Tools', desc: 'Generate crisp PRDs with AI‑assisted prompts.', price: '$29', link: 'https://gumroad.com' },
  { title: 'LLM Prompt Pack', cat: 'Guides', desc: 'Battle‑tested prompts for product and research.', price: '$12', link: 'https://gumroad.com' },
  { title: 'Experiment Tracker', cat: 'Tools', desc: 'Lightweight tracker for prototyping cycles.', price: '$24', link: 'https://gumroad.com' },
]

export default function ProductsPage() {
  const [filter, setFilter] = React.useState('All')
  const items = PRODUCTS.filter(p => filter==='All' || p.cat===filter)
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex items-end justify-between">
          <h1 className="text-3xl font-semibold">Products</h1>
          <div className="flex gap-2">
            {CATEGORIES.map(c => (
              <button key={c} onClick={() => setFilter(c)} className={`px-3 py-1.5 rounded-full text-sm ring-1 ring-white/10 ${filter===c? 'bg-white/20 text-white':'bg-white/5 text-slate-300 hover:bg-white/10'}`}>{c}</button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((p, i) => (
            <div key={i} className="rounded-2xl bg-slate-900/70 ring-1 ring-white/10 p-5">
              <div className="h-36 rounded-xl bg-gradient-to-br from-orange-500/30 to-red-600/30 mb-4 ring-1 ring-white/10" />
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-white font-semibold">{p.title}</h3>
                  <p className="text-sm text-slate-300 mt-1">{p.desc}</p>
                </div>
                <div className="text-white font-semibold">{p.price}</div>
              </div>
              <div className="mt-4 flex gap-2">
                <a href={p.link} target="_blank" className="inline-flex items-center rounded-lg bg-orange-600 hover:bg-orange-500 text-white px-3 py-1.5 text-sm font-semibold transition">Buy</a>
                <a href="https://wa.me/" target="_blank" className="inline-flex items-center rounded-lg bg-white/90 hover:bg-white text-slate-900 px-3 py-1.5 text-sm font-semibold transition">Chat</a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
