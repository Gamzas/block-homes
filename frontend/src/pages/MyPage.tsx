import Footer from '@/common/Footer'
import Logout from '@/components/MyPage/Logout'
import MemberCard from '@/components/MyPage/MemberCard'
import MyPageMenu from '@/components/MyPage/MyPageMenu'
import MyVCCard from '@/components/MyPage/MyVCCard'
import MyWallet from '@/components/MyPage/MyWallet'
import * as m from '@pages/style/MyPageStyle'
import useLoginStatus from '@/hooks/useLoginStatus'

const MyPage = () => {
  useLoginStatus()
  return (
    <m.Container>
      <m.CardWrapper>
        <MemberCard />
      </m.CardWrapper>
      <m.ContentWrapper>
        <MyWallet />
        <MyVCCard />
        <MyPageMenu />
        <Logout />
      </m.ContentWrapper>
      <Footer />
    </m.Container>
  )
}

export default MyPage
