import TransactionProcessHeader from '@/components/TransactionPage/TransactionProcessHeader'
import * as t from './style/TransactionProgressStyle'
import { useState } from 'react'
import Buyer from '@/components/TransactionPage/Buyer'
import Seller from '@/components/TransactionPage/Seller'

const TransactionProgress = () => {
  const [buyer] = useState(true)
  return (
    <t.TransactionProcessPageContainer>
      <TransactionProcessHeader />
      {buyer ? <Buyer /> : <Seller />}
      <t.TransactionProcessFooter />
    </t.TransactionProcessPageContainer>
  )
}

export default TransactionProgress
