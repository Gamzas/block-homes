import * as s from '../style/SmartContract'
import Footer from '@/common/Footer'
import { HeaderContainer } from '@/common/style/HeaderStyle'
import { Button } from '@/common/style/Button'
import { useNavigate } from 'react-router-dom'

const SmartContractStart = () => {
  const navigate = useNavigate()
  const handleStart = () => {
    navigate('/smart-contract-agreement')
  }

  return (
    <s.ContractStartContainer>
      <div className="smart-contract-section">
        <HeaderContainer style={{ border: '1px solid' }}></HeaderContainer>
        <div style={{ width: '239px', height: '337px', border: '1px solid' }}>
          카드 예정
        </div>
        <Button onClick={handleStart}>부동산 거래 시작</Button>
      </div>
      <Footer></Footer>
    </s.ContractStartContainer>
  )
}

export default SmartContractStart
