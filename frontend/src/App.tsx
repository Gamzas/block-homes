import '@/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import HomePage from '@pages/HomePage'
import RealEstatePage from '@pages/RealEstatePage'

const HomeRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/estate" element={<RealEstatePage />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <HomeRoutes />
      <ReactQueryDevtools initialIsOpen={false} />
    </BrowserRouter>
  )
}

export default App
