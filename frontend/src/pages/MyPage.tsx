import Footer from '@/common/Footer'
import Logout from '@/components/MyPage/Logout'
import MemberCard from '@/components/MyPage/MemberCard'
import MyVCCard from '@/components/MyPage/MyVCCard'
import MyWallet from '@/components/MyPage/MyWallet'
import * as m from '@pages/style/MyPageStyle'

const MyPage = () => {
  return (
    <m.Container>
      <MemberCard />
      <MyWallet />
      <MyVCCard />
      <Logout />
      <Footer />
    </m.Container>
  )
}

export default MyPage
