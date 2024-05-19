import { useAtom } from 'jotai'
import { userAtom } from '@/stores/atoms/userStore'
import { useGetMyContract } from '@/apis/contractApi'
import ItemLoading from '@/common/ItemLoading'
import * as c from '@components/MyContractpage/style/ContractListStyle'
import ContractInfoCard from './ContractInfoCard'
import useLoginStatus from '@/hooks/useLoginStatus'
import NoContract from './NoContract'

const ContractList = () => {
  useLoginStatus()
  const [user] = useAtom(userAtom)
  const walletAddress = user.walletAddress
  const { data, isLoading, error } = useGetMyContract(0, walletAddress)

  if (isLoading) {
    return <ItemLoading />
  }

  if (error) {
    return <div>An error has occurred: {error.message}</div>
  }

  // console.log(data)

  const contractList = data?.contractLists || []

  return contractList.length !== 0 ? (
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
  )
}

export default ContractList
