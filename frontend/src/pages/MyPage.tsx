import Footer from '@/common/Footer'
import Card from '@/components/MyPage/Card'
import MenuList from '@/components/MyPage/MenuList'
import * as m from '@pages/style/MyPageStyle'
const MyPage = () => {
  return (
    <m.Container>
      <Card />
      <MenuList />
      <Footer />
    </m.Container>
  )
}

export default MyPage
