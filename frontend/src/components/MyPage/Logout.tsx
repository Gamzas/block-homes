import * as l from '@components/MyPage/style/LogoutStyle'
import { useNavigate } from 'react-router-dom'
import { useSetAtom } from 'jotai'
import { userAtom } from '@stores/atoms/userStore'

const Logout = () => {
  const navigate = useNavigate()
  const setUser = useSetAtom(userAtom)

  const logout = () => {
    setUser({ walletAddress: '', name: '' })
    navigate('/intro')
  }
  return (
    <l.LogoutWrapper>
      <l.LogoutContainer onClick={logout}>
        <div className="txt">로그아웃</div>
      </l.LogoutContainer>
    </l.LogoutWrapper>
  )
}

export default Logout
