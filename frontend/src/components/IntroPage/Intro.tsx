import { IntroContainer } from '@components/IntroPage/style/IntroStyle'
import { useAtomValue } from 'jotai'
import { userAtom } from '@stores/atoms/userStore'
import { useGetWallet } from '@apis/walletApi'
import { useState } from 'react'
import { ethers } from 'ethers'
import { useClaimCredential } from '@/abi/ownershipVCRegistry/claimCredential'

const Intro = () => {
  const currentUser = useAtomValue(userAtom)
  const { data: getWalletData } = useGetWallet({
    walletAddress: currentUser.walletAddress,
  })
  const { mutate: claimCredentialMutate } = useClaimCredential()
  const [userWallet, setUserWallet] = useState(null)
  const [password, setPassword] = useState('')

  const handleDecryptedWalletButtonClick = () => {
    if (getWalletData) {
      ethers.Wallet.fromEncryptedJson(
        getWalletData.data.encPrivateKey,
        password,
      ).then(decryptionWallet => {
        setUserWallet(decryptionWallet)
        console.log('decryptionWallet: ', decryptionWallet)
      })
    }
  }

  const handleClaimCredentialButtonClick = async () => {
    if (userWallet) {
      const subject = '{holder : did:klay:0x..., property : did:klay:0x...}'
      const value = 'did:klay:0x...'
      const message = ethers.utils.solidityKeccak256(
        ['string', 'uint256', 'string'],
        [subject, Math.floor(Date.now() / 1000), value],
      )
      const messageBytes = ethers.utils.arrayify(message)
      const flatSig = await userWallet.signMessage(messageBytes)
      const sig = ethers.utils.splitSignature(flatSig)

      const params = {
        _subject: subject,
        _issuanceDate: Math.floor(Date.now() / 1000),
        _r: sig.r,
        _s: sig.s,
        _v: sig.v,
        _value: value,
      }
      claimCredentialMutate(params)
    }
  }

  return (
    <IntroContainer>
      <div>VC 발급 테스트 중이에요</div>
      <br />
      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        placeholder="지갑 비밀번호를 입력하세요"
      />
      <br />
      <button onClick={handleDecryptedWalletButtonClick}>지갑 복호화</button>
      <br />
      <button onClick={handleClaimCredentialButtonClick}>VC 생성</button>
    </IntroContainer>
  )
}

export default Intro
