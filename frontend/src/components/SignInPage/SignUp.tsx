import React, { useState } from 'react'
import ConnectionWallet from '@components/SignInPage/ConnectionWallet'
import EncryptionWallet from '@components/SignInPage/EncryptionWallet'
import { ethers } from 'ethers'

const SignUp = ({
                  name,
                  phoneNumber,
                }: {
  name: string
  phoneNumber: string
}) => {
  const [wallet, setWallet] = useState<ethers.Wallet | null>(null)
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
          name={name}
          phoneNumber={phoneNumber}
          wallet={wallet}
          setWallet={setWallet}
        />
      )}
    </>
  )
}

export default SignUp
