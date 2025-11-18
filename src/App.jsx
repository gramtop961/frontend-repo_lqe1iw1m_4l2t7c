import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import WorkPage from './pages/Work'
import WorkDetailPage from './pages/WorkDetail'
import AboutPage from './pages/About'
import CVPage from './pages/CV'
import ProductsPage from './pages/Products'
import SecondBrainPage from './pages/SecondBrain'
import ContactPage from './pages/Contact'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/work" element={<WorkPage />} />
      <Route path="/work/:slug" element={<WorkDetailPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/cv" element={<CVPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/second-brain" element={<SecondBrainPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  )
}

export default App
