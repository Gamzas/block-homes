import '@/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import MainPage from '@pages/MainPage'
import { GlobalStyle } from '@style/GlobalStyles'
import RealEstatePage from '@pages/RealEstatePage'
import SmartContract from './pages/SmartContract/SmartContract'
import RealEstateListPage from '@pages/RealEstateListPage'
import IntroPage from '@pages/IntroPage'
import SignInPage from '@pages/SignInPage'
import CheckDidPage from '@pages/CheckDidPage'
import SelfCheckDidPage from '@pages/SelfCheckDidPage'

const HomeRoutes = () => (
  <Routes>
    <Route path="/intro" element={<IntroPage />} />
    <Route path="/signin" element={<SignInPage />} />
    <Route path="/" element={<MainPage />} />
    <Route path="/check-did" element={<CheckDidPage />} />
    <Route path="/self-check-did" element={<SelfCheckDidPage />} />
    <Route path="/estate" element={<RealEstatePage />}>
      <Route path="" element={<RealEstateListPage />} />
    </Route>
    <Route path="/smart-contract" element={<SmartContract />} />
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
