import Step from '@/components/SmartContract/Step'
import * as s from '../style/SmartContract'
import ContractAgree from '@/components/SmartContract/ContractAgree'
import { Button } from '@/common/style/Button'
import { HeaderContainer } from '@/common/style/HeaderStyle'
import Footer from '@/common/Footer'
import { useNavigate } from 'react-router-dom'

const SmartContractAgreement = () => {
  const navigate = useNavigate()
  const handleAgree = () => {
    navigate('/smart-contract-main')
  }

  return (
    <s.ContractAgreeContainer>
      <HeaderContainer style={{ border: '1px solid' }}></HeaderContainer>
      <Step currentindex={0}></Step>
      <ContractAgree></ContractAgree>
      <Button onClick={handleAgree}>필수 약관 모두 동의하기</Button>
      <Footer></Footer>
    </s.ContractAgreeContainer>
  )
}

export default SmartContractAgreement
