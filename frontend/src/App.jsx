import { Route, Routes } from 'react-router-dom'

import NewChat from './pages/NewChat'
import LandingPage from './pages/Landing'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/chat" element={<NewChat />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  )
}

export default App
