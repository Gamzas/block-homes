import Footer from '@/common/Footer'
import Header from '@/common/Header'
import MyEstateList from '@/components/MyEstatePage/MyEstateList'
import * as m from '@pages/style/MyEstatePageStyle'

const MyEstatePage = () => {
  return (
    <m.container>
      <Header title={'내가 등록한 매물'} isSearch={false} rightIconSrc={''} />
      <MyEstateList />
      <Footer />
    </m.container>
  )
}

export default MyEstatePage
