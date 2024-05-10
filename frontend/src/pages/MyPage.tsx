import Footer from '@/common/Footer'
import Login from '@/components/MyPage/Login'
import Logout from '@/components/MyPage/Logout'
import MemberCard from '@/components/MyPage/MemberCard'
import MyPageMenu from '@/components/MyPage/MyPageMenu'
import MyVCCard from '@/components/MyPage/MyVCCard'
import MyWallet from '@/components/MyPage/MyWallet'
import * as m from '@pages/style/MyPageStyle'
import { memberAtom } from '@/stores/atoms/userStore'
import { useAtom } from 'jotai'

const MyPage = () => {
  // DELETE 임시
  const [member] = useAtom(memberAtom)

  return (
    <m.Container>
      {member ? (
        <>
          <MemberCard />
          <MyWallet />
          <MyVCCard />
          <MyPageMenu />
          <Logout />
          <Footer />
        </>
      ) : (
        <Login />
      )}
    </m.Container>
  )
}

export default MyPage
