import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RedirectPage from './components/RedirectPage'
import SupercuotaPage from './components/SupercuotaPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/supercuota" element={<SupercuotaPage />} />
        <Route path="/supercuota/:slug" element={<SupercuotaPage />} />
        <Route path="/:slug" element={<RedirectPage />} />
        <Route path="/" element={<RedirectPage />} />
      </Routes>
    </Router>
  )
}

export default App



