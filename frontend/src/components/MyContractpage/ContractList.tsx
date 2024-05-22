import { useAtom } from 'jotai'
import { userAtom } from '@/stores/atoms/userStore'
import { useGetMyContract } from '@/apis/contractApi'
import ItemLoading from '@/common/ItemLoading'
import * as c from '@components/MyContractpage/style/ContractListStyle'
import ContractInfoCard from './ContractInfoCard'
import useLoginStatus from '@/hooks/useLoginStatus'
import NoContract from './NoContract'
import { useState } from 'react'

const ContractList = () => {
  useLoginStatus()
  const [user] = useAtom(userAtom)
  const [mode, setMode] = useState<number>(1)
  const walletAddress = user.walletAddress
  const { data, isLoading, error } = useGetMyContract(mode, walletAddress)
  if (isLoading) {
    return <ItemLoading />
  }

  if (error) {
    return <div>An error has occurred: {error.message}</div>
  }

  // console.log(data)

  const contractList = data?.contractLists || []

  return (
    <>
      <c.UserTypeToggleContainer>
        <button
          className={`tenant ${mode === 1 ? 'active' : ''}`}
          onClick={() => setMode(1)}
        >
          임차 | 매수
        </button>
        <button
          className={`landlord ${mode === 2 ? 'active' : ''}`}
          onClick={() => setMode(2)}
        >
          임대 | 매도
        </button>
      </c.UserTypeToggleContainer>
      {contractList.length !== 0 ? (
        <c.ContractListContainer>
          {contractList.map((contract, index) => (
            <ContractInfoCard
              key={index}
              contractAddress={contract.contractAddress}
            />
          ))}
          {/* <ContractInfoCard
        contractAddress={'0x59Adae45A0B14AFE1fe63A82F87a8DCc5AA318B8'}
      /> */}
        </c.ContractListContainer>
      ) : (
        <NoContract />
      )}
    </>
  )
}

export default ContractList
