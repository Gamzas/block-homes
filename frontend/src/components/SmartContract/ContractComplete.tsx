import CompletePigContainer from '@/common/CompletePigContainer'
import { CustomButtonStyle } from '@common/style/CustomButtonStyle'
import { useNavigate } from 'react-router-dom'
import { ContractCompleteContainer } from './style/ContractCompleteStyle'
import Gauge from '../Report/Gauge'

const ContractComplete = () => {
  const navigate = useNavigate()
  const hadleHome = () => {
    navigate('/')
  }
  return (
    <ContractCompleteContainer>
      <Gauge steps={5} />
      <CompletePigContainer></CompletePigContainer>
      <div className="complete-text">거래가 완료되었습니다</div>
      <div className="button-box">
        <CustomButtonStyle onClick={hadleHome}>결제 완료</CustomButtonStyle>
      </div>
    </ContractCompleteContainer>
  )
}

export default ContractComplete
