import Navbar from '../components/Navbar'
import { useParams } from 'react-router-dom'

const DETAILS = {
  'neural-decoding': {
    title: 'Neural Decoding Research',
    challenge: 'Extract meaningful cognitive state signals from noisy EEG/MEG recordings.',
    process: 'Designed experiments, preprocessed data (ICA, filtering), engineered features, and evaluated decoding using classical ML and deep learning baselines.',
    solution: 'Built reproducible pipelines and dashboards for rapid iteration and interpretation.',
    results: 'Improved decoding accuracy and delivered insights for cognitive-state tracking.',
  },
  'mindex-neurotechnology': {
    title: 'Mindex Neurotechnology (BCI)',
    challenge: 'Validate market needs while advancing robust BCI prototypes.',
    process: 'Led product discovery, technical prototyping, and partnerships with labs and clinics.',
    solution: 'Shipped functional demos exploring assistive communication and neurofeedback.',
    results: 'Secured pilot interest and learned from early adopters to steer roadmap.',
  },
  'iykra-genai': {
    title: 'Gen‑AI Products @ IYKRA',
    challenge: 'Scale knowledge retrieval and content generation for internal teams.',
    process: 'Scoped PRDs, integrated LLM APIs, built guardrails, and instrumented analytics.',
    solution: 'Suite of tools for research workflows, summarization, and template-driven outputs.',
    results: 'Reduced research/ops time and standardized deliverables across teams.',
  },
  'conversation-practice': {
    title: 'Conversation Practice Tool',
    challenge: 'Create realistic language practice without human tutors.',
    process: 'Modeled scenario templates, scoring rubrics, and feedback loops.',
    solution: 'Interactive practice flows with adaptive prompts and feedback.',
    results: 'Higher user engagement and measurable improvement across sessions.',
  },
  'local-llm': {
    title: 'Local LLM Interface',
    challenge: 'Run local models with a simple, transparent interface.',
    process: 'Evaluated backends, designed prompt/run abstractions, and built a minimal UI.',
    solution: 'Unified interface with profiles, prompts, and output logging.',
    results: 'Enabled privacy-first workflows and offline experimentation.',
  },
}

export default function WorkDetailPage() {
  const { slug } = useParams()
  const d = DETAILS[slug]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-12">
        {!d ? (
          <p>Project not found.</p>
        ) : (
          <>
            <h1 className="text-3xl font-semibold">{d.title}</h1>
            <div className="mt-6 grid gap-6">
              <Section title="Challenge" text={d.challenge} />
              <Section title="Process" text={d.process} />
              <Section title="Solution" text={d.solution} />
              <Section title="Results" text={d.results} />
            </div>
          </>
        )}
      </main>
    </div>
  )
}

function Section({ title, text }) {
  return (
    <section className="rounded-2xl bg-slate-900/70 ring-1 ring-white/10 p-6">
      <h2 className="text-white font-semibold">{title}</h2>
      <p className="text-slate-300 mt-2">{text}</p>
    </section>
  )
}
