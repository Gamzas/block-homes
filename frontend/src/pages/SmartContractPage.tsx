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
import { deployContract } from '@/abi/userSmartContract/DeployLongTermRentContract'
import { ethers } from 'ethers'

// // 더미 서명 생성 함수
// function generateDummySignature() {
//   let signature =
//     '0x' +
//     [...Array(128)] // 64바이트(128자리 16진수)
//       .map(() => Math.floor(Math.random() * 16).toString(16))
//       .join('')
//   return signature
// }

// function isValidHexString(str) {
//   return /^0x[0-9A-Fa-f]{128}$/.test(str) // 128자리 16진수 문자열인지 확인
// }

const SmartContractPage = () => {
  const [step, setStep] = useAtom(contractStepAtom)
  const [open, setOpen] = useState(false)
  const [deploymentInfo, setDeploymentInfo] = useState('')

  useEffect(() => {
    setStep(0)
  }, [])

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const dummyData = {
    landlordDID: 'did:example:123456789abcdef',
    tenantDID: 'did:example:fedcba987654321',
    leasePeriod: 12,
    deposit: ethers.utils.parseEther('1.0').toString(), // 1 ETH in wei
    propertyDID: 'did:example:abcdef123456789',
    contractDate: Math.floor(Date.now() / 1000), // Current Unix timestamp
    terms: ['No smoking', 'No pets'],
  }
  const privateKey =
    '0x094221b92b0197f6eae4952006599011951104c4f48ae7af301ef319b7109e73'

  const handleDeploy = async () => {
    if (!privateKey) {
      alert('Please enter a private key.')
      return
    }

    try {
      // 실제 스마트컨트랙트 배포하도록 인증 받은 지갑이나 암호를 제공해야함..!
      // const landlordSignature = generateDummySignature()
      // const tenantSignature = generateDummySignature()

      // if (
      //   !isValidHexString(landlordSignature) ||
      //   !isValidHexString(tenantSignature)
      // ) {
      //   throw new Error('Invalid signature format.')
      // }

      const result = await deployContract(
        privateKey,
        dummyData.landlordDID,
        dummyData.tenantDID,
        dummyData.leasePeriod,
        dummyData.deposit,
        dummyData.propertyDID,
        dummyData.contractDate,
        dummyData.terms,
      )
      setDeploymentInfo(result)
      console.log('성공요', deploymentInfo)
    } catch (error) {
      setDeploymentInfo(error.message)
      console.log('실패요', deploymentInfo)
    }
  }
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
      <Button onClick={handleDeploy}>Deploy Contract</Button>
      <CustomModal
        open={open}
        handleClose={handleClose}
        title="나가시겠습니까?"
        description="계약 중 나가면 처음부터 시작해야합니다."
      />
    </s.ContractContainer>
  )
}

export default SmartContractPage
