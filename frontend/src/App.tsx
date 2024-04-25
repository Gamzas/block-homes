import '@/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import HomePage from '@pages/HomePage'

const HomeRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
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
