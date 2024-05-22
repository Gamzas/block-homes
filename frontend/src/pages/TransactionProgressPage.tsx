import TransactionProcessHeader from '@/components/TransactionPage/TransactionProcessHeader'
import * as t from './style/TransactionProgressStyle'
import BuyerProcess from '@components/TransactionPage/BuyerProcess'
import SellerProcess from '@components/TransactionPage/SellerProcess'
import { useAtom } from 'jotai'
import { userModeAtom } from '@stores/atoms/userStore'

const TransactionProgressPage = () => {
  const [userMode] = useAtom(userModeAtom)

  return (
    <t.TransactionProcessPageContainer>
      <TransactionProcessHeader />
      {userMode === 1 ? <BuyerProcess /> : <SellerProcess />}
    </t.TransactionProcessPageContainer>
  )
}

export default TransactionProgressPage
