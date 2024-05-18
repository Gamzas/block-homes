// SmartContractPage.tsx s s
import { useEffect, useState } from 'react'
import * as s from './style/SmartContract'
import Header from '@/common/Header'
import ContractPayment from '@/components/SmartContract/ContractPayment'
import ContractAgree from '@/components/SmartContract/ContractAgree'
import ContractMain from '@/components/SmartContract/ContractMain'
import ContractStart from '@/components/SmartContract/ContractStart'
import {
  contractStepAtom,
  landLordAtom,
  tenantAtom,
  contractMonthsAtom,
} from '@/stores/smartcontract'
import { useAtom, useAtomValue, useSetAtom } from 'jotai'
import ContractComplete from '../components/SmartContract/ContractComplete'
import WaveContainer from '@/common/WaveContainer'
import { Button, Snackbar } from '@mui/material'
import CustomModal from '@/common/CustomModal'
import {
  deployContract,
  getContractInstance,
} from '@/abi/userSmartContract/DeployLongTermRentContract'
import { ethers } from 'ethers'
import { userAtom } from '@stores/atoms/userStore'
import { useGetWallet } from '@/apis/walletApi'
import { BLOCK_CHAIN_ENDPOINT } from '@constants/abi/abi'
import CustomPasswordModal from '@/components/SmartContract/CustomPasswordModal'
import { getContractInfo } from '@/abi/userSmartContract/getContractInfo'
import { useGetDetailItem } from '@/apis/itemApi'
import { DetailItemType } from '@/types/components/contractType'
import { useQuery } from '@tanstack/react-query'
import { fetchChatRoomDetail } from '@/apis/chatApi'
import { convertToDid } from '@/hooks/didMake'
import {
  fetchTempContractAddress,
  useRegisterContractAddress,
  useSaveContractAddress,
} from '@/apis/contractApi'
import { useParams } from 'react-router-dom'

const SmartContractPage = () => {
  const setContractMonths = useSetAtom(contractMonthsAtom)
  const setLandLord = useSetAtom(landLordAtom)
  const setTenant = useSetAtom(tenantAtom)
  const [step, setStep] = useAtom(contractStepAtom)
  const [open, setOpen] = useState(false)

  const { chatRoomNo } = useParams()
  // console.log('chatRoomNo', chatRoomNo)
  const chatRoomNumber = Number(chatRoomNo)

  //삭제 코드
  const { data: contractAddress } = useQuery({
    queryKey: ['fetchTempContractAddress', chatRoomNumber],
    queryFn: () => fetchTempContractAddress(chatRoomNumber),
    enabled: !!chatRoomNumber,
  })

  console.log('@@@@@@@@@@@@@@@@@@@@miiii', contractAddress)

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
  console.log('deploymentInfo', deploymentInfo)

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

  // 더미 추가 공간
  // 매물넘버
  const [estateNumber, setEstateNumber] = useState(0)

  const { data: itemDetails } = useGetDetailItem(
    estateNumber,
    currentUser.walletAddress,
  )

  const [terms, setTerms] = useState('')
  const [landlordDID, setLandlordDID] = useState('')
  const [tenantDID, setTenantDID] = useState('')
  const [landlordDID2, setLandlordDID2] = useState('')
  const [tenantDID2, setTenantDID2] = useState('')

  // 유저 지갑 주소로 이름 받아서 계약서에 넘기기 필요
  // const { data: getWalletData } = useGetWallet({
  //   walletAddress: currentUser.walletAddress,
  // })

  // 해결
  const [contractDate, setContractDate] = useState(formattedToday)
  const [leasePeriod, setLeasePeriod] = useState(0)
  const [deposit, setDeposit] = useState('')
  const [propertyDID, setPropertyDID] = useState('')
  const [estateInfo, setEstateInfo] = useState<DetailItemType | null>(null)

  useEffect(() => {
    if (itemDetails) {
      setLeasePeriod(itemDetails.contractMonths)
      setDeposit(
        ethers.utils.parseEther(itemDetails.price.toString()).toString(),
      )
      setPropertyDID(itemDetails.realEstateDID)
      setEstateInfo(itemDetails)
      setContractMonths(itemDetails.contractMonths)
    }
  }, [itemDetails])

  console.log('contractDate:', contractDate)
  console.log('leasePeriod:', leasePeriod)
  console.log('deposit:', deposit)
  console.log('propertyDID:', propertyDID)
  console.log('itemDetails', itemDetails)
  console.log('estateInfo', estateInfo)

  // 채팅 방 내용으로 주소 받아오기
  // 계약서 등록
  const registerContractAddress = useRegisterContractAddress()
  const registerSaveContractAddress = useSaveContractAddress()

  const { data, isLoading, refetch } = useQuery({
    queryKey: ['fetchChatRoomDetail', chatRoomNumber],
    queryFn: () => fetchChatRoomDetail(chatRoomNumber),
    enabled: !!chatRoomNumber,
  })
  useEffect(() => {
    if (data) {
      console.log('채팅정보', data)
      setLandlordDID(data.sellerWalletAddress)
      setTenantDID(data.buyerWalletAddress)
      setLandlordDID2(convertToDid(data.sellerWalletAddress))
      setTenantDID2(convertToDid(data.buyerWalletAddress))
      setEstateNumber(data.itemNo)
    }
  }, [data])

  console.log('andlordDID', landlordDID)
  console.log('TenantDID', tenantDID)
  console.log('andlordDID', landlordDID2)
  console.log('TenantDID', tenantDID2)

  // 임차인 지갑주소로 암호호된 지갑주소 불러오기

  const { data: getWalletData2 } = useGetWallet({
    walletAddress: tenantDID,
  })

  useEffect(() => {
    if (getWalletData2) {
      console.log('getWalletData2', getWalletData2)
      setLandLord({
        name: getWalletData2.data.name,
        userDID: getWalletData2.data.userDID,
        walletAddress: getWalletData2.data.walletAddress,
      })
    }
  }, [getWalletData2])

  console.log('getWalletData2', getWalletData2)
  // 임대인 지갑주소로 암호호된 지갑주소 불러오기
  const { data: getWalletData3 } = useGetWallet({
    walletAddress: landlordDID,
  })

  useEffect(() => {
    if (getWalletData3) {
      console.log('getWalletData3', getWalletData3)
      setTenant({
        name: getWalletData3.data.name,
        userDID: getWalletData3.data.userDID,
        walletAddress: getWalletData3.data.walletAddress,
      })
    }
  }, [getWalletData3])

  console.log('getWalletData2', getWalletData2)

  const handlePasswordConfirm = (password: string) => {
    setPassword(password)
    setPasswordModalOpen(false)
  }

  /// 조회 액션
  const handlelook = () => {
    getContractInfo(deploymentInfo)
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
      // 0.암호화된 지갑 데이터 복원(서명, 계약서 올리기 사용) 사용자 개인키 보관, 트랜잭션 서명
      const userWallet = await ethers.Wallet.fromEncryptedJson(
        getWalletData.data.encPrivateKey,
        password,
      )

      // 1.서명할 메시지 준비 (예시: "임대 계약 승인") 서명하는거 해쉬 만들기!!!!!!

      const message = ethers.utils.solidityKeccak256(
        ['string', 'string', 'uint16', 'uint256', 'string', 'string', 'string'],
        [
          landlordDID2.toLowerCase(),
          tenantDID2.toLowerCase(),
          leasePeriod, // 숫자형 데이터는 toLowerCase() 적용 필요 없음
          deposit, // 숫자형 데이터는 toLowerCase() 적용 필요 없음
          propertyDID.toLowerCase(),
          contractDate, // 숫자형 데이터는 toLowerCase() 적용 필요 없음
          terms.toLowerCase(),
        ],
      )
      const messageBytes = ethers.utils.arrayify(message)
      const signature = await userWallet.signMessage(messageBytes)
      const sig = ethers.utils.splitSignature(signature)
      console.log(sig)

      // 2.1 이더리움 네트워크 연결
      const provider = new ethers.providers.JsonRpcProvider(
        BLOCK_CHAIN_ENDPOINT,
      )
      // 2.2 지갑과 프로바이더를 결합
      const signer = userWallet.connect(provider)

      // 계약서 넣을 내용과, 지갑 프로바이더 결합, 서명을 보내기
      const result = await deployContract(
        signer,
        landlordDID,
        tenantDID,
        leasePeriod,
        deposit,
        propertyDID,
        contractDate,
        terms,
        sig,
      )

      // 1차 완료계약서 주소 저장완료 전역 저장해서 관리하기
      setDeploymentInfo(result)

      console.log('성공요result', result)

      console.log('성공요deploymentInfo', deploymentInfo)

      setSnackbarMessage('계약서가 성공적으로 블록체인에 등록되었습니다.')
      setSnackbarOpen(true)
      setStep(step + 1)
      // 계약서 주소 서버에 등록
      console.log(chatRoomNumber, result, '이게들어가유')

      // registerContractAddress.mutate({
      //   chatRoomNo: chatRoomNumber, // 여기에 채팅 방 번호를 사용하세요
      //   contractAddress: result,
      // })

      registerSaveContractAddress.mutate({
        chatRoomNo: chatRoomNumber, // 여기에 채팅 방 번호를 사용하세요
        contractAddress: result,
      })
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

  console.log('deposit', deposit)

  console.log(
    '@@@@@@@@@@@@@ contractAddress?.tempContractAddress',
    contractAddress?.tempContractAddress,
  )
  const handleSignAndPayDeposit = async password => {
    if (!password) {
      alert('지갑 정보와 비밀번호를 확인해주세요.')
      return
    }
    try {
      // 1. 지갑에 개인키와 비밀번호 담아서 트랜잭션 서명 때 쓸 지갑 생성(네트워크 서버와 연결)
      const tenantWallet = await ethers.Wallet.fromEncryptedJson(
        getWalletData2.data.encPrivateKey,
        password,
      )

      console.log('@@@tenantWallet', tenantWallet)

      const provider = new ethers.providers.JsonRpcProvider(
        BLOCK_CHAIN_ENDPOINT,
      )

      // 지갑을 provider에 연결하여 signer 생성
      const tenantSigner = tenantWallet.connect(provider)
      console.log('11tenantSigner', tenantSigner)

      // 2. 스마트 계약 인스턴스 생성(스마트계약 주소 필요)
      const contract = getContractInstance(
        contractAddress?.tempContractAddress,
        tenantSigner,
      )
      console.log('22contract', contract)

      // 메세지 생성 코드작성

      const message = ethers.utils.solidityKeccak256(
        ['string', 'string', 'uint16', 'uint256', 'string', 'string', 'string'],
        [
          landlordDID2.toLowerCase(),
          tenantDID2.toLowerCase(),
          leasePeriod, // 숫자형 데이터는 toLowerCase() 적용 필요 없음
          deposit, // 숫자형 데이터는 toLowerCase() 적용 필요 없음
          propertyDID.toLowerCase(),
          contractDate, // 숫자형 데이터는 toLowerCase() 적용 필요 없음
          terms.toLowerCase(),
        ],
      )
      // const userWallet = await ethers.Wallet.fromEncryptedJson(
      //   getWalletData.data.encPrivateKey,
      //   password,
      // )
      const messageBytes = ethers.utils.arrayify(message)
      const signature = await tenantWallet.signMessage(messageBytes)
      const sig = ethers.utils.splitSignature(signature)

      // 트랜잭션 같이 보내기 서명과 보증금 보내서~~

      const txResponse = await contract.tenantSign(sig.r, sig.s, sig.v, {
        value: ethers.utils.parseEther(deposit),
      })

      // const receipt = await payDepositAndSign(contract, sig, dummyData.deposit)
      const receipt = await txResponse.wait()

      console.log('Transaction receipt:', receipt)
      setSnackbarMessage('보증금 지불 및 서명이 성공적으로 처리되었습니다.')
      setSnackbarOpen(true)

      registerContractAddress.mutate({
        chatRoomNo: chatRoomNumber, // 여기에 채팅 방 번호를 사용하세요
        contractAddress: contractAddress?.tempContractAddress,
      })
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
      {step === 0 && (
        <ContractStart currentUser={currentUser} propertyDID={propertyDID} />
      )}
      {step === 1 && <ContractAgree />}
      {step === 2 && <ContractMain estateInfo={estateInfo} />}
      {step === 3 && (
        <ContractPayment
          handlePayment={handleSignAndPayDeposit}
          currentUser={currentUser}
          propertyDID={propertyDID}
          estateInfo={estateInfo}
        />
      )}
      {step === 4 && <ContractComplete />}
      <Button onClick={handleOpen}></Button>

      <Button onClick={() => setPasswordModalOpen(true)}>Enter Password</Button>
      <Button onClick={handleDeploy}>Deploy Contract</Button>
      {/* <Button onClick={handleSignAndPayDeposit}>Pay Deposit</Button> */}
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
