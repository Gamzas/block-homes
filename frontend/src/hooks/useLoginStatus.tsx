import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { userAtom } from '@stores/atoms/userStore'
import { useAtom } from 'jotai'

const useLoginStatus = () => {
  const navigate = useNavigate()
  const [user, setUser] = useAtom(userAtom)
  useEffect(() => {
    if (user.name === '') {
      alert('로그인 후 이용해주세요')
    }
  }, [navigate, user, setUser])
}
export default useLoginStatus
