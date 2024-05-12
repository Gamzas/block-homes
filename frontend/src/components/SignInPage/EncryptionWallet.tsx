import {
  SignInButton,
  SignInWrapper,
} from '@components/SignInPage/style/SignInStyle'
import React, { useState } from 'react'
import { ethers } from 'ethers'
import { useNavigate } from 'react-router-dom'

const EncryptionWallet = ({
  wallet,
  setWallet,
  encryptionWallet,
  setEncryptionWallet,
}: {
  wallet: ethers.Wallet
  setWallet: (wallet: ethers.Wallet) => void
  encryptionWallet: string
  setEncryptionWallet: (encryptionWallet: string) => void
}) => {
  const navigate = useNavigate()
  const [password, setPassword] = useState('')

  const handleEncryptionWalletButtonClick = () => {
    wallet.encrypt(password).then(encryptedWallet => {
      setEncryptionWallet(encryptedWallet)
    })
    if (encryptionWallet) {
      setPassword('')
      setWallet(null)
      navigate('/')
    }
  }

  return (
    <>
      <SignInWrapper>
        <div className="title">지갑 비밀번호</div>
        <input
          className="input"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="지갑을 암호화 하여 저장합니다."
        />
      </SignInWrapper>
      <SignInWrapper>
        <div className="title">비밀번호 확인</div>
        <input
          className="input"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder="비밀번호는 찾을 수 없으니 주의하십시오."
        />
      </SignInWrapper>
      <SignInButton onClick={handleEncryptionWalletButtonClick}>
        지갑 암호화
      </SignInButton>
    </>
  )
}

export default EncryptionWallet
