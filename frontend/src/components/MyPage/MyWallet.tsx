import * as w from '@components/MyPage/style/MyWalletStyle'
import useCheckBalance from '@/hooks/useCheckBalance'
import { useEffect } from 'react'

const MyWallet = () => {
  const { handleCheckBalance, balance } = useCheckBalance()
  const roundToTwoDecimalPlaces = (num: number): number => {
    return parseFloat(num.toFixed(2))
  }
  useEffect(() => {
    handleCheckBalance()
  }, [handleCheckBalance])
  const myBalance = roundToTwoDecimalPlaces(Number(balance))
  return (
    <w.WalletWrapper>
      <w.WalletContainer onClick={handleCheckBalance}>
        <w.BalanceBox>
          <div className="title">나의 지갑 잔액</div>
          <div className="balance">{myBalance} KLAY</div>
        </w.BalanceBox>
        <img className="wallet" src="image/image_wallet.png" alt="지갑" />
      </w.WalletContainer>
    </w.WalletWrapper>
  )
}

export default MyWallet
