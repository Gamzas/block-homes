import TransactionProcessHeader from '@/components/TransactionPage/TransactionProcessHeader'
import * as t from './style/TransactionProgressStyle'
import { useState } from 'react'
import Seller from '@/components/TransactionPage/Seller'
import BuyerProcess from '@components/TransactionPage/BuyerProcess'

const TransactionProgressPage = () => {
  // buyer 판매자 구매자 화면 전환 ^
  const [buyer] = useState(true)
  return (
    <t.TransactionProcessPageContainer>
      <TransactionProcessHeader />
      {buyer ? <BuyerProcess /> : <Seller />}
    </t.TransactionProcessPageContainer>
  )
}

export default TransactionProgressPage
