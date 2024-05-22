import { useAtomValue } from 'jotai'
import { userAtom } from '@stores/atoms/userStore'
import { useGetWallet } from '@apis/walletApi'
import { useState } from 'react'
import { ethers } from 'ethers'
import { TestContainer } from '@components/TestPage/style/TestStyle'

const DecryptedWallet = () => {
  const currentUser = useAtomValue(userAtom)
  const { data: getWalletData } = useGetWallet({
    walletAddress: currentUser.walletAddress,
  })
  const [password, setPassword] = useState('')

  const handleDecryptedWalletButtonClick = () => {
    if (getWalletData) {
      ethers.Wallet.fromEncryptedJson(
        getWalletData.data.encPrivateKey,
        password,
      ).then(decryptionWallet => {
        console.log('decryptionWallet: ', decryptionWallet)
      })
    }
  }
  return (
    <TestContainer>
      <div>지갑 복호화 테스트</div>
      <br />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="지갑 비밀번호를 입력하세요"
      />
      <br />
      <button onClick={handleDecryptedWalletButtonClick}>지갑 복호화</button>
    </TestContainer>
  )
}

export default DecryptedWallet
