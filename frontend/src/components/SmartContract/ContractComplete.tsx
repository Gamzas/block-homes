import CompletePigContainer from '@/common/CompletePigContainer'
import { Button } from '@/common/style/Button'
import { useNavigate } from 'react-router-dom'
import { ContractCompleteContainer } from './style/ContractCompleteStyle'

const ContractComplete = () => {
  const navigate = useNavigate()
  const hadleHome = () => {
    navigate('/')
  }
  return (
    <ContractCompleteContainer>
      <CompletePigContainer></CompletePigContainer>
      <div className="complete-text">거래가 완료되었습니다</div>
      <div className="button-box">
        <Button onClick={hadleHome}>결제 완료</Button>
      </div>
    </ContractCompleteContainer>
  )
}

export default ContractComplete
