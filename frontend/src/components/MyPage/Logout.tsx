import { memberAtom } from '@/stores/atoms/userStore'
import * as l from '@components/MyPage/style/LogoutStyle'
import { useSetAtom } from 'jotai'

const Logout = () => {
  const setMember = useSetAtom(memberAtom)
  return (
    <l.LogoutWrapper>
      <l.LogoutContainer onClick={() => setMember(false)}>
        <div className="txt">로그아웃</div>
      </l.LogoutContainer>
    </l.LogoutWrapper>
  )
}

export default Logout
