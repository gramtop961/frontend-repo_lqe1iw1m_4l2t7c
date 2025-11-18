import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/15 pointer-events-none">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
              Systems Thinker • Neuroscience • AI • Product
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow">
              Mondo Ardiansyah
            </h1>
            <p className="mt-4 text-lg text-slate-100/90 max-w-2xl">
              Bridging neuroscience research and AI product development to build thoughtful, human-centered technologies.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center rounded-lg bg-white/90 hover:bg-white text-slate-900 px-4 py-2 text-sm font-semibold transition">
                See Work
              </a>
              <a href="/products" className="inline-flex items-center rounded-lg bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 text-sm font-semibold transition">
                Explore Products
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
    </section>
  )
}
