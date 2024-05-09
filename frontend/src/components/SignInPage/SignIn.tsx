import React, { useEffect, useState } from 'react'
import * as k from '@/components/SignInPage/style/SignInStyle'
import Header from '@/common/Header'
import { useGetResult, usePostPrepare } from '@/apis/kaikasApi'
import { useAtom } from 'jotai'
import { accountAtom } from '@stores/atoms/accountStore'
import { KAIKAS_API_AUTH_TYPE, KAIKAS_API_CONTRACT_EXECUTION_TYPE } from '@constants/kaikas'
import { CONTRACT_ADDRESS, TEST_ABI } from '@constants/abi'

interface Keys {
  publicKey: CryptoKey;
  privateKey: CryptoKey;
}

const SignIn = () => {
  const [currentAccount, setCurrentAccount] = useAtom(accountAtom)
  const [authRequestKey, setAuthRequestKey] = useState<string | null>(null)
  const [testRequestKey, setTestRequestKey] = useState<string | null>(null)
  const [keys, setKeys] = useState<Keys | null>(null)
  const generateKeys = async () => {
    try {
      const keyPair = await window.crypto.subtle.generateKey(
        {
          name: 'ECDSA',
          namedCurve: 'P-256', // P-256, P-384, or P-521
        },
        true, // whether the key is extractable (i.e. can be used in exportKey)
        ['sign', 'verify'], // can be any combination of "sign" and "verify"
      )

      setKeys({
        publicKey: keyPair.publicKey,
        privateKey: keyPair.privateKey,
      })
    } catch (error) {
      console.error('Error generating keys:', error)
    }
  }

  useEffect(() => {
    generateKeys()
  }, [])

  const {
    mutate: prepareAuth,
  } = usePostPrepare({ type: KAIKAS_API_AUTH_TYPE }, setAuthRequestKey)

  const {
    data: resultAuth,
  } = useGetResult(authRequestKey)

  const handlePrepareRequest = () => {
    prepareAuth()
  }

  useEffect(() => {
    if (resultAuth) {
      setCurrentAccount(resultAuth.result)
      console.log(resultAuth)
    }
  }, [resultAuth, setCurrentAccount])

  const {
    mutate: prepareTest,
  } = usePostPrepare({
    type: KAIKAS_API_CONTRACT_EXECUTION_TYPE,
    transaction: {
      abi: TEST_ABI,
      value: '0',
      to: CONTRACT_ADDRESS,
      params: JSON.stringify([`${keys.publicKey}`]),
    },
  }, setTestRequestKey)

  const {
    data: resultTest,
  } = useGetResult(testRequestKey)

  const handleTest = () => {
    if (keys) {
      prepareTest()
    } else {
      console.error('Keys are not generated yet.')
    }
  }

  useEffect(() => {
    if (resultTest) {
      console.log(resultTest)
    }
  }, [resultTest])
  return (
    <k.SignInContainer>
      <Header title="로그인" isSearch={false} rightIconSrc={null} />
      <k.SignInButton onClick={handlePrepareRequest}>
        Kaikas prepare / request
      </k.SignInButton>
      <br />
      <k.SignInButton onClick={handleTest}>
        Test
      </k.SignInButton>
      <br />
      {currentAccount && <div>{currentAccount.klaytn_address}</div>}
    </k.SignInContainer>
  )
}

export default SignIn
