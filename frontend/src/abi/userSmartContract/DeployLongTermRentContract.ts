import { ethers } from 'ethers'
import { BLOCK_CHAIN_ENDPOINT } from '@constants/abi/abi'

import { contractABI } from '@/constants/abi/contractAbi'
import { contractBytecode } from '@/constants/bytecode/contractBytecode'

// 스마트 계약 배포 함수 수정
export const deployContract = async (
  // privateKey,
  signer, // 지갑의 개인키
  landlordDID, // 임대인의 DID
  tenantDID, // 임차인의 DID
  leasePeriod, // 임대 기간
  deposit, // 보증금
  propertyDID, // 부동산의 DID
  contractDate, // 계약 날짜
  terms, // 계약 조건
  sig, // 서명 객체
) => {
  try {
    // Infura를 통해 이더리움 메인넷에 연결
    // const provider = new ethers.providers.JsonRpcProvider(BLOCK_CHAIN_ENDPOINT)

    // 메타마스크에서 제공하는 개인 키를 사용하여 지갑 생성수정 예정
    //  이더리움 네트워크와 상호작용하기 위해 필요
    // const wallet = new ethers.Wallet(privateKey, provider)

    // 스마트 계약 팩토리 준비
    const factory = new ethers.ContractFactory(
      contractABI,
      contractBytecode,
      signer,
      // wallet,
    )

    // 생성자에 필요한 매개변수가 있다면 이곳에 추가
    const contract = await factory.deploy(
      landlordDID,
      tenantDID,
      leasePeriod,
      deposit,
      propertyDID,
      contractDate,
      terms,
      sig.r,
      sig.s,
      sig.v,
    )

    // 배포가 완료되기를 기다림
    await contract.deployed()
    // console.log(contract)

    return contract.address
  } catch (error) {
    console.error('Deployment error:', error)
    throw new Error('Error deploying contract. See console for more details.')
  }
}

// 스마트 계약 인스턴스 생성 함수(특정 계약과 상호작용가능한 객체 만들기 위해)

export const getContractInstance = (contractAddress, signerOrProvider) => {
  return new ethers.Contract(contractAddress, contractABI, signerOrProvider)
}

// 임차인이 보증금을 지불하는 함수
export const payDeposit = async (
  contractAddress,
  tenantPrivateKey,
  depositAmount,
) => {
  try {
    // Infura를 통해 이더리움 메인넷에 연결
    const provider = new ethers.providers.JsonRpcProvider(BLOCK_CHAIN_ENDPOINT)

    // 임차인의 지갑 생성이쪽 부분 수정 필요~~
    const tenantWallet = new ethers.Wallet(tenantPrivateKey, provider)

    // 스마트 계약 인스턴스 생성
    const contract = getContractInstance(contractAddress, tenantWallet)

    // 보증금 지불
    const tx = await contract.payDeposit({ value: depositAmount })
    await tx.wait()
    console.log('보증금 지불 성공:', tx)
  } catch (error) {
    console.error('보증금 지불 실패:', error)
  }
}

// 계약 상세 정보를 받아 해시를 생성하는 함수
export const getMessageHash = contractDetails => {
  const {
    landlordDID,
    tenantDID,
    leasePeriod,
    deposit,
    propertyDID,
    contractDate,
    terms,
  } = contractDetails

  // 조건 배열을 하나의 문자열로 결합
  const combinedTerms = terms.join()

  // 패킹 및 해시 생성 과정
  const packedData = ethers.utils.defaultAbiCoder.encode(
    ['string', 'string', 'uint16', 'uint256', 'string', 'uint256', 'string'],
    [
      landlordDID,
      tenantDID,
      leasePeriod,
      deposit,
      propertyDID,
      contractDate,
      combinedTerms,
    ],
  )

  return ethers.utils.keccak256(packedData)
}

// // 임차인이 서명하며 보증금을 지불하는 함수
// export const payDepositAndSign = async (
//   contractAddress,
//   signer, // 지갑과 연결된 signer 객체
//   depositAmount, // 보증금 금액 (예: "1.0" ETH)
//   terms, // 계약 조건 배열
//   walletData, // 지갑 정보
//   password, // 지갑 비밀번호
// ) => {
//   try {
//     // EncryptedJson을 사용하여 지갑을 복원
//     const tenantWallet = await ethers.Wallet.fromEncryptedJson(
//       walletData.data.encPrivateKey,
//       password,
//     )

//     // 이더리움 네트워크에 연결
//     const provider = new ethers.providers.JsonRpcProvider(BLOCK_CHAIN_ENDPOINT)

//     // 지갑을 provider에 연결하여 signer 생성
//     const tenantSigner = tenantWallet.connect(provider)

//     // 스마트 계약 인스턴스 생성
//     const contract = getContractInstance(contractAddress, tenantSigner)

//     // 메시지 해시 생성 (계약 상세 정보를 이용)
//     const messageHash = getMessageHash({
//       landlordDID: signer.address,
//       ...dummyData,
//     })

//     // 메시지에 대한 서명 생성
//     const signature = await tenantWallet.signMessage(
//       ethers.utils.arrayify(messageHash),
//     )
//     const { r, s, v } = ethers.utils.splitSignature(signature)

//     // 'tenantSign' 함수 호출 및 보증금 보내기
//     const txResponse = await contract.tenantSign(r, s, v, {
//       value: ethers.utils.parseEther(depositAmount),
//     })

//     // 트랜잭션 영수증을 기다림
//     const receipt = await txResponse.wait()
//     console.log('Transaction successful:', receipt)
//     return receipt
//   } catch (error) {
//     console.error('Error during signing and paying deposit:', error)
//     throw new Error('Failed to sign and pay deposit.')
//   }
// }
