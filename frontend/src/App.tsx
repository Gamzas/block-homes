import '@/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import MainPage from '@pages/MainPage'
import { GlobalStyle } from '@style/GlobalStyles'
import RealEstatePage from '@pages/RealEstatePage'
import SmartContractStart from './pages/SmartContractStart'

const HomeRoutes = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/estate" element={<RealEstatePage />} />
    <Route path="/smart-contract-start" element={<SmartContractStart />} />
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
