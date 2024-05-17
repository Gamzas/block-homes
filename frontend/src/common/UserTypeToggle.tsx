import * as u from '@common/style/UserTypeToggleStyle'
import { userTypeAtom } from '@stores/atoms/userStore'
import { useAtom } from 'jotai'

const UserTypeToggle = () => {
  const [currentUserType, setCurrentUserType] = useAtom(userTypeAtom)

  const toggleUserType = (type: number) => {
    setCurrentUserType({ type: type })
  }

  return (
    <u.UserTypeToggleContainer>
      <button
        className={`tenant ${currentUserType.type === 0 ? 'active' : ''}`}
        onClick={() => toggleUserType(0)}
      >
        임차(매수)인
      </button>
      <button
        className={`landlord ${currentUserType.type === 1 ? 'active' : ''}`}
        onClick={() => toggleUserType(1)}
      >
        임대(매도)인
      </button>
    </u.UserTypeToggleContainer>
  )
}

export default UserTypeToggle
