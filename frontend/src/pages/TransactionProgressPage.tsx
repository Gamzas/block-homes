import TransactionProcessHeader from '@/components/TransactionPage/TransactionProcessHeader'
import * as t from './style/TransactionProgressStyle'
import { useState } from 'react'
import Buyer from '@/components/TransactionPage/Buyer'
import Seller from '@/components/TransactionPage/Seller'

const TransactionProgressPage = () => {
  // buyer 판매자 구매자 화면 전환 ^
  const [buyer] = useState(true)
  return (
    <t.TransactionProcessPageContainer>
      <TransactionProcessHeader />
      {buyer ? <Buyer /> : <Seller />}
      <t.TransactionProcessFooter />
    </t.TransactionProcessPageContainer>
  )
}

export default TransactionProgressPage
