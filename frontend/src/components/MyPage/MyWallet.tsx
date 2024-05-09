import * as w from '@components/MyPage/style/MyWalletStyle'

const MyWallet = () => {
  return (
    <w.WalletWrapper>
      <w.WalletContainer>
        <w.BalanceBox>
          <div className="title">나의 지갑 잔액</div>
          <div className="balance">1,000 원</div>
        </w.BalanceBox>
        <img className="wallet" src="image/image_wallet.png" alt="지갑" />
      </w.WalletContainer>
    </w.WalletWrapper>
  )
}

export default MyWallet
