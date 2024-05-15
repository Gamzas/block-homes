import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const useLoginStatus = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const currentUser = localStorage.getItem('currentUser')
    const currentUserData = currentUser ? JSON.parse(currentUser) : null
    if (currentUserData && currentUserData.walletAddress) {
      return
    } else {
      alert('로그인 후 이용해주세요')
      navigate('/signin')
    }
  }, [])
}

export default useLoginStatus
