import React, { useState } from 'react'
import { ethers } from 'ethers'
import { BLOCK_CHAIN_ENDPOINT } from '@constants/abi'
import {
  SignInButton,
  SignInWrapper,
} from '@components/SignInPage/style/SignInStyle'
import { ConnectionWalletToggleButton } from '@components/SignInPage/style/ConnectionWallet'

const ConnectionWallet = ({
  wallet,
  setWallet,
  setIsFirstStep,
}: {
  wallet: ethers.Wallet | null
  setWallet: (wallet: ethers.Wallet) => void
  setIsFirstStep: (isFirstStep: boolean) => void
}) => {
  const [isSelected, setIsSelected] = useState(true)
  const [newWallet, setNewWallet] = useState(null)
  const [oldWallet, setOldWallet] = useState(null)

  const handleCreateWalletButtonClick = () => {
    if (!newWallet) setNewWallet(ethers.Wallet.createRandom())
    setIsSelected(false)
  }

  const handlePrivateKeyInput = (e: {
    target: {
      value: string
    }
  }) => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(
        BLOCK_CHAIN_ENDPOINT,
      )
      const loadWallet = new ethers.Wallet(e.target.value, provider)
      setOldWallet(loadWallet)
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
