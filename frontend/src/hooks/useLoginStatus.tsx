import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { userAtom } from '@stores/atoms/userStore'
import { useAtomValue } from 'jotai'

const useLoginStatus = () => {
  const navigate = useNavigate()
  const user = useAtomValue(userAtom)
  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser')
    const currentUserData = currentUser ? JSON.parse(currentUser) : null
    if (currentUserData.name === '' || !currentUserData) {
      alert('로그인 후 이용해주세요')
      navigate('/intro')
    }
  }, [navigate, user])
}
export default useLoginStatus
