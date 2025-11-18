import { Link } from 'react-router-dom'

export default function ProductsTeaser() {
  return (
    <section className="py-16 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl p-8 ring-1 ring-white/10 bg-gradient-to-br from-orange-600/20 to-red-700/20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-white text-2xl font-semibold">Digital Products</h3>
              <p className="text-slate-200 mt-1 max-w-2xl">Templates, tools, and practical guides designed for researchers, builders, and product teams.</p>
            </div>
            <Link to="/products" className="inline-flex items-center rounded-lg bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 text-sm font-semibold transition">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
