import { ethers } from 'ethers'
import { BLOCK_CHAIN_ENDPOINT } from '@constants/abi/abi'

import { contractABI } from '@/constants/abi/contractAbi'
import { contractBytecode } from '@/constants/bytecode/contractBytecode'

// 스마트 계약 배포 함수
export const deployContract = async (
  privateKey, // 지갑의 개인키
  landlordDID, // 임대인의 DID
  tenantDID, // 임차인의 DID
  leasePeriod, // 임대 기간
  deposit, // 보증금
  propertyDID, // 부동산의 DID
  contractDate, // 계약 날짜
  terms, // 계약 조건
) => {
  try {
    // Infura를 통해 이더리움 메인넷에 연결
    const provider = new ethers.providers.JsonRpcProvider(BLOCK_CHAIN_ENDPOINT)

    // 메타마스크에서 제공하는 개인 키를 사용하여 지갑 생성
    const wallet = new ethers.Wallet(privateKey, provider)

    // 스마트 계약 팩토리 준비
    const factory = new ethers.ContractFactory(
      contractABI,
      contractBytecode,
      wallet,
    )

    // 스마트 계약의 생성자 또는 함수가 이러한 서명들을 바이트 배열(bytes)로 요구
    // 유효한 16진수 문자열만 바이트 배열로 변환
    // const landlordSigBytes = ethers.utils.arrayify(landlordSignature)
    // const tenantSigBytes = ethers.utils.arrayify(tenantSignature)

    // 생성자에 필요한 매개변수가 있다면 이곳에 추가
    const contract = await factory.deploy(
      landlordDID,
      tenantDID,
      leasePeriod,
      deposit,
      propertyDID,
      contractDate,
      terms,
    )

    // 배포가 완료되기를 기다림
    await contract.deployed()

    return `Contract deployed at address: ${contract.address}`
  } catch (error) {
    console.error('Deployment error:', error)
    throw new Error('Error deploying contract. See console for more details.')
  }
}
// 임의의 메시지에 대한 서명을 생성합니다. 나중에 지갑 있으면 그때 사용하기 암호키 해쉬로 만드는 작업 필요~~~
// export const generateDummySignature = async (wallet) {
//   const message = 'Some dummy data to sign'
//   const messageHash = ethers.utils.id(message)
//   const signature = await wallet.signMessage(ethers.utils.arrayify(messageHash))
//   return signature
// }
// import Caver from 'caver-js'
// import { contractABI } from '@/constants/abi/contractAbi'
// import { contractBytecode } from '@/constants/bytecode/contractBytecode'
// // import { contractABI, contractBytecode } from '@/constants/abi'

// const BLOCK_CHAIN_ENDPOINT = 'https://api.baobab.klaytn.net:8651'

// export const deployContract = async (
//   privateKey: string,
//   landlordDID: string,
//   tenantDID: string,
//   leasePeriod: number,
//   deposit: string,
//   propertyDID: string,
//   contractDate: number,
//   terms: string[],
// ): Promise<string> => {
//   try {
//     const caver = new Caver(BLOCK_CHAIN_ENDPOINT)

//     // 지갑과 계정 설정
//     const walletInstance = caver.wallet.newKeyring(
//       '0xc14E094bEc4432D732Cd514CcDEEba332a9Af8aF',
//       privateKey,
//     )

//     // 스마트 계약 인스턴스 생성
//     const contract = new caver.contract(contractABI as any, contractBytecode)

//     // 계약 배포
//     const deployOptions = {
//       from: walletInstance.address,
//       gas: '2000000', // 사용할 가스의 양 설정
//     }

//     const deployedContract = await contract
//       .deploy(
//         {
//           data: contractBytecode,
//           arguments: [
//             landlordDID,
//             tenantDID,
//             leasePeriod,
//             deposit,
//             propertyDID,
//             contractDate,
//             terms,
//           ],
//         },
//         deployOptions,
//       )
//       .send({
//         from: walletInstance.address,
//         gas: 8500000,
//       })

//     return `Contract deployed at address: ${deployedContract.options.address}`
//   } catch (error) {
//     console.error('Deployment error:', error)
//     throw new Error('Error deploying contract. See console for more details.')
//   }
// }
