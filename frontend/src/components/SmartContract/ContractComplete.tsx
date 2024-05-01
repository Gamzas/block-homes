import { Button } from '@/common/style/Button'
import { useNavigate } from 'react-router-dom'


const ContractComplete = () => {
    const navigate = useNavigate()
    const hadleHome =()=>{
        navigate('/')
    }
  return (
    <>
        <div>부동산 거래 완료</div>
        <Button onClick={hadleHome}>결제 완료</Button>
    </>
  )
}

export default ContractComplete