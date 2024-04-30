import * as s from '../style/SmartContract'
import Footer from '@/common/Footer'
import Header from '@/common/Header'
import ConstractPayment from '@/components/SmartContract/ConstractPayment'
import ContractAgree from '@/components/SmartContract/ContractAgree'
import ContractMain from '@/components/SmartContract/ContractMain'
import ContractStart from '@/components/SmartContract/ContractStart'
import { readContractStepAtom } from '@/stores/smartcontract'
import { useAtom } from 'jotai'

const SmartContract = () => {
  const [step] = useAtom(readContractStepAtom)

  return (
    <s.ContractContainer>
      <Header
        title="부동산 시작"
        isSearch={false}
        rightIconSrc={step === 2 ? 'public/icon/icon_download.png' : ''}
      ></Header>
      {step === 0 && <ContractStart />}
      {step === 1 && <ContractAgree />}
      {step === 2 && <ContractMain />}
      {step === 3 && <ConstractPayment />}
    </s.ContractContainer>
  )
}

export default SmartContract
