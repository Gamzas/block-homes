import * as h from './style/HeaderStyle'

const TransactionProcessHeader = () => {
  return (
    <h.ProcessHeaderContainer>
      <h.ShopIcon />
      <h.TextContainer>
        <div className="header-text">거래 진행 상황</div>
        <div className="header-text-small">
          다음 절차를 한눈에 알아보고
          <br /> 거래를 계속해보세요!
        </div>
      </h.TextContainer>
    </h.ProcessHeaderContainer>
  )
}

export default TransactionProcessHeader
