import TransactionProcessHeader from '@/components/TransactionPage/TransactionProcessHeader'
import * as t from './style/TransactionProgressStyle'
import { useState } from 'react'
import BuyerProcess from '@components/TransactionPage/BuyerProcess'
import SellerProcess from '@components/TransactionPage/SellerProcess'

const TransactionProgressPage = () => {
  const [buyer] = useState(false)
  return (
    <t.TransactionProcessPageContainer>
      <TransactionProcessHeader />
      {buyer ? <BuyerProcess /> : <SellerProcess />}
    </t.TransactionProcessPageContainer>
  )
}

export default TransactionProgressPage
