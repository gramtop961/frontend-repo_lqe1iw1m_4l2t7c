import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import FeaturedWork from '../components/FeaturedWork'
import WhatIDo from '../components/WhatIDo'
import ProductsTeaser from '../components/ProductsTeaser'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <Hero />
      <FeaturedWork />
      <WhatIDo />
      <ProductsTeaser />
      <footer className="py-10 text-center text-sm text-slate-400">© {new Date().getFullYear()} Mondo Ardiansyah</footer>
    </div>
  )
}
