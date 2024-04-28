import '@/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import MainPage from '@pages/MainPage'
import { GlobalStyle } from '@style/GlobalStyles'
import RealEstatePage from '@pages/RealEstatePage'
import SmartContractStart from './pages/SmartContractStart'
import SmartContractAgreement from './pages/SmartContractAgreement'
import SmartContractMain from './pages/SmartContractMain'
import SmartContractPayment from './pages/SmartContractPayment'
import RealEstateMapPage from '@pages/RealEstateMapPage'
import RealEstateListPage from '@pages/RealEstateListPage'

const HomeRoutes = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/estate" element={<RealEstatePage />}>
      <Route path="" element={<RealEstateListPage />} />
      <Route path="map" element={<RealEstateMapPage />} />
    </Route>
    <Route path="/smart-contract-start" element={<SmartContractStart />} />
    <Route
      path="/smart-contract-agreement"
      element={<SmartContractAgreement />}
    />
    <Route path="/smart-contract-main" element={<SmartContractMain />} />
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
