// SmartContractPage.tsx
import React, { useEffect, useState } from 'react'
import * as s from './style/SmartContract'
import Header from '@/common/Header'
import ContractPayment from '@/components/SmartContract/ContractPayment'
import ContractAgree from '@/components/SmartContract/ContractAgree'
import ContractMain from '@/components/SmartContract/ContractMain'
import ContractStart from '@/components/SmartContract/ContractStart'
import { contractStepAtom, readContractStepAtom } from '@/stores/smartcontract'
import { useAtom, useAtomValue } from 'jotai'
import ContractComplete from '../components/SmartContract/ContractComplete'
import WaveContainer from '@/common/WaveContainer'
import { Button } from '@mui/material'
import CustomModal from '@/common/CustomModal'
import {
  deployContract,
  getContractInstance,
  getMessageHash,
} from '@/abi/userSmartContract/DeployLongTermRentContract'
import { ethers } from 'ethers'
import { userAtom } from '@stores/atoms/userStore'
import { useGetWallet } from '@/apis/walletApi'
import { BLOCK_CHAIN_ENDPOINT } from '@constants/abi/abi'
import CustomPasswordModal from '@/components/SmartContract/CustomPasswordModal'
import { Snackbar } from '@mui/material'

const SmartContractPage = () => {
  const [step, setStep] = useAtom(contractStepAtom)
  const [open, setOpen] = useState(false)

  // 비밀번호 오류 컴포넌트
  const [snackbarOpen, setSnackbarOpen] = useState(false)
  const [snackbarMessage, setSnackbarMessage] = useState('')

  const [password, setPassword] = useState('')
  // const [userWallet, setUserWallet] = useState(null)
  const [passwordModalOpen, setPasswordModalOpen] = useState(false)

  // 지갑 불러오기(wallet) 비밀번호 쳐서 여는 로직 필요~~
  const currentUser = useAtomValue(userAtom)
  const { data: getWalletData } = useGetWallet({
    walletAddress: currentUser.walletAddress,
  })
  // 콘솔 확인창
  console.log('getWalletData', getWalletData)
  console.log('password', password)

  // 계약서 주소
  const [deploymentInfo, setDeploymentInfo] = useState('')

  useEffect(() => {
    setStep(0)
  }, [])

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const dummyData = {
    // 임대인 지갑주소
    landlordDID: '0xeD739565D59219A4bDac5A958A803ec4bdD07b45',
    // 임차인 지갑주소
    tenantDID: '0xdcb514da532854cA22F07920515f275217d15c6e',
    leasePeriod: 12,
    deposit: ethers.utils.parseEther('1.0').toString(), // 1 ETH in wei // 보증금
    propertyDID: 'did:example:abcdef123456789', // 부동산의 분산식 식별자
    contractDate: Math.floor(Date.now() / 1000), // Current Unix timestamp
    terms: [
      '잔금일까지 해당 주택에 근저당 추가 설정하지 않는다.',
      '계약기간이 만료되면 새 임차인을 구하는 여부와 관계 없이 만료일에 보증금을 반환해준다.',
      '만기전 퇴거 시 새 임차인의 중개보수를 임차인이 부담한다.',
      '만기전 퇴거 시 새 임차인의 중개보수를 임차인이 부담한다.',
    ],
  }

  const handlePasswordConfirm = (password: string) => {
    setPassword(password)
    setPasswordModalOpen(false)
  }
  /// 거래시작 시 버튼 누르는 과정이 필요~~
  const handleDeploy = async () => {
    if (!getWalletData && !password) {
      alert('getWalletData,password')
      return
    }

    try {
      // 1.암호화된 지갑 데이터 복원
      const userWallet = await ethers.Wallet.fromEncryptedJson(
        getWalletData.data.encPrivateKey,
        password,
      )

      // 1.5서명할 메시지 준비 (예시: "임대 계약 승인")

      const messageHash = getMessageHash(dummyData)

      // 메시지에 대한 서명 생성
      const signature = await userWallet.signMessage(
        ethers.utils.arrayify(messageHash),
      )
      // 서명을 r, s, v로 분할
      const sig = ethers.utils.splitSignature(signature)

      // 2. 이더리움 네트워크 연결
      const provider = new ethers.providers.JsonRpcProvider(
        BLOCK_CHAIN_ENDPOINT,
      )
      // 3. 지갑을provider에 연결
      const signer = userWallet.connect(provider)

      const result = await deployContract(
        signer,
        dummyData.landlordDID,
        dummyData.tenantDID,
        dummyData.leasePeriod,
        dummyData.deposit,
        dummyData.propertyDID,
        dummyData.contractDate,
        dummyData.terms,
        sig,
      )

      console.log()
      // 1차 완료계약서 주소 저장완료 전역 저장해서 관리하기
      setDeploymentInfo(result)

      console.log('성공요result', result)

      console.log('성공요deploymentInfo', deploymentInfo)

      setSnackbarMessage('계약서가 성공적으로 블록체인에 등록되었습니다.')
      setSnackbarOpen(true)
    } catch (error) {
      if (error.message.includes('invalid password')) {
        setSnackbarMessage('잘못된 비밀번호입니다. 다시 시도하세요.')
      } else {
        setSnackbarMessage(`실패: ${error.message}`)
        console.log('실패요', deploymentInfo)
      }
      setSnackbarOpen(true)
    }
  }

  // 임차인이 보증금을 지불하는 함수
  const handlePayDeposit = async () => {
    // 지갑 데이터와 비밀번호가 있는지 확인
    if (getWalletData && password) {
      try {
        // EncryptedJson을 사용하여 지갑을 복원
        const tenantWallet = await ethers.Wallet.fromEncryptedJson(
          getWalletData.data.encPrivateKey,
          password,
        )

        // 이더리움 메인넷에 연결하기 위해 provider 생성
        const provider = new ethers.providers.JsonRpcProvider(
          BLOCK_CHAIN_ENDPOINT,
        )

        // 지갑을 provider에 연결하여 signer 생성
        const tenantSigner = tenantWallet.connect(provider)

        // 스마트 계약 인스턴스 생성
        const contract = getContractInstance(deploymentInfo, tenantSigner)

        // 보증금 지불 트랜잭션 생성
        const tx = await contract.payDeposit({
          value: ethers.utils.parseEther('1.0'), // dummyData.deposit을 사용하는 경우 이를 대체
        })

        // 트랜잭션이 완료될 때까지 대기
        await tx.wait()
        console.log('보증금 지불 성공:', tx)
        setSnackbarMessage('보증금 지불 성공')
        setSnackbarOpen(true)
      } catch (error) {
        console.error('보증금 지불 실패:', error)
      }
    } else {
      alert('지갑 정보를 불러오거나 비밀번호를 입력하세요.')
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

      <Button onClick={() => setPasswordModalOpen(true)}>Enter Password</Button>
      <Button onClick={handleDeploy}>Deploy Contract</Button>
      <Button onClick={handlePayDeposit}>Pay Deposit</Button>
      <CustomModal
        open={open}
        handleClose={handleClose}
        title="나가시겠습니까?"
        description="계약 중 나가면 처음부터 시작해야합니다."
      />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        onClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
      />

      <CustomPasswordModal
        open={passwordModalOpen}
        handleClose={() => setPasswordModalOpen(false)}
        handleConfirm={handlePasswordConfirm}
      />
    </s.ContractContainer>
  )
}

export default SmartContractPage
