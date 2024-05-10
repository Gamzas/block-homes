import { ProcessHeaderContainer, ShopIcon } from './style/HeaderStyle'

const TransactionProcessHeader = () => {
  return (
    <ProcessHeaderContainer>
      <ShopIcon />
      <div className="header-text">거래 진행 상황</div>
    </ProcessHeaderContainer>
  )
}

export default TransactionProcessHeader
