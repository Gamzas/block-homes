import * as l from '@components/MyPage/style/LogoutStyle'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem('currentUser')
    navigate('/')
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
