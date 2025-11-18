import Navbar from '../components/Navbar'

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-24 text-center">
        <h1 className="text-5xl font-bold text-white">404</h1>
        <p className="mt-2 text-slate-300">Page not found.</p>
        <a href="/" className="mt-6 inline-flex items-center rounded-lg bg-white/90 hover:bg-white text-slate-900 px-4 py-2 text-sm font-semibold">Back to Home</a>
      </main>
    </div>
  )
}
