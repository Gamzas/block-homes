import * as h from '@pages/style/MainPageStyle'
import Header from '@common/Header'
import Footer from '@common/Footer'
import TopCard from '@components/MainPage/TopCard'

const MainPage = () => {
  return (
    <h.Container>
      <Header />
      <TopCard />
      <Footer />
    </h.Container>
  )
}

export default MainPage
