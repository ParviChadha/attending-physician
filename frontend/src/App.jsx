import { Route, Routes } from 'react-router-dom'

import ChatPage from './pages/Chat'
import LandingPage from './pages/Landing'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/chat" element={<ChatPage />} />
      <Route path="*" element={<LandingPage />} />
    </Routes>
  )
}

export default App
