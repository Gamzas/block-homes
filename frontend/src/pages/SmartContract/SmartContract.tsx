import * as s from '../style/SmartContract'
import Header from '@/common/Header'
import ContractPayment from '@/components/SmartContract/ContractPayment'
import ContractAgree from '@/components/SmartContract/ContractAgree'
import ContractMain from '@/components/SmartContract/ContractMain'
import ContractStart from '@/components/SmartContract/ContractStart'
import { readContractStepAtom } from '@/stores/smartcontract'
import { useAtom } from 'jotai'
import ContractComplete from '../../components/SmartContract/ContractComplete'
import WaveContainer from '@/common/WaveContainer'

const SmartContract = () => {
  const [step] = useAtom(readContractStepAtom)

  return (
    <s.ContractContainer>
      <WaveContainer></WaveContainer>
      <Header
        title="부동산 거래"
        isSearch={false}
        rightIconSrc={step === 2 ? '/icon/icon_download.png' : ''}
      ></Header>
      {step === 0 && <ContractStart />}
      {step === 1 && <ContractAgree />}
      {step === 2 && <ContractMain />}
      {step === 3 && <ContractPayment />}
      {step === 4 && <ContractComplete />}
    </s.ContractContainer>
  )
}

export default SmartContract
