import {
  SignInButton,
  SignInWrapper,
  SignUpToggleButton,
} from '@components/SignInPage/style/SignInStyle'
import React, { useState } from 'react'
import { ethers } from 'ethers'
import { BLOCK_CHAIN_ENDPOINT } from '@constants/abi'

const ConnectionWallet = () => {
  const [isSelected, setIsSelected] = useState(true)
  const [isFirstStep, setIsFirstStep] = useState(true)
  const [newWallet, setNewWallet] = useState(null)
  const [oldWallet, setOldWallet] = useState(null)
  const [wallet, setWallet] = useState(null)
  const [privateKey, setPrivateKey] = useState()
  const [password, setPassword] = useState('')
  const [encryptedPrivateKey, setEncryptedPrivateKey] = useState('')
  // 지갑 생성 및 개인키 암호화
  const handleCreateWallet = async () => {
    try {
      console.log(wallet)
      // 개인키를 사용자의 비밀번호로 암호화
      const encryptedJson = await wallet.encrypt(password)
      setEncryptedPrivateKey(encryptedJson)
      alert('지갑이 생성되었습니다! 개인키가 암호화되었습니다.')
      console.log(encryptedJson)
    } catch (error) {
      console.error('지갑 생성 또는 암호화 중 오류 발생:', error)
    }
  }
  const handleCreateWalletButtonClick = () => {
    if (!newWallet) setNewWallet(ethers.Wallet.createRandom())
    setIsSelected(false)
  }
  const handlePrivateKeyInput = e => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        BLOCK_CHAIN_ENDPOINT,
      )
      const wallet = new ethers.Wallet(e.target.value, provider)
      setOldWallet(wallet.address)
    } catch (error) {
      console.error('개인키 오류:', error.message)
    }
  }

  const handleConnectWalletButtonClick = () => {
    if (isSelected && oldWallet) setWallet(oldWallet)
    else if (!isSelected && newWallet) setWallet(newWallet)
    if (wallet) {
      setOldWallet(null)
      setNewWallet(null)
      setIsFirstStep(false)
    }
  }
  return (
    <>
      {isFirstStep ? (
        <>
          <SignUpToggleButton $isSelected={isSelected}>
            <div className="left" onClick={() => setIsSelected(true)}>
              기존 지갑
            </div>
            <div className="right" onClick={handleCreateWalletButtonClick}>
              지갑 생성
            </div>
          </SignUpToggleButton>
          <SignInWrapper>
            <div className="title">지갑 개인 키</div>
            <input
              className="input"
              type="password"
              value={privateKey}
              onChange={handlePrivateKeyInput}
              placeholder="0x0..."
            />
          </SignInWrapper>
          <SignInWrapper>
            <div className="title">지갑 주소</div>
            <div className="title">0x239u4293749237489</div>
          </SignInWrapper>
          <SignInButton onClick={handleConnectWalletButtonClick}>
            지갑 연결
          </SignInButton>
        </>
      ) : (
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
          <SignInButton onClick={handleConnectWalletButtonClick}>
            지갑 암호화
          </SignInButton>
        </>
      )}
    </>
  )
}

export default ConnectionWallet
