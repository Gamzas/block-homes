import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { Wallet } from '@klaytn/ethers-ext'
import { BLOCK_CHAIN_ENDPOINT } from '@constants/abi/abi'
import { SignInButton, SignInWrapper } from '@components/SignInPage/style/SignInStyle'
import { ConnectionWalletToggleButton } from '@components/SignInPage/style/ConnectionWallet'

const ConnectionWallet = (
  {
    wallet,
    setWallet,
    setIsFirstStep,
  }: {
    wallet: Wallet | null
    setWallet: (wallet: Wallet) => void
    setIsFirstStep: (isFirstStep: boolean) => void
  }) => {
  const provider = new ethers.providers.JsonRpcProvider(BLOCK_CHAIN_ENDPOINT)
  const [isSelected, setIsSelected] = useState(true)
  const [newWallet, setNewWallet] = useState(null)
  const [oldWallet, setOldWallet] = useState(null)
  const [oldWalletPrivateKey, setOldWalletPrivateKey] = useState('')
  const [privateKeyError, setPrivateKeyError] = useState(null)

  const handleCreateWalletButtonClick = () => {
    if (!newWallet) setNewWallet(Wallet.createRandom().connect(provider))
    setIsSelected(false)
  }

  const handlePrivateKeyInput = (e: {
    target: {
      value: string
    }
  }) => {
    try {
      setOldWalletPrivateKey(e.target.value)
      const loadWallet = new Wallet(e.target.value, provider)
      setOldWallet(loadWallet)
      setPrivateKeyError(null)
    } catch (error) {
      setOldWallet(null)
      setPrivateKeyError('유효하지 않은 키입니다.')
    }
  }

  const handleConnectWalletButtonClick = () => {
    if (isSelected) {
      if (oldWallet) setWallet(oldWallet)
      if (privateKeyError) alert(privateKeyError)
    } else if (!isSelected && newWallet) setWallet(newWallet)
    if (wallet) {
      setOldWallet(null)
      setNewWallet(null)
      setIsFirstStep(false)
    }
  }

  useEffect(() => {
    setOldWalletPrivateKey('') // 기존 지갑 개인 키 입력란을 초기화
  }, [isSelected])

  return (
    <>
      <ConnectionWalletToggleButton $isSelected={isSelected}>
        <div className="left" onClick={() => setIsSelected(true)}>
          기존 지갑
        </div>
        <div className="right" onClick={handleCreateWalletButtonClick}>
          지갑 생성
        </div>
      </ConnectionWalletToggleButton>
      {isSelected ? (
        <>
          <SignInWrapper>
            <div className="title">지갑 개인 키</div>
            <input
              className="input"
              type="password"
              value={oldWalletPrivateKey}
              onChange={handlePrivateKeyInput}
              placeholder="0x0..."
            />
          </SignInWrapper>
          {oldWallet && (
            <SignInWrapper>
              <div className="title">지갑 주소</div>
              <input
                className="input"
                type="text"
                value={oldWallet.address}
                readOnly={true}
              />
            </SignInWrapper>
          )}
        </>
      ) : (
        newWallet && (
          <>
            <SignInWrapper>
              <div className="title">지갑 개인 키</div>
              <input
                className="input"
                type="text"
                value={newWallet.privateKey}
                readOnly={true}
              />
            </SignInWrapper>
            <SignInWrapper>
              <div className="title">지갑 주소</div>
              <input
                className="input"
                type="text"
                value={newWallet.address}
                readOnly={true}
              />
            </SignInWrapper>
          </>
        )
      )}
      <SignInButton onClick={handleConnectWalletButtonClick}>
        지갑 연결
      </SignInButton>
    </>
  )
}

export default ConnectionWallet
