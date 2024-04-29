import * as u from '@common/style/UserTypeToggleStyle'
import { userAtom } from '@stores/atoms/userStore'
import { useAtom } from 'jotai'

const UserTypeToggle = () => {
  const [currentUser, setCurrentUser] = useAtom(userAtom)

  const toggleUserType = (type: number) => {
    setCurrentUser({ type: type })
  }

  return (
    <u.UserTypeToggleContainer>
      <button
        className={`tenant ${currentUser.type === 0 ? 'active' : ''}`}
        onClick={() => toggleUserType(0)}
      >
        임차인
      </button>
      <button
        className={`landlord ${currentUser.type === 1 ? 'active' : ''}`}
        onClick={() => toggleUserType(1)}
      >
        임대인
      </button>
    </u.UserTypeToggleContainer>
  )
}

export default UserTypeToggle
