import '@/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import MainPage from '@pages/MainPage'
import { GlobalStyle } from '@style/GlobalStyles'
import RealEstatePage from '@pages/RealEstatePage'
import SmartContract from './pages/SmartContract/SmartContract'
import SmartContractPayment from './pages/SmartContract/SmartContractPayment'
import RealEstateMapPage from '@pages/RealEstateMapPage'
import RealEstateListPage from '@pages/RealEstateListPage'

const HomeRoutes = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/estate" element={<RealEstatePage />}>
      <Route path="" element={<RealEstateListPage />} />
      <Route path="map" element={<RealEstateMapPage />} />
    </Route>
    <Route path="/smart-contract" element={<SmartContract />} />

    <Route path="/smart-contract-payment" element={<SmartContractPayment />} />
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
