import CompletePigContainer from '@/common/CompletePigContainer'
import { CustomButtonStyle } from '@common/style/CustomButtonStyle'
import { useNavigate } from 'react-router-dom'
import { ContractCompleteContainer } from './style/ContractCompleteStyle'

const ContractComplete = () => {
  const navigate = useNavigate()
  const hadleHome = () => {
    navigate(-1)
  }
  return (
    <ContractCompleteContainer>
      <CompletePigContainer></CompletePigContainer>
      <div className="complete-text">거래가 완료되었습니다</div>
      <div className="button-box">
        <CustomButtonStyle onClick={hadleHome}>결제 완료</CustomButtonStyle>
      </div>
    </ContractCompleteContainer>
  )
}

export default ContractComplete
