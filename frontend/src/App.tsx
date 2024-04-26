import '@/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import MainPage from '@pages/MainPage'
import { GlobalStyle } from '@style/GlobalStyles'
import SmartContract from './pages/SmartContract'
import RealEstatePage from '@pages/RealEstatePage'

const HomeRoutes = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/smart-contract" element={<SmartContract />} />
    <Route path="/estate" element={<RealEstatePage />} />

  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <HomeRoutes />
      <ReactQueryDevtools initialIsOpen={false} />
    </BrowserRouter>
  )
}

export default App
