import * as s from './style/SmartContract'
import Header from '@/common/Header'
import ContractPayment from '@/components/SmartContract/ContractPayment'
import ContractAgree from '@/components/SmartContract/ContractAgree'
import ContractMain from '@/components/SmartContract/ContractMain'
import ContractStart from '@/components/SmartContract/ContractStart'
import { contractStepAtom, readContractStepAtom } from '@/stores/smartcontract'
import { useAtom } from 'jotai'
import ContractComplete from '../components/SmartContract/ContractComplete'
import WaveContainer from '@/common/WaveContainer'
import { useEffect, useState } from 'react'
import { Button, Modal } from '@mui/material'
import CustomModal from '@/common/CustomModal'

const SmartContractPage = () => {
  const [step, setStep] = useAtom(contractStepAtom)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setStep(0)
  }, [])

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <s.ContractContainer>
      <WaveContainer></WaveContainer>
      <Header
        title="부동산 거래"
        isSearch={false}
        rightIconSrc={step === 2 ? '/icon/icon_download.png' : ''}
        onModal={handleOpen}
      ></Header>
      {step === 0 && <ContractStart />}
      {step === 1 && <ContractAgree />}
      {step === 2 && <ContractMain />}
      {step === 3 && <ContractPayment />}
      {step === 4 && <ContractComplete />}
      <Button onClick={handleOpen}></Button>
      <CustomModal
        open={open}
        handleClose={handleClose}
        title="나가시겠습니까?"
        description="계약 시 나가면 처음부터 시작해야합니다."
      />
    </s.ContractContainer>
  )
}

export default SmartContractPage
