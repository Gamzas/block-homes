import React, { useState } from 'react'
import { ethers } from 'ethers'
import ConnectionWallet from '@components/SignInPage/ConnectionWallet'
import EncryptionWallet from '@components/SignInPage/EncryptionWallet'

const SignUp = () => {
  const [wallet, setWallet] = useState<ethers.Wallet | null>(null)
  const [encryptionWallet, setEncryptionWallet] = useState<string | null>(null)
  const [isFirstStep, setIsFirstStep] = useState(true)
  return (
    <>
      {isFirstStep ? (
        <ConnectionWallet
          wallet={wallet}
          setWallet={setWallet}
          setIsFirstStep={setIsFirstStep}
        />
      ) : (
        <EncryptionWallet
          wallet={wallet}
          setWallet={setWallet}
          encryptionWallet={encryptionWallet}
          setEncryptionWallet={setEncryptionWallet}
        />
      )}
    </>
  )
}

export default SignUp
