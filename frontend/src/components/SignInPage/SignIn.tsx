import React, { useEffect, useState } from 'react'
import * as k from '@/components/SignInPage/style/SignInStyle'
import Header from '@/common/Header'
import { useGetResult, usePostPrepare } from '@/apis/kaikasApi'
import { useAtom } from 'jotai'
import { accountAtom } from '@stores/atoms/accountStore'
import { KAIKAS_API_AUTH_TYPE } from '@constants/kaikas'


const SignIn = () => {
  const [currentAccount, setCurrentAccount] = useAtom(accountAtom)
  const [authRequestKey, setAuthRequestKey] = useState<string | null>(null)
  const [testRequestKey, setTestRequestKey] = useState<string | null>(null)
  const [keys, setKeys] = useState({
    publicKey: null,
    privateKey: null,
  })
  const generateKeys = async () => {
    try {
      const keyPair = await window.crypto.subtle.generateKey(
        { name: 'ECDSA', namedCurve: 'P-256' },
        true,
        ['sign', 'verify'],
      )

      // 공개 키 추출
      const publicKey = await window.crypto.subtle.exportKey('spki', keyPair.publicKey)
      console.log(publicKey)
      const publicKeyBase64 = bufferToBase64(publicKey)
      console.log(typeof publicKeyBase64)
      const publicKeyPEM = `-----BEGIN PUBLIC KEY-----\n${formatPEM(publicKeyBase64)}\n-----END PUBLIC KEY-----`
      console.log(publicKeyPEM)

      // 비밀 키 추출
      const privateKey = await window.crypto.subtle.exportKey('pkcs8', keyPair.privateKey)
      const privateKeyBase64 = bufferToBase64(privateKey)
      const privateKeyPEM = `-----BEGIN PRIVATE KEY-----\n${formatPEM(privateKeyBase64)}\n-----END PRIVATE KEY-----`

      setKeys({ publicKey: publicKeyPEM, privateKey: privateKeyPEM })
    } catch (error) {
      console.error('Error generating keys:', error)
    }
  }

// ArrayBuffer를 Base64로 변환
  const bufferToBase64 = (buffer) => {
    return btoa(String.fromCharCode(...new Uint8Array(buffer)))
  }

// Base64 문자열을 PEM 형식에 맞게 줄바꿈 처리
  const formatPEM = (str) => {
    let finalString = ''
    while (str.length > 0) {
      finalString += str.substring(0, 64) + '\n'
      str = str.substring(64)
    }
    return finalString
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

  // const {
  //   mutate: prepareTest,
  // } = usePostPrepare({
  //   type: KAIKAS_API_CONTRACT_EXECUTION_TYPE,
  //   transaction: {
  //     abi: TEST_ABI,
  //     value: '0',
  //     to: CONTRACT_ADDRESS,
  //     params: JSON.stringify([`${keys.publicKey}`]),
  //   },
  // }, setTestRequestKey)

  // const {
  //   data: resultTest,
  // } = useGetResult(testRequestKey)
  //
  // const handleTest = () => {
  //   if (keys) {
  //     prepareTest()
  //   } else {
  //     console.error('Keys are not generated yet.')
  //   }
  // }
  //
  // useEffect(() => {
  //   if (resultTest) {
  //     console.log(resultTest)
  //   }
  // }, [resultTest])

  return (
    <k.SignInContainer>
      <Header title="로그인" isSearch={false} rightIconSrc={null} />
      <k.SignInButton onClick={handlePrepareRequest}>
        Kaikas prepare / request
      </k.SignInButton>
      <br />
      {/*<k.SignInButton onClick={handleTest}>*/}
      {/*  Test*/}
      {/*</k.SignInButton>*/}
      <br />
      {currentAccount && <div>{currentAccount.klaytn_address}</div>}
    </k.SignInContainer>
  )
}

export default SignIn
