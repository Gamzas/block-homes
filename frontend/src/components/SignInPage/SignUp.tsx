import React, { useState } from 'react'
import ConnectionWallet from '@components/SignInPage/ConnectionWallet'
import EncryptionWallet from '@components/SignInPage/EncryptionWallet'
import { Wallet } from '@klaytn/ethers-ext'

const SignUp = ({
  name,
  phoneNumber,
}: {
  name: string
  phoneNumber: string
}) => {
  const [wallet, setWallet] = useState<Wallet | null>(null)
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
          name={name}
          phoneNumber={phoneNumber}
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
