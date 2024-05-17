// SmartContractPage.tsx s s
import { useEffect, useState } from 'react'
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
  fetchContractData,
  getContractInstance,
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

  console.log('currentUser', currentUser.walletAddress)

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

  const today = new Date()
  const year = today.getFullYear()
  const month = String(today.getMonth() + 1).padStart(2, '0') // 월은 0부터 시작하므로 +1
  const day = String(today.getDate()).padStart(2, '0')
  const formattedToday = `${year}-${month}-${day}`
  const dummyData = {
    // 임대인 지갑주소
    landlordDID: '0x0655bB0C1A760BbC6bC0970eDe5d9C8f687185f3',
    // 임차인 지갑주소
    tenantDID: '0xa7036441C32731c660ee9a00C4BFFC8578A37533',
    landlordDID2: 'did:klay:0x0655bB0C1A760BbC6bC0970eDe5d9C8f687185f3',
    tenantDID2: 'did:klay:0xa7036441C32731c660ee9a00C4BFFC8578A37533',
    leasePeriod: 12,
    deposit: ethers.utils.parseEther('0.1').toString(), // 1 ETH in wei // 보증금
    propertyDID: 'did:klay:abcdef123456789', // 부동산의 분산식 식별자
    contractDate: formattedToday, // Current Unix timestamp
    terms:
      '잔금일까지 해당 주택에 근저당 추가 설정하지 않는다/계약기간이 만료되면 새 임차인을 구하는 여부와 관계 없이 만료일에 보증금을 반환해준다/만기전 퇴거 시 새 임차인의 중개보수를 임차인이 부담한다/만기전 퇴거 시 새 임차인의 중개보수를 임차인이 부담한다',
  }

  // 계약 시작 날짜를 특정 형식으로 변환

  // console.log('dummyData.tenantDID', dummyData.tenantDID)
  console.log(dummyData.contractDate)
  // 임차인 지갑주소로 암호호된 지갑주소 불러오기
  const { data: getWalletData2 } = useGetWallet({
    walletAddress: dummyData.tenantDID,
  })
  console.log('getWalletData2', getWalletData2)

  const handlePasswordConfirm = (password: string) => {
    setPassword(password)
    setPasswordModalOpen(false)
  }

  /// 조회 액션
  const handlelook = () => {
    fetchContractData(deploymentInfo)
      .then(data => {
        console.log('Fetched Contract Data:', data)
      })
      .catch(error => {
        console.error('Failed to fetch contract data:', error)
      })
  }

  /// 거래시작 시 버튼 누르는 과정이 필요~~
  const handleDeploy = async password => {
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
      console.log('userWallet', userWallet)

      // 1.5서명할 메시지 준비 (예시: "임대 계약 승인") 서명하는거 해쉬 만들기!!!!!!

      const message = ethers.utils.solidityKeccak256(
        ['string', 'string', 'uint16', 'uint256', 'string', 'string', 'string'],
        [
          dummyData.landlordDID2.toLowerCase(),
          dummyData.tenantDID2.toLowerCase(),
          dummyData.leasePeriod, // 숫자형 데이터는 toLowerCase() 적용 필요 없음
          dummyData.deposit, // 숫자형 데이터는 toLowerCase() 적용 필요 없음
          dummyData.propertyDID.toLowerCase(),
          dummyData.contractDate, // 숫자형 데이터는 toLowerCase() 적용 필요 없음
          dummyData.terms.toLowerCase(),
        ],
      )
      const messageBytes = ethers.utils.arrayify(message)
      const signature = await userWallet.signMessage(messageBytes)
      const sig = ethers.utils.splitSignature(signature)
      console.log(sig)

      // const messageHash = getMessageHash(dummyData)

      // // 메시지에 대한 서명 생성
      // const signature = await userWallet.signMessage(
      //   ethers.utils.arrayify(messageHash),
      // )
      // // 서명을 r, s, v로 분할
      // const sig = ethers.utils.splitSignature(signature)

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
      setStep(step + 1)
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

  const handleSignAndPayDeposit = async () => {
    if (!password) {
      alert('지갑 정보와 비밀번호를 확인해주세요.')
      return
    }
    try {
      // 1.지갑 복원
      const tenantWallet = await ethers.Wallet.fromEncryptedJson(
        getWalletData2.data.encPrivateKey,
        password,
      )

      // 2. 이더리움 메인넷에 연결하기 위해 provider 생성
      const provider = new ethers.providers.JsonRpcProvider(
        BLOCK_CHAIN_ENDPOINT,
      )

      // 지갑을 provider에 연결하여 signer 생성
      const tenantSigner = tenantWallet.connect(provider)
      console.log('11tenantSigner', tenantSigner)

      // 3. 스마트 계약 인스턴스 생성
      const contract = getContractInstance(deploymentInfo, tenantSigner)
      console.log('22contract', contract)

      // 메세지 생성 코드작성

      const message = ethers.utils.solidityKeccak256(
        ['string', 'string', 'uint16', 'uint256', 'string', 'string', 'string'],
        [
          dummyData.landlordDID2.toLowerCase(),
          dummyData.tenantDID2.toLowerCase(),
          dummyData.leasePeriod, // 숫자형 데이터는 toLowerCase() 적용 필요 없음
          dummyData.deposit, // 숫자형 데이터는 toLowerCase() 적용 필요 없음
          dummyData.propertyDID.toLowerCase(),
          dummyData.contractDate, // 숫자형 데이터는 toLowerCase() 적용 필요 없음
          dummyData.terms.toLowerCase(),
        ],
      )
      // const userWallet = await ethers.Wallet.fromEncryptedJson(
      //   getWalletData.data.encPrivateKey,
      //   password,
      // )
      const messageBytes = ethers.utils.arrayify(message)
      const signature = await tenantWallet.signMessage(messageBytes)
      const sig = ethers.utils.splitSignature(signature)

      const txResponse = await contract.tenantSign(sig.r, sig.s, sig.v, {
        value: ethers.utils.parseEther('0.1'),
      })

      // const receipt = await payDepositAndSign(contract, sig, dummyData.deposit)
      const receipt = await txResponse.wait()

      console.log('Transaction receipt:', receipt)
      setSnackbarMessage('보증금 지불 및 서명이 성공적으로 처리되었습니다.')
      setSnackbarOpen(true)
    } catch (error) {
      console.error('보증금 지불 및 서명 처리 중 오류 발생:', error)
      alert('보증금 지불 및 서명 처리 중 오류가 발생했습니다.')
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
      {step === 3 && <ContractPayment handlePayment={handleDeploy} />}
      {step === 4 && <ContractComplete />}
      <Button onClick={handleOpen}></Button>

      <Button onClick={() => setPasswordModalOpen(true)}>Enter Password</Button>
      <Button onClick={handleDeploy}>Deploy Contract</Button>
      <Button onClick={handleSignAndPayDeposit}>Pay Deposit</Button>
      <Button onClick={handlelook}>handlelook</Button>
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
